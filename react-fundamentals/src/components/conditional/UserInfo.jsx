import React from 'react';
import {If, Else} from './IfElse';

const userInfo = props => {
    const user = props.user || {};
    return (
        <div>
            <If expr={user && user.name}>
                Welcome {user.name} !!
                <Else>
                    Welcome my friend !!
                </Else>
            </If>   
        </div>
    );
};

export default userInfo;