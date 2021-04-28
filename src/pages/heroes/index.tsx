import HeroesList from '../../components/Heroes/HeroesList';
import Head from 'next/head';

const Heroes = () => {
  return (
    <>
      <Head>
        <title>Heroes</title>
      </Head>
      <HeroesList />;
    </>
  );
};

export default Heroes;
