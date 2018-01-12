import React from 'react';

function Wrapper(kinds, {message, title, theme, icon, kind = 'crisp', picture, noClose = false, ...rest}) {
    if (!kinds[kind]) {
        return null;
    }

    const Component = kinds[kind],
        wrapperClass = `cs-${kind}`,
        Content = ({dismiss}) => (<Component message={message}
            title={title}
            theme={theme}
            picture={picture}
            icon={icon}
            noClose={noClose}
            dismiss={dismiss}/>);

    return Object.assign({}, {
        content: Content,
        wrapperClass
    }, rest);
}

export default Wrapper;