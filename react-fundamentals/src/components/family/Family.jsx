import React from 'react';

import FamilyMember from '../family-member/FamilyMember';

export default props => {
    return (
        <>
        <FamilyMember name="Pedro" surname={props.surname}/>
        <FamilyMember name="Ana" {...props}/>
        <FamilyMember name="Carol" surname="Ferreira"/>
        </>
    );
}