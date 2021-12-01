import React,{useState} from "react";

function ToDo(props){
    const [isEdit,setEdit] = useState(false);
    const [tmpValue,setValue] = useState("");
    const saveEdit = (e) =>{
        e.preventDefault();
        setEdit(!isEdit);
        props.setToDo(
        props.list.map((e)=>{
            if(e.id==props.item.id){
                return{
                    ...e,
                    text:tmpValue
                };
            }
            return e;
        })
        );
    };
    const changeValueHandler = (e) =>{
        //console.log(e.target.value)
        setValue(e.target.value);
    }
    const edit = () =>{
        setEdit(!isEdit);
    };
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
            <div>status:{props.item.done==true?'done':'not done'} </div>
            {isEdit==false?
                <li>{props.item.text}</li>
                :
                <li>
                    <input onChange={changeValueHandler} type="text"/>
                    <button onClick={saveEdit}>Confirm</button>
                </li>
            }
            <button onClick={done}>Done</button>
            <button onClick={del}>Delete</button>
            {isEdit==false?
                props.item.done==false?<button onClick={edit}>Edit</button>:<div></div>
            :
            <div></div>}
        </div>
    )
}

export default ToDo;