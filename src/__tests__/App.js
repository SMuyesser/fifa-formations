import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import App from '../components/App';

it('renders without crashing', () => {
	shallow(<App />);
});
