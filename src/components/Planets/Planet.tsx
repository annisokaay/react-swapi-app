import React from 'react';
import { Card } from 'antd';

interface Props {
  data: any;
}

const Planet: React.FC<Props> = ({ data }) => {
  const {
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population,
  } = data;

  return (
    <div>
      <Card title={name}>
        <p>Name: {name}</p>
        <p>Rotation period: {rotation_period}</p>
        <p>Orbital period: {orbital_period}</p>
        <p>Diameter: {diameter}</p>
        <p>Climate: {climate}</p>
        <p>Gravity: {gravity}</p>
        <p>Terrain: {terrain}</p>
        <p>Surface water: {surface_water}</p>
        <p>Population: {population}</p>
      </Card>
    </div>
  );
};

export default Planet;
