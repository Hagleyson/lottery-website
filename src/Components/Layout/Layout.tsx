import { FC } from "react";
import Header from "./Header/Header";
import { LayoutStyle } from "./LayoutStyle";

const Layout: FC = (props) => {
  return (
    <LayoutStyle>
      <Header />
      <main>
        <div>{props.children}</div>
      </main>
    </LayoutStyle>
  );
};
export default Layout;
