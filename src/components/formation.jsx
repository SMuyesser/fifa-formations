import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

//dependencies for select
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import {API_BASE_URL} from '../config';

export class Formation extends React.Component {

    render() {

		let options = [];
    	let formationSelectForm;

		axios.get(`${API_BASE_URL}/formations`)
		.then(response => {
			for(var i = 0; i < response.data.length; i++) {
				options.push({'value': response.data[i].formation, 'label': response.data[i].formation});
			}
		})

		function logChange(val) {
		  console.log("Selected: " + JSON.stringify(val));
		};
		
    	formationSelectForm = (
    		<Select
				name="form-field-name"
				value="one"
				options={options}
				onChange={logChange}
			/>
    	)

        return (
            <div className="formation">
                <p>Select a formation below to view.</p>
                {formationSelectForm}
            </div>
        );
    }
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Formation);