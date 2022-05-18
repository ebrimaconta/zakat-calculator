import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Wrapper} from '../components/wrapper.styled'
import { Title } from '../components/title.styled'
const Home: NextPage = () => {
  return (
  <Wrapper>

    <Title>
    Welcome to Zakatcal
    </Title>
 
  </Wrapper>
  )
}

export default Home
