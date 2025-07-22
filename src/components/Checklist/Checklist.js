import React from 'react';
import ChecklistItem from '../ChecklistItem';
import s from './Checklist.module.css';

const Checklist = ({ checklist }) => {
  return (
    <ul className={s.container}>
      {checklist.map((item, index) => (
        <ChecklistItem
          title={item.title}
          id={item.id}
          key={item.id || index}
          description={item.description}
        />
      ))}
    </ul>
  );
};

export default Checklist;