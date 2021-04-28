import React from 'react';
import { Card } from 'antd';

interface Props {
  data: any;
}

const Hero: React.FC<Props> = ({ data }) => {
  const {
    name,
    height,
    mass,
    hair_color,
    skin_color,
    eye_color,
    birth_year,
    gender,
  } = data;

  return (
    <div>
      <Card title={name}>
        <p>Name: {name}</p>
        <p>Height: {height}</p>
        <p>Mass: {mass}</p>
        <p>Hair Color: {hair_color}</p>
        <p>Skin Color: {skin_color}</p>
        <p>Eye Color: {eye_color}</p>
        <p>Birth Year: {birth_year}</p>
        <p>Gender: {gender}</p>
      </Card>
    </div>
  );
};

export default Hero;
