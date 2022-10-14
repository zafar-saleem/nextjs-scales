import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Header } from '@nextjs-scales/Header';
import { Layout } from '@nextjs-scales/Layout';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Layout>
        <Header />
      </Layout>
    </div>
  );
};

export default Home;

