import React from 'react';
import { EthereumProvider } from './EthereumContext';
import TodoList from './TodoList';

const App = () => {
  return (
    <EthereumProvider>
      <TodoList />
    </EthereumProvider>
  );
};

export default App;