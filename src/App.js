import { useEffect, useState } from 'react';
import './App.css';
import Form from './components/Form';
import MyList from './components/MyList';

function App() {
  // USE EFFECT EXAMPLE FOR ME
  const [inputVal,setInput] = useState("");
  const [myToDo,setToDo] = useState([]);
  const [status,setStatus] = useState("all");
  const [filtred,setFiltred] = useState([]);
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
      <MyList setToDo={setToDo} todo={myToDo} filtred={filtred}/>
    </div>
  );
}

export default App;
