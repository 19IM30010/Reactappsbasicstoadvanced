function ModTogglers(){
    let darkModeon = false;
    const darkMode = <h1>Dark Mode On</h1>;
    const lightMode = <h1>Light Mode On</h1>;
    const handleClick = ()=> {
        darkModeon=!darkModeon;
        if(darkModeon===true) {
            console.log("its Dark");
            // return darkMode;
            // darkModeon=false;
        }
        else{
            console.log("Its Light");
            // darkModeon=true;
            // return lightMode;
        }
    }
    const handleClick1 =()=>{
        let randomNum = Math.floor(Math.random()*3)+1;
        console.log(randomNum);
        let userInput = prompt('Type a number between 1 & 3');
        console.log(userInput);
        alert('Computer Guessed: ' + randomNum + " and You Guessed: "+userInput);
    }


    return (
        <div>
            <h1>Task: Add a button and handle a click event</h1>
            <button onClick={handleClick1}>Guess the number between 1 and 3</button>
            <br/>
            <br/>
            {darkModeon ? darkMode:lightMode}
            <button onClick={handleClick}>
                Mode Change!
            </button>
        </div>
    );

}
export default ModTogglers;