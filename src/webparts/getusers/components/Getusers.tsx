import * as React from 'react';
import useGetUsers from '../../../hooks/useGetUsers';

const Getusers: React.FunctionComponent<{}> = () => {
    const usrs = useGetUsers();
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