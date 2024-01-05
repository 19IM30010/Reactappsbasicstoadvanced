import logo from './logo.svg';
// import './App.css';
import Apple from './Apple';
// Calc
import Bag from './Bag';
import Pears from './Pears';
// import {Routes,Route,Link} from 'react-router-dom';
import Heading from './Heading';
// import Btn from './Btn';
import ModTogglers from './ModTogglers';
import Child from './Child';
import TextInputWithFocusButton from './buttons/TextInputWithFocusButton';
import RegisterForm from './RegisterForm';
import ReactPlayer from 'react-player';
import Calc from './Calc';
const MyVideo = () => {
  return (
    <ReactPlayer url='https://www.youtube.com/watch?v=-hOHvazL6g4&list=RD-hOHvazL6g4&start_radio=1' height={'500px'} width={'100%'} playing={false} volume={0.5}/>
  );
};

const bool = false;
const str1 = "just";
function Example(props) {
    return (
        <div>
            <h2>
                The value of the toggleBoolean prop is:{props.toggleBoolean.toString()}
            </h2>
            <p>The value of the math prop is: <em>{props.math}</em></p>
            <p>The value of the str prop is: <em style={{fontWeight: 'bold'}}>{props.str}</em></p>
        </div>
    );
};

function Logo(props){
  const image = <img src={logo} style={{height: '10%', width: '10%'}}/>;
  return image;
}

export default function HomePage(){

    let date = new Date();
    const bird1 = new Audio( 
      "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3" 
    ); 
   
    const bird2 = new Audio( 
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3" 
    ); 
   
    function toggle1() { 
      if (bird1.paused) { 
        bird1.play(); 
      } else { 
        bird1.pause(); 
      } 
    }; 
   
    function toggle2() { 
      if (bird2.paused) { 
        bird2.play(); 
      } else { 
        bird2.pause(); 
      } 
    }; 
  return (
    <div className="HomePage">
      {/* <MyVideo /> */}
      <br/>
      <br/>
      <br/>
      <button onClick={toggle1} style={{padding:'20px',backgroundColor:'Orange',borderRadius:'5px',margin:'10px'}}>Caspian Tern 1</button> 
      <button onClick={toggle2} style={{padding:'20px',backgroundColor:'Orange',borderRadius:'5px',margin:'10px'}}>Caspian Tern 2</button> 
      <Calc/>
      <TextInputWithFocusButton/>
      <RegisterForm/>
      <Child message ={date.toLocaleTimeString()}/>
      <ModTogglers/>
      {/* <Btn/> */}
      <Logo/>
      <Example toggleBoolean={!bool} math = {(2+3)/4} str={str1+" Hello Guys " + str1}/>
      <Bag children={<h3>Sexy lady</h3>}/>
      <Bag children={<Apple color="Red" number="10"/>}/>
      <Bag children={<Pears friend="John"/>}/>

      <Heading firstname="Hello Guys" lastname="Hi John"/>
      <Heading firstname="Bob" lastname="Bones"/>
      
      {/* <Nav1/> */}
      {/* <Promo1/>
      <Intro11/>
      <Intro21/>
      <Intro31/> */}
      {/* <Footer1/> */}
    </div>
  );
}