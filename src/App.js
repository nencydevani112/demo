import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
var t=0;
var val = ["","","","","","","","",""];

function App() {
 
  const [pos,setpos] = useState('');
  const [num,setNum] = useState(0);
    const [val1,setval1] = useState([]);
    // const [val,setval] = useState(["","","","","","","","",""]);


   
    const sign = (i) => {
      t = num
        if(t%2==0)
        {
            val[i]= "X";
        }
        else
        {
            val[i]= "O";
        }
        setval1(val)
        // console.log(val);
        t++;
        setNum(t);
        winner();
        
    }

    const winner =(i)=>{
      if(val[0]=='x'&& val[1]=='x'&& val[2]=='x'||
        val[3]=='x'&&val[4]=='x'&&val[5]=='x'||
        val[6]=='x'&&val[7]=='x'&&val[8]=='x'||
        val[0]
      )
      {
        alert('x is win');
      }
    }

  return (
    <>
        <div className='main'>
          {/* <h4 className="define">first user=X <br></br>second user=0</h4> */}
          <div>
            <input type='button' className='btn' value={val1[0]} onClick={ () => {sign(0)}}></input>
            <input type='button' className='btn' value={val1[1]} onClick={() => {sign(1)}}></input>
            <input type='button' className='btn' value={val1[2]} onClick={() => {sign(2)}}></input>
          </div>
          <div>
            <input type='button' className='btn' value={val1[3]} onClick={() => {sign('3')}}></input>
            <input type='button' className='btn' value={val1[4]} onClick={() => {sign('4')}}></input>
            <input type='button' className='btn' value={val1[5]} onClick={() => {sign('5')}}></input>
          </div>
          <div>
            <input type='button' className='btn' value={val1[6]} onClick={() => {sign('6')}}></input>
            <input type='button' className='btn' value={val1[7]} onClick={() =>{sign('7')}}></input>
            <input type='button' className='btn' value={val1[8]} onClick={() => {sign('8')}}></input>
          </div>
        </div>
        <div>
                <input type="button" className='set'  value="set"></input>
        </div>
    </>
  );
}

export default App;
