import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import {Formation} from './formation';

it('renders without crashing', () => {
	shallow(<Formation />);
});