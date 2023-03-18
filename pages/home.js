import NavBar from "../components/header/NavBar";
import Head from "next/head";
const home = () => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <NavBar />
      <h1>Welcome Home</h1>
    </div>
  );
};

export default home;
