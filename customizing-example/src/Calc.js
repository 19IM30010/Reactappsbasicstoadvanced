import {useRef,useState} from 'react';
import './App.css';
export default function Calc(){
    const [result,setResult]=useState(0);
    const val=useRef(null);
    function dividenums(){
        if(val.current.value==='0'){
            alert("Can't Divide with 0");
        }
        else{
            setResult(result/parseFloat(val.current.value));
        }
    }




    return (
        <div style={{left:'0',position:'absolute'}}>
            <h1 >Simplest Working Calculator</h1>
            <h3>{result}</h3>
            <input ref={val}/>
            <div style={{display: 'flex'}}>
                <button className="btn" onClick={()=>{setResult(result+parseInt(val.current.value))}}>add</button>
                <button className="btn" onClick={()=>{setResult(result-parseInt(val.current.value))}}>subtract</button>
                <button className="btn" onClick={()=>{setResult(result*parseInt(val.current.value))}}>multiply</button>
                <button className="btn" onClick={dividenums}>divide</button>
                <button className="btn" style={{backgroundColor:'orange'}} onClick={()=>{val.current.value='0'}}>reset input</button>
                <button className="btn" style={{backgroundColor:'orange'}} onClick={()=>{setResult(0)}}>reset result</button>
            </div>

        </div>
    );
}