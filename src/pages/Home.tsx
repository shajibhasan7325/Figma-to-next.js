import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Header } from "../styles/Home.styled";
import Card from "./components/Card";

const Home: React.FC = () => {
  return (
    <Fragment>
      <Header>
        <div>
          <Image src="/logo.png" width="80" height="40" alt="" />
          <div className="links">
            <a>Home</a>
          </div>
        </div>
        <Image
          src="/user.png"
          width="20"
          height="20"
          alt=""
          className="userImg"
        />
      </Header>
      <div>
        <Card />
      </div>
    </Fragment>
  );
};

export default Home;
