import React, {
  VFC,
} from "react";
import {
  Admin,
  Resource,
} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserList from "./UserList";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App: VFC = () => (
  <Admin
    dataProvider={dataProvider}
  >
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;
