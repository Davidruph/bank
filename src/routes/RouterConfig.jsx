import { Routes, Route } from "react-router-dom";
import { Homepage } from "../pages";
import * as routes from "./routes";

const App = () => {
  return (
    <Routes>
      <Route path={routes.ENTRY} element={<Homepage />} />
    </Routes>
  );
};

export default App;
