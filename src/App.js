import { useDispatch } from 'react-redux';
import './App.css';
import Router from './Components/Router/Router';
import { getUserByToken } from './redux/slices/webStoreSlice';

function App() {
  const dispatch = useDispatch();
  if (localStorage.getItem("jwt-token") !== null && localStorage.getItem("store") === null) {
    dispatch(getUserByToken());
  }
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
