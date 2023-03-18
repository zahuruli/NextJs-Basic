import NavBar from "../components/header/NavBar";
import styles from "../styles/index.module.css";
import Image from "next/image";
import Head from "next/head";
const Index = () => {
  return (
    <>
      <Head>
        <title>Default page</title>
        <meta charset="UTF-8" />
        <meta name="description" content="next js tuturial" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="Zahurul islam" />
      </Head>
      <NavBar />
      <h2 className={`${styles.h2class} ${styles.backgroundColour}`}>
        Hello worlds
      </h2>
      <Image src={"/image/food1.jpg"} width="300" height="300"></Image>
    </>
  );
};

export default Index;
