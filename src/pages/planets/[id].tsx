import { useRouter } from 'next/router';
import PlanetContainer from '../../components/Planets/PlanetContainer';
import Head from 'next/head';

const Planet = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Planets</title>
      </Head>
      <PlanetContainer id={router.query.id} />
    </>
  );
};

export default Planet;
