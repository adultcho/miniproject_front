import { Switch, Route } from "react-router-dom";




function App() {
  return (
    <div className="App">
      <Switch>
      <Route path="/" exact></Route>
      <Route path="/Signup" exact></Route>
      <Route path="/Main" exact></Route>
      </Switch>
    </div>
  );
}

export default App;
