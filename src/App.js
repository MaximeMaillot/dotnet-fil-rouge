import { useDispatch } from 'react-redux';
import './App.css';
import Router from './Components/Router/Router';
import { getUserByToken } from './redux/slices/webstoreSlice';

function App() {
  const dispatch = useDispatch();
  const jwtToken = localStorage.getItem("jwt-token");
  dispatch(getUserByToken());
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
