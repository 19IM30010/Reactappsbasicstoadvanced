function Heading(props) {
        const getRandom = () => Math.floor(Math.random()*10)+1;
        return (
        <div>
            <h1>Hello,{props.firstname} {props.lastname}</h1>
            <h1>{Math.random()>=0.5? "Over 0.5":"Lower 0.5"}</h1>
            <h1>There is a random no. between 1 to 10 : {getRandom()}</h1>
        </div>
            
        )
    }
    
    export default Heading;