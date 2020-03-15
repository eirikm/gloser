import React from 'react';
import Streak from "../Streak";

export default {
  title: 'Streak',
  component: Streak,
};

export const None = () => <Streak streak={0}/>;

export const GoodStreak = () => (
  <Streak streak={10}/>
);
