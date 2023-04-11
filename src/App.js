import "./App.css";
import firebase from "./firebase";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/userActions";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  console.log(user);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      dispatch(setUser(user));
      setLoading(false);
    });
  }, [dispatch]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  // Add this useEffect to set user state to null on page load

  return <div className="App">{user ? <Dashboard /> : <Login />}</div>;
}

export default App;
