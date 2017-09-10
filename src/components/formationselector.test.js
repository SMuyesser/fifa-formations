import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import {FormationSelector} from './formationselector';

it('renders without crashing', () => {
	shallow(<FormationSelector />);
});