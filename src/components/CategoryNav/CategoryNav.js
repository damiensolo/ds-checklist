import React from 'react';
import Link from 'next/link';
import s from './CategoryNav.module.css';

const CategoryNav = ({ previous, next, previousLabel, nextLabel }) => {
  return (
    <div className={s.root}>
      <div className={s.item}>
        {
          previous && (
            <React.Fragment>
              <small className={s.overline}>{ previousLabel }</small>
              <Link href={previous.url} className={s.link}>{previous.text}</Link>
            </React.Fragment>
          )
        }
      </div>
      <div className={s.item}>
        {
          next && (
            <React.Fragment>
              <small className={s.overline}>{ nextLabel }</small>
              <Link href={next.url} className={s.link}>{next.text}</Link>
            </React.Fragment>
          )
        }
      </div>
    </div>
  );
};

export default CategoryNav;