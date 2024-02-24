import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "/styles/Home.module.css";
import Header from "@/components/layout/Header";
import HomePage from "@/components/HomePage";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Assignment (Abdul Sahil Khan)</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>
      </Head>
      <main className={styles.main}>
        <div>
           <Header />
           <HomePage />
           <Footer />
        </div>

      
        
      </main>
    </>
  );
}
