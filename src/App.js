import './App.css';
import Form from './components/Form';
import MyList from './components/MyList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>To-Do list</h1>
      </header>
      <Form/>
      <MyList/>
    </div>
  );
}

export default App;
