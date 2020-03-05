import * as React from 'react';
import useGetUsers from '../../../hooks/useGetUsers';

const CountUsers: React.FunctionComponent<{}> = () => {
  const usrs = useGetUsers("https://jsonplaceholder.typicode.com/users?id=4");
  return (
    <div>
      Number of users:  {usrs.users.length}
    </div>
  );
};

export default CountUsers;