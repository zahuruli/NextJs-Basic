import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        color: "white",
        backgroundColor: "aqua",
        padding: "15px",
        textTransform: "uppercase",
      }}
    >
      <Link href="/home">Home</Link>
      <Link href="/about">about</Link>
      <Link href="/contact">contact</Link>
      <Link href="/blog">blog</Link>
    </nav>
  );
};

export default NavBar;
