import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import { Intro } from "../components/intro"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Intro />
    </div>
  )
}

export default Home
