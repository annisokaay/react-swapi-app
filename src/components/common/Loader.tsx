import { Spin } from 'antd';
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        marginBottom: '20px',
        padding: '30px 50px',
        margin: '20px 0',
      }}
    >
      <Spin />
    </div>
  );
};

export default Loader;
