import React, {
  VFC,
} from "react";
import {
  Admin,
  Resource,
  ListGuesser,
  useUpdate,
  useNotify,
} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App: VFC = () => {
  const notify = useNotify();
  useUpdate(
    'users',
    {
      id: 42,
      data: { email: 'foo@bar.com' },
    },
    {
      onError: (error) => {
        notify(`Error while updating: ${error.message}`);
      }
    }
  )

  return (
    <Admin
      dataProvider={dataProvider}
    >
      <Resource name="users" list={ListGuesser} />
    </Admin>
  )
};

export default App;
