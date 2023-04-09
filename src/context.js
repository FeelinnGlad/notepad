import React from 'react';

const AppContext = React.createContext({
  isEditable: true,
  newDataSet: [],
  deleteHandler: () => {},
  insertSelectedID: () => {},
  newCardHandler: () => {},
});

export default AppContext;
