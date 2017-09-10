import React from 'react';
import {connect} from 'react-redux';

export class PlayerInstructions extends React.Component {

    render() {

        return (
            <div className="playerInstructions">
            <h2>Player Instructions</h2>
            <h3>Forwards</h3>
            	<ul className="fwd-instructions">
	            	{this.props.fwdInstructions.map((instructions, index) => {
	            		return <li key={index}>{instructions}</li>
	            	})}
            	</ul>
            <h3>Midfielders</h3>
            	<ul className="mid-instructions">
	            	{this.props.midInstructions.map((instructions, index) => {
	            		return <li key={index}>{instructions}</li>
	            	})}
            	</ul>
            <h3>Defenders</h3>
            	<ul className="def-instructions">
	            	{this.props.defInstructions.map((instructions, index) => {
	            		return <li key={index}>{instructions}</li>
	            	})}
            	</ul>
            </div>
        );
    }
};

const mapStateToProps = state => ({
		defInstructions: state.defInstructions,
		midInstructions: state.midInstructions,
		fwdInstructions: state.fwdInstructions
});

export default connect(mapStateToProps)(PlayerInstructions);
