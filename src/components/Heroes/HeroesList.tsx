/* eslint-disable jsx-a11y/anchor-is-valid */
import { List } from 'antd';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher, getPeople, People } from '../../api';
import Loader from '../common/Loader';
import Pagination from '../common/Pagination/Pagination';
import Link from 'next/link';

const HeroesList: React.FC = () => {
  const [page, setPage] = useState(1);
  const [people, setPeople] = useState<People[]>([]);
  const [loading, setLoading] = useState(false);
  const { data, error } = useSWR(`people`, fetcher);

  useEffect(() => {
    setLoading(true);
    // getPeople(page).then((people) => {
    getPeople((page % 8) + 1).then((people) => {
      // For pagination testing
      setPeople(people);
      setLoading(false);
    });
  }, [page]);

  if (error) return <div>Something went wrong</div>;
  if (!data) return <Loader />;

  // const total = data.count;
  const total = data.count * 10; // For pagination testing

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
          dataSource={people}
          renderItem={({ name, url }) => {
            const urlPieces = url.split('/');
            const id = urlPieces[urlPieces.length - 2];

            return (
              <List.Item style={{ cursor: 'pointer' }}>
                <Link href={'/heroes/' + id}>
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
