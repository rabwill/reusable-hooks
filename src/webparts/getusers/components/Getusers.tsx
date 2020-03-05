import * as React from 'react';
import fnGetUsers from '../../../hooks/fnGetUsers';

const Getusers: React.FunctionComponent<{}> = () => {
    const usrs = fnGetUsers("https://jsonplaceholder.typicode.com/users");
    return (
        <div>
            {usrs.users.map(x =>
                <div>
                    Hello  {x.name}
                </div>
            )}
        </div>
    );
};

export default Getusers;