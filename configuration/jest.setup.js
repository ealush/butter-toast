/* eslint-disable no-unused-vars */

import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

Object.assign(
    global,
    Enzyme, // shallow, render, mount, configure
    {
        React
    }
);

configure({ // eslint-disable-line no-undef
    adapter: new Adapter()
});
