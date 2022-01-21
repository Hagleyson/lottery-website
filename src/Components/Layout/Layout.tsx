import { FC } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { LayoutStyle } from "./LayoutStyle";

const Layout: FC<{ showHome?: boolean }> = (props) => {
  return (
    <LayoutStyle>
      <Header showHome={props.showHome} />
      <main>
        <div>{props.children}</div>
      </main>
      <Footer />
    </LayoutStyle>
  );
};
export default Layout;
