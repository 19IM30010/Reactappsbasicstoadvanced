const onClickHandler = ()=>{
    console.log("Clicked!");
}
// function Btn(){

//     return (
//         <button onClick = {onClickHandler}>
//             Click Me!
//         </button>
//     );

// }
// export default Btn;

const MouseOver = ()=>{
    console.log("Hovered Me");
}
function Btn(){

    return (
        <button onMouseOver = {MouseOver} onClick = {onClickHandler}>
            Click Me!
        </button>
    );

}
export default Btn;
