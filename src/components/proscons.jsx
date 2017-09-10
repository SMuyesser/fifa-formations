import React from 'react';
import {connect} from 'react-redux';

export class ProsCons extends React.Component {

    render() {

        return (
            <div className="proscons">
            	<h2>Strength</h2>
            	<ul className="strength-list">
	            	{this.props.strength.map((strengthInfo, index) => {
	            		return <li key={index}>{strengthInfo}</li>
	            	})}
	            </ul>
            	<h2>Weakness</h2>
            	<ul className="weakness-list">
	            	{this.props.weakness.map((weaknessInfo, index) => {
	            		return <li key={index}>{weaknessInfo}</li>
	            	})}
	            </ul>
            </div>
        );
    }
};

const mapStateToProps = state => ({
	strength: state.strength,
	weakness: state.weakness
});

export default connect(mapStateToProps)(ProsCons);