import * as React from 'react';
import fnGetUsers from '../../../hooks/fnGetUsers';

const CountUsers: React.FunctionComponent<{}> = () => {
  const usrs = fnGetUsers("https://jsonplaceholder.typicode.com/users?id=4");
  return (
    <div>
      Number of users:  {usrs.users.length}
    </div>
  );
};

export default CountUsers;