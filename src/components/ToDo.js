import React from "react";

function ToDo(props){
    const del = () => {  
        props.setToDo(props.list.filter(e=>e.id!==props.item.id));
    };
    const done = () => {
        /*let item = props.list.find(e=>e.id===props.item.id);
        let tmpList = props.list;
        tmpList.find(e=>e.id===props.item.id).done=!tmpList.find(e=>e.id===props.item.id).done;
        //item.done=true;*/
        // props.setToDo(tmpList);
        console.log("works")
        props.setToDo(
            props.list.map((e)=>{
                if(e.id === props.item.id){
                  // let a= (!e.done)
                    return {
                        ...e,
                        done:!e.done
                        //asd:123
                    };
                }
                return e;
            })
        );
    }
    return(
        <div>
            <li>{props.item.text}</li>
            <div>status:{props.item.done==true?'done':'not done'} </div>
            <button onClick={done}>Done</button>
            <button onClick={del}>Delete</button>
        </div>
    )
}

export default ToDo;