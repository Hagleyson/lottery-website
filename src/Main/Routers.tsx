import { Route, Routes, Navigate } from "react-router-dom";
import Home from "@page/Home/Home";
import ContainerLogin from "@page/Login/ContainerLogin";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/" element={<ContainerLogin />}>
        <Route path="/:page" element={<ContainerLogin />} />
      </Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
}

export default Routers;
