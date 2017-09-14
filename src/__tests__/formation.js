import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import {Formation} from '../components/formation';

it('renders without crashing', () => {
	shallow(<Formation />);
});