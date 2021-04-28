import React, { useEffect, useState } from 'react';
import { getPerson } from '../../api';
import Loader from '../common/Loader';
import Hero from './Hero';

interface Props {
  id: any;
}

const HeroContainer: React.FC<Props> = ({ id }) => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    getPerson(parseInt(id)).then((data) => setHeroData(data));
  }, [id]);

  return <div>{!heroData ? <Loader /> : <Hero data={heroData} />}</div>;
};

export default HeroContainer;
