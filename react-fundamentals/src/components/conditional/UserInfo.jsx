import React from 'react';
import If from './If';

const userInfo = props => {
    const user = props.user || {};
    return (
        <div>
            <If expr={user && user.name}>
                Welcome {user.name} !!
            </If>   
            <If expr={!user || !user.name}>
                Welcome my friend !!
            </If>   
        </div>
    );
};

export default userInfo;