import React from 'react';

function toast(Toast, props, dismiss) {
    return <Toast {...props} dismiss={dismiss}/>;
}

export default function wrap(kind) {
    const { name } = kind;
    const wrapperClass = `cs-${name}`;

    return (props) => (
        Object.assign({},
            {
                content: ({ dismiss }) => toast(kind, props, dismiss),
                wrapperClass
            },
            props
        )
    );
}