import NavBar from "../components/header/NavBar";
import Head from "next/head";

const contact = () => {
  return (
    <div>
      <Head>
        <title>Contact Page</title>
      </Head>

      <NavBar />
      <h1>Welcome to Contact page</h1>
    </div>
  );
};

export default contact;
