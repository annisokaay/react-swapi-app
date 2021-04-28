/* eslint-disable jsx-a11y/anchor-is-valid */
import { List } from 'antd';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher, getPlanets, Planet } from '../../api';
import Pagination from '../common/Pagination/Pagination';
import Link from 'next/link';
import Loader from '../common/Loader';

const HeroesList: React.FC = () => {
  const [page, setPage] = useState(1);
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [loading, setLoading] = useState(false);
  const { data, error } = useSWR(`planets`, fetcher);

  useEffect(() => {
    setLoading(true);
    getPlanets(page).then((planets) => {
      setPlanets(planets);
      setLoading(false);
    });
  }, [page]);

  if (error) return <div>Something went wrong</div>;
  if (!data) return <Loader />;

  const total = data.count;

  return (
    <div className="tab">
      <Pagination
        items={total}
        page={page}
        onChange={(page: number) => {
          setPage(page);
        }}
        style={{
          marginBottom: 15,
          textAlign: 'center',
        }}
      />
      <div>
        <List
          size="small"
          loading={loading}
          bordered
          dataSource={planets}
          renderItem={({ name, url }) => {
            const urlPieces = url.split('/');
            const id = urlPieces[urlPieces.length - 2];

            return (
              <List.Item style={{ cursor: 'pointer' }}>
                <Link href={'/planets/' + id}>
                  <a>{name}</a>
                </Link>
              </List.Item>
            );
          }}
        />
      </div>
    </div>
  );
};

export default HeroesList;
