import React from 'react'; // eslint-disable-line no-unused-vars
import { storiesOf, action } from '@kadira/storybook';
import ButterToast from '../src';
import './style.scss';

storiesOf('Toast', module).add('sample toast', () => <ButterToast/>);