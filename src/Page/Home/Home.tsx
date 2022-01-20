import Layout from "@componets/Layout/Layout";
import { ButtonLitle } from "@globalStyle/ButtonLitle";
import { ContainerButtonsFilter } from "@globalStyle/ContainerButtons";
import { FC } from "react";
import { useParams } from "react-router";

const Home: FC = () => {
  const params = useParams();
  console.log("home", params);

  return (
    <Layout>
      <section>
        <ContainerButtonsFilter>
          <ButtonLitle>Hagleyson</ButtonLitle>
          <ButtonLitle>Hagleyson</ButtonLitle>
          <ButtonLitle>Hagleyson</ButtonLitle>
        </ContainerButtonsFilter>
      </section>
      <section></section>
    </Layout>
  );
};
export default Home;
