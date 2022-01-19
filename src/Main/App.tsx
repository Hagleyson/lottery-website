import { FC } from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "./Routers";
const App: FC = () => {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
};

export default App;
