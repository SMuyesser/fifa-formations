import React from 'react';
import axios from 'axios';
import {shallow} from 'enzyme';
import {Game} from '../components/game';

it('renders without crashing', () => {
	shallow(<Game />);
});
