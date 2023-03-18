import React from "react";
import NavBar from "../../components/header/NavBar";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const index = ({ data }) => {
  return (
    <>
      <Head>
        <title>Blog Page</title>
      </Head>
      <NavBar />
      <h2>Hello world this is my blog</h2>

      {data.slice(0, 5).map((curElem) => {
        const { userId, id, title, body } = curElem;
        return (
          <article
            key={id}
            style={{
              backgroundColor: "aqua",
              color: "red",
              width: "350px",
              margin: "5px",
              textDecoration: "none",
            }}
          >
            <h2>{id}</h2>
            <Link href={`/blog/${id}`}>
              {" "}
              <p>{title}</p>
            </Link>
          </article>
        );
      })}
    </>
  );
};

export default index;
