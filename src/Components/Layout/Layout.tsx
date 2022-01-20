import { FC } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { LayoutStyle } from "./LayoutStyle";

const Layout: FC = (props) => {
  return (
    <LayoutStyle>
      <Header />
      <main>
        <div>{props.children}</div>
      </main>
      <Footer />
    </LayoutStyle>
  );
};
export default Layout;
