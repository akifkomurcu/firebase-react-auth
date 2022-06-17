import { useEffect } from "react";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  useEffect(() => {
    // signIn("akif@gmail.com", "123456")
    //   .then(() => {
    //     console.log("giriş yapıldı");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // signUp("akif", "akif@gmail.com", "123456")
    //   .then(() => {
    //     console.log("OK");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Register />
      </header>
    </div>
  );
}

export default App;
