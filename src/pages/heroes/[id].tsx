import { useRouter } from 'next/router';
import HeroContainer from '../../components/Heroes/HeroContainer';
import Head from 'next/head';

const Hero = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Heroes</title>
      </Head>
      <HeroContainer id={router.query.id} />
    </>
  );
};

export default Hero;
