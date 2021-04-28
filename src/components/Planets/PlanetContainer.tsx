import React, { useEffect, useState } from 'react';
import { getPlanet } from '../../api';
import Loader from '../common/Loader';
import Planet from './Planet';

interface Props {
  id: any;
}

const PlanetContainer: React.FC<Props> = ({ id }) => {
  const [planetData, setPlanetData] = useState(null);

  useEffect(() => {
    getPlanet(parseInt(id)).then((data) => setPlanetData(data));
  }, [id]);

  return <div>{!planetData ? <Loader /> : <Planet data={planetData} />}</div>;
};

export default PlanetContainer;
