import NavBar from "../components/header/NavBar";
import Head from "next/head";

const about = () => {
  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>

      <NavBar />
      <h1>Welcome About Page</h1>
    </div>
  );
};

export default about;
