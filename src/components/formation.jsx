import React from 'react';
import {connect} from 'react-redux';

import FormationImage from './formationimage';
import ProsCons from './proscons';
import Tactics from './tactics';
import PlayerInstructions from './playerinstructions';
import FormationSelector from './formationselector';

export class Formation extends React.Component {

    render() {
        return (
            <div className="formation">
            	<FormationSelector />
            	<h1>{this.props.formation}</h1>
            	<FormationImage />
            	<ProsCons />
            	<Tactics />
            	<PlayerInstructions />
            </div>
        );
    }
};

const mapStateToProps = state => ({
	formation: state.formation
});

export default connect(mapStateToProps)(Formation);
