import React, { useEffect, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MUIDataTable from "mui-datatables";

import { getUsers } from '../../api/users';

const styles = {

};

const mapUsers = (users) => {
  return users.map(user => ([
    user.firstName, user.lastName,
  ]));
}

const columns = [
  {
    name: 'First Name',
  },
  {
    name: 'Last Name',
  },
]

function Users(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(setUsers);
    return;
  }, []);

  return (
    <MUIDataTable
      title={"Employee List"}
      data={mapUsers(users)}
      columns={columns}
      // options={options}
    />
  );
}

export default withStyles(styles)(Users);