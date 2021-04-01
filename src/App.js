import React from 'react';
import Users from './Users';
import { UsersProvier } from './UsersContext';

function App() {
  return (
    <UsersProvier>
      <Users />
    </UsersProvier>
  );
}

export default App;
