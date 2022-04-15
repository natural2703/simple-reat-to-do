import { useEffect, useState } from 'react';
import Form from './components/Form';
import MyList from './components/MyList';
import {DONE,NOT_YET} from './Enum';
import {clearData, loadData,saveData} from './storageKeeper';
function App() {
  const [inputVal,setInput] = useState("");
  const [myToDo,setToDo] = useState([]);
  const [status,setStatus] = useState("all");
  const [filtred,setFiltred] = useState([]);
  // USE EFFECT EXAMPLE FOR ME
  useEffect(()=>{
    //setToDo(loadData())
    //console.log(loadData())
    const data = loadData();
    if(data!==null)
      setToDo(data)
  },[])
  useEffect(()=>{
    filter();
  },[myToDo,status])
  const filter = () =>{
    switch(status){
      case 'Done':
        setFiltred(myToDo.filter((e)=>e.done===true))
        break;
        case 'Not yet':
          setFiltred(myToDo.filter((e)=>e.done===false))
          break;
      default :
        setFiltred(myToDo)
        break;
    }
  };
  //loadconsole.log(JSON.parse(localStorage.getItem('tasks')))
  //loadData(setToDo());
  return (
    <div className="App">
      <header>
        <h1>To-Do list</h1>
      </header>
      <Form myToDo={myToDo} setToDo={setToDo}
      inputVal={inputVal} setInput={setInput}
      setStatus={setStatus}/>
      <div>{inputVal}</div>
      <div>{myToDo.length}</div>
      <button onClick={()=>{saveData(myToDo)}}>Zapisz</button>
      <button onClick={()=>{clearData()}}>Usun dane</button>
      <MyList setToDo={setToDo} todo={myToDo} filtred={filtred}/>
    </div>
  );
}

export default App;
