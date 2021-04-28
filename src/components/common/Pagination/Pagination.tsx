import React, { CSSProperties } from 'react';
// @ts-ignore
import useKeypress from 'react-use-keypress';

import s from './Pagination.module.css';

interface Props {
  items: number;
  page: number;
  onChange: Function;
  style?: CSSProperties;
}

const Pagination: React.FC<Props> = ({ items, page, onChange, style }) => {
  const PAGE_SIZE = 10; // API Limitation
  const pagesCount = Math.ceil(items / PAGE_SIZE);

  // Array of total pages/buttons
  const pages: Array<number> = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  // Ctrl + Right / Left to change page
  useKeypress('ArrowRight', () =>
    onChange(page === pages.length ? page : page + 1)
  );
  useKeypress('ArrowLeft', () => onChange(page === 1 ? page : page - 1));

  let visiblePages: Array<string | number> = [];
  const dots = '...';

  // Если больше 7 страниц, то показывать {1 -> 5} ... N
  if (pages.length > 7) {
    visiblePages = [...pages.slice(0, 7), dots, pages.length];
  } else {
    visiblePages = [...pages];
  }

  // Если текущая страница > 7, то справа должно быть 2 страницы
  if (pages.length > 7 && page > 7) {
    visiblePages = [...pages.slice(0, page + 2), dots, pages.length];
  }

  // Если текущая страница > 4, то показывать 1 ... {2 страницы} {текущая} {2 страницы} ... N
  if (pages.length > 7 && page > 4) {
    visiblePages = [
      ...pages.slice(0, 1),
      dots,
      ...pages.slice(page - 3, page - 1),
      page,
      ...pages.slice(page, page + 2),
      dots,
      pages.length,
    ];
  }

  // Если текущая страница > (N - 4), то показывать 1 ... {7 страниц (N - 7 -> текущая -> N)}
  if (pages.length > 7 && page > pages.length - 4) {
    visiblePages = [
      ...pages.slice(0, 1),
      dots,
      ...pages.slice(pages.length - 7, page - 1),
      page,
      ...pages.slice(page, pages.length),
    ];
  }

  return (
    <div
      style={{ ...style, userSelect: 'none' }}
      onKeyPress={(e) => {
        console.log(e);
      }}
    >
      <button
        className={s.btn}
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        Previous
      </button>
      {visiblePages.map((pageNumber, idx) => {
        if (pageNumber === '...') {
          return (
            <span
              key={idx}
              style={{
                margin: 7,
              }}
            >
              ...
            </span>
          );
        }

        return (
          <span
            className={pageNumber === '...' ? '' : s.paginationItem}
            key={idx}
            style={
              page === pageNumber
                ? {
                    background: '#3f51b5',
                    color: '#ffffff',
                  }
                : {}
            }
            onClick={() => {
              onChange(pageNumber);
            }}
          >
            {pageNumber}
          </span>
        );
      })}
      <button
        className={s.btn}
        disabled={page === pages.length}
        onClick={() => onChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
