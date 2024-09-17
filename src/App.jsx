import { Route } from "react-router-dom";
import Home from "./Components/Home";

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <Route path="/" component={Home} />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};

export default App;
