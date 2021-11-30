import React from "react";
import ToDo from "./ToDo";

function MyList(props){
   // console.log(props.todo)
    return(
        <div>
            <ul>
                {props.filtred.map((job)=>(
                    <ToDo setToDo={props.setToDo} list={props.todo}
                     item={job} value={job.text} key={job.id}/>
                ))}
            </ul>
        </div>
    )
}
export default MyList;