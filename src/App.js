import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { Props2 } from './components/Props2';
import { ContactUs } from './components/emialjs';

function App() {
  const [number, setnumber] = useState(15);
  let incNum = () => {
    setnumber(number + 1)
  }
  let decNum = () => {
    setnumber(number > 0 ? number - 1 : 0);
  }
  return (
    <>
      <div className='min-h-100vh d-flex align-items-center justfy-content-center flex-column'>
        <h1>Number {number}</h1>
        <div className='d-flex gap-3'>  <button onClick={incNum}>Inc Num</button>
          <button onClick={decNum}>Dec Num</button>
        </div>
      </div>

      <Props2 mail="sandeep@email.com" />
      <ContactUs />
    </>
  );
}

export default App;
