import './App.css';
import Main from './Main'

function App() {
  return (
    <div className="App">
      <h1>APP Component</h1>
      <hr/>
      <Main testProps={{message:"Hello from APP"}}/>
    </div>
  );
}

export default App;
