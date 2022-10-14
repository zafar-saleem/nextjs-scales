import Head from 'next/head';

export interface ILayout {
  children?: React.ReactNode;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Layout Example</title>
      </Head>
      <main>
        {children}
      </main>
    </>
  );
};

