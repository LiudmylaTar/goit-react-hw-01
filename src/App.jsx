import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import './App.css';
import userData from './components/userData.json';
import friends from './components/friends.json';
import transactions from './components/transactions.json';

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
