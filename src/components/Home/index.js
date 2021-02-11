import React from 'react';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../Session';

const Home = () => (
  <div>
    <h1>Welcome to Your Home Page!</h1>
    <p>You will soon be able to learn Chinese here!</p>
  </div>
);

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(Home);
