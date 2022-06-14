import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Titles } from "../components/Home/Title/Titles";
import { CalculatorForm } from "../components/Home/Calculator/CalculatorForm"

const Home: NextPage = () => {
  return <>
    <Titles />
    <CalculatorForm />
  </>;
};

export default Home;
