import type { NextPage } from "next";
import { Titles } from "../components/Home/Title/Titles";
import { CalculatorForm } from "../components/Home/Calculator/CalculatorForm"
import { NisabInfo } from '../components/Home/Nisab info/NisabInfo'
const Home: NextPage = () => {
  return <>
    <Titles />
    <NisabInfo/>
    <CalculatorForm/>
  </>;
};

export default Home;
