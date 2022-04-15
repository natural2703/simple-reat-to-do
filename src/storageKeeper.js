export const saveData = (data)=>{
    localStorage.setItem('tasks',JSON.stringify(data))
    console.log(data)
}
export const loadData = ()=>{
    const data = localStorage.getItem('tasks')
   // console.log(JSON.parse(data));
    //setToDo(JSON.parse(data))
    //return (JSON.parse(data))
    return JSON.parse(data);
}
export const clearData = ()=>{
    
}