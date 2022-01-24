import { Route, Routes, Navigate } from "react-router-dom";
import Home from "@page/Home/Home";
import ContainerLogin from "@page/Login/ContainerLogin";
import NotFound from "@page/NotFound/NotFound";
import NewBet from "@page/NewBet/NewBet";
import PrivateRouters from "./PrivateRouters";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/" element={<ContainerLogin />}>
        <Route path="/:page" element={<ContainerLogin />} />
      </Route>

      <Route
        path="/home"
        element={
          <PrivateRouters>
            <Home />
          </PrivateRouters>
        }
      ></Route>
      <Route
        path="/newbet"
        element={
          <PrivateRouters>
            <NewBet />
          </PrivateRouters>
        }
      ></Route>
      <Route path="/notFound" element={<NotFound />} />
      <Route path="*" element={<Navigate replace to="/notFound" />} />
    </Routes>
  );
}

export default Routers;
