import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import RouterConfig from "./routes/routerConfig";

function App() {
  return (
    <>
      <Router>
        <RouterConfig />
      </Router>
    </>
  );
}

export default App;
