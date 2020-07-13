import React from 'react';

export default function Generate(props) {
    const status = props.grade >= 7 ? 'Passed': 'Failed';
    return (
        <div>
            <h2>{ props.title }</h2>
            <p>
                <strong>{ props.student } </strong>
                has grade
                <strong> { props.grade } </strong>
                and it was considered 
                <strong> { status }</strong>
            </p>
        </div>
    );
}