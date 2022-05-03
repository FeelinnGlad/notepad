import { useState } from 'react';
import TaskLabel from './TaskLabel';
import Header from './Header';
import CardsList from './Card/CardsList';
import dataSet from '../dataSet';
import ViewOnly from './ViewOnly';
import IsEditableContext from '../context';

const Task = () => {
  const [isEditable, setIsEditable] = useState(true);
  return (
    <>
      <Header />
      <TaskLabel />
      <IsEditableContext.Provider value={{ isEditable, setIsEditable }}>
        <ViewOnly />
        <CardsList items={dataSet} />
      </IsEditableContext.Provider>
    </>
  );
};

export default Task;
