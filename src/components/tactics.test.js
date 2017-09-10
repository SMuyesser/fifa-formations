import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import {Tactics} from './tactics';

it('renders without crashing', () => {
	shallow(<Tactics />);
});