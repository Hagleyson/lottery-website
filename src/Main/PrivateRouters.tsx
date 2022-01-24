import { getSession } from "@api/helpers/storage/localStorage";

import { Navigate, useLocation } from "react-router-dom";

type propsType = {
  children: JSX.Element;
};
const PrivateRouters = (props: propsType) => {
  let auth = getSession();
  let location = useLocation();
  if (!auth) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return props.children;
};
export default PrivateRouters;
