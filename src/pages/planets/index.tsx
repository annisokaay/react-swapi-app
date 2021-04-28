import PlanetsList from '../../components/Planets/PlanetsList';
import Head from 'next/head';

const Planets = () => {
  return (
    <>
      <Head>
        <title>Planets</title>
      </Head>
      <PlanetsList />
    </>
  );
};

export default Planets;
