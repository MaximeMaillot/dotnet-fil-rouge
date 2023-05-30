import './App.css';
import Router from './Components/Router/Router';

function App() {
  const jwt = localStorage.getItem("jwt-token");
  console.log(jwt)
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
