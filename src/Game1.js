// import useState from 'react-hook-use-state';
import { useState } from 'react';
import './App.css';
var t=0;
function Game1(){
    // const[reset,setreset]=useState('');
    // const[win,setwin]=useState('');
    // const[data,setdata]=useState('');
    const[data,setdata]=useState(["","","","","","","","",""]);

    const calc=(i)=>{
        if(t%2==0)
        {
            setdata[i]='x';
            console.log()
        }
        else
        {
            setdata[i]='o';
        }
        t++;
    }
    return(
        <>
        <div className='main'>
            <div>
                <input type="button" className='btn' value={data[0]} onClick={()=>calc('0')}></input>
                <input type="button" className='btn' value={data[1]} onClick={()=>calc('1')}></input>
                <input type="button" className='btn' value={data[2]} onClick={()=>calc('2')}></input>
            </div>
            <div>
                <input type="button" className='btn' value={data[3]} onClick={()=>calc('3')}></input>
                <input type="button" className='btn' value={data[4]} onClick={()=>calc('4')}></input>
                <input type="button" className='btn' value={data[5]} onClick={()=>calc('5')}></input>
            </div>  
            <div>
                <input type="button" className='btn' value={data[6]} onClick={()=>calc('6')}></input>
                <input type="button" className='btn' value={data[7]} onClick={()=>calc('7')}></input>
                <input type="button" className='btn' value={data[8]} onClick={()=>calc('8')}></input>
            </div>  
        </div>  
            <div>
                <input type="button" className='set'  value="set"></input>
            </div>
          
        </>
    );
}
export default Game1;