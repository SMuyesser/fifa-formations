import React from 'react';
import {connect} from 'react-redux';

import '../component-css/help.css';

export class Help extends React.Component {

    render() {

        return (
            <div className="help">
            	<h2>HELP</h2>
            	<p>This section will help you to fully understand Fifa Formations.</p>
                <h3>CONTENTS</h3>
                <ul id="contents-list">
                    <li>Key</li>
                    <li>Custom Tactics</li>
                    <li>Player Instructions</li>
                    <li>Strength/Weakness</li>
                </ul>
            	<h4 className='contents-header'>KEY</h4>
            	<p className='contents-text'>All abbreviations explained</p>
            </div>
        );
    }
};

const mapStateToProps = state => ({
	helpToggle: state.formations.helpToggle
});

export default connect(mapStateToProps)(Help);