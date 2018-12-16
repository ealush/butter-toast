import React from 'react';
import { storiesOf } from '@storybook/react';
import ButterToast from '../src';
import { POS_RIGHT, POS_CENTER, POS_LEFT, POS_TOP, POS_BOTTOM } from '../src/ButterToast/constants';
import { start } from './tools.js';
import './styles.css';

window.ButterToast = ButterToast;

require('./Crisp.js');
require('./Crunch.js');
require('./Slim.js');
