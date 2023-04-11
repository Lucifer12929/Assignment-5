import { useDispatch } from "react-redux";
import { setUser } from "./redux/userActions";
import firebase from "./firebase";
import "./Dashboard.css";

function Dashboard() {
  const dispatch = useDispatch();

  const handleSignUp = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="dashboard">
      <div className="dashboard_card">
        <h1>Hello World</h1>
        <button className="logout" onClick={handleSignUp}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
