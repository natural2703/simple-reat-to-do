import React from "react";

function Form(props){
    const inputHandler= (e) => {
        props.setInput(e.target.value)
    }
    const buttonHandler = (e) => {
        e.preventDefault();
        //console.log("butonn handled")
        props.setToDo([
            ...props.myToDo,
            {
                text:props.inputVal,
                done:false,
                id:Math.random()
            }
        ]);
        props.setInput("");
    }
    const handleSelect = (e) => {
        //console.log(e.target.value)
        const status = e.target.value;
        //props.setToDo(props.todo.filter((e)=>e.done==='done'))
        props.setStatus(e.target.value);
    };
    return(
        <form>
            <input type="text" onChange={inputHandler} value={props.inputVal}/>
            <button type="submit" onClick={buttonHandler}>
                Dodaj
            </button>
            <div>
                <select onChange={handleSelect}>
                    <option>All</option>
                    <option>Done</option>
                    <option>Not yet</option>
                </select>
            </div>
        </form>
    )
}
export default Form;