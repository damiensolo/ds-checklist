import React from 'react';
import ChecklistItem from '../ChecklistItem';
import s from './Checklist.module.css';

const Checklist = ({ checklist }) => {
  const renderItem = (item) => {
    return <ChecklistItem key={item.id} item={item} />;
  };

  return (
    <ul className={s.container}>
      {checklist.map(renderItem)}
    </ul>
  );
};

export default Checklist;