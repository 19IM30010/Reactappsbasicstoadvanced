import {useRef,useState} from 'react';
function TextInputWithFocusButton(){
    const [inputText, setText] = useState('hello'); 
    const inputEl = useRef(null);
    const onButtonClick = () =>{
        inputEl.current.focus();
    }
    const inputChange= e =>{
        setText(e.target.value);
    }
    return (
        <div>
            <input ref={inputEl} type="text" onChange={inputChange}/>
            <p>This is the {inputText}</p>
            <button onClick={()=>setText("hello")}>
                Reset!
            </button>
            <button onClick={onButtonClick}>
                Focus
            </button>
        </div>
    );
}
export default TextInputWithFocusButton;