import { Route, Routes, Navigate, Link } from "react-router-dom";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/" element={<Login />}>
        <Route path="/:page" element={<Login />} />
      </Route>
      <Route path="/home" element={<Home />}></Route>
      {/* <Route path="/quotes/:quoteId" element={<QuoteDetail />}>
        <Route
          path=""
          element={
            <div className="centered">
              <Link className="btn--flat" to={`comments`}>
                Load Comments
              </Link>
            </div>
          }
        />
        <Route path={`comments`} element={<Comments />} />
      </Route>
      <Route path="/new-quote" element={<NewQuote />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default Routers;
