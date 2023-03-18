import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
const Error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  });
  return (
    <div>
      <Head>
        <title>Error Page</title>
      </Head>

      <h1>Error 404!!! Page is not found</h1>
      <h2>You are redirecting to Home</h2>
      <Link href="/">
        <button>back to home</button>
      </Link>

      <button onClick={() => router.push("/")}>Back to the pavillion</button>
    </div>
  );
};

export default Error;
