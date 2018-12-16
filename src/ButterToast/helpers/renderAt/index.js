import React from 'react';
import ReactDOM from 'react-dom';
import createTrayRef from '../createTrayRef';
import Tray from '../../../Tray';

const renderAt = (container, { namespace, spacing, timeout, position }, id) => {
    ReactDOM.render(<Tray ref={createTrayRef}
        id={id}
        namespace={namespace}
        spacing={spacing}
        timeout={timeout}
        position={position}/>,
    container);
}

export default renderAt;