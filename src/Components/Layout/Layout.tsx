import { FC } from "react";
import { Footer, Header } from "@Components/index";
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
