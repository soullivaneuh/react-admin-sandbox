import React, {
  VFC,
} from "react";
import {
  Admin,
  Resource,
  ListGuesser,
} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App: VFC = () => (
  <Admin
    dataProvider={dataProvider}
  >
    <Resource name="users" list={ListGuesser} />
  </Admin>
);

export default App;
