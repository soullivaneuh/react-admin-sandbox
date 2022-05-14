import React, {
  FC,
} from 'react';
import {
  List,
  Datagrid,
  TextField,
  Filter,
  SearchInput,
  FilterProps,
  ListProps,
} from 'react-admin';

const UserFilter: FC<Omit<FilterProps, 'children'>> = (props) => (
  <Filter {...props}>
    <SearchInput source="$search" alwaysOn />
  </Filter>
);

const UserList: FC<ListProps> = (props) => (
  <List
    filters={<UserFilter />}
    {...props}
  >
    <Datagrid>
      <TextField source="name" />
      <TextField source="email" />
    </Datagrid>
  </List>
);

export default UserList;
