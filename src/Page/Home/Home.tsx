import { FC } from "react";
import { useParams } from "react-router";

const Home: FC = () => {
  const params = useParams();
  console.log("home");

  return (
    <>
      <div>Home</div>
    </>
  );
};
export default Home;
