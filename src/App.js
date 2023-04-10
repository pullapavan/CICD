import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Users from "./Users";
import Home from "./Home";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/users">
            <Users></Users>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
