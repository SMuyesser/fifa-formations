import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import {FormationImage} from './formationimage';

it('renders without crashing', () => {
	shallow(<FormationImage image={433} />);
});