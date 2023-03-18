import { useRouter } from "next/router";
import NavBar from "../../components/header/NavBar";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((curElem) => {
    return {
      params: {
        pageNo: curElem.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const PageNo = ({ data }) => {
  const { userId, id, title, body } = data;

  return (
    <div>
      <NavBar />
      <article>
        <h2>{id}</h2>
        <h3>{title}</h3>
        <p>{body}</p>
      </article>
    </div>
  );
};

export default PageNo;
