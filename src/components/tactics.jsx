import React from 'react';
import {connect} from 'react-redux';

export class Tactics extends React.Component {

    render() {

        return (
            <div className="tactics">
            	<h2>Custom Tactics</h2>
                <div className='tactics-all-cat'>
                    <div className ='tactics-sub-cat'>
                    	<h3>Build Up</h3>
                    	<ul className='build-up-tac-list'>
                    		<li>Speed: {this.props.buildUpTacticsSpd}</li>
                    		<li>Passing: {this.props.buildUpTacticsPass}</li>
                    		<li>Positioning: {this.props.buildUpTacticsPos}</li>
                    	</ul>
                    </div>
                    <div className ='tactics-sub-cat'>
                    	<h3>Chance Creation</h3>
                    	<ul className='chance-creation-tac-list'>
                    		<li>Passing: {this.props.ccTacticsPass}</li>
                    		<li>Shooting: {this.props.ccTacticsShoot}</li>
                    		<li>Crossing: {this.props.ccTacticsCross}</li>
                    		<li>Positioning: {this.props.ccTacticsPos}</li>
                    	</ul>
                    </div>
                    <div className ='tactics-sub-cat'>
                    	<h3>Defence</h3>
                    	<ul className='defence-tac-list'>
                    		<li>Pressure: {this.props.defTacticsPress}</li>
                    		<li>Aggression: {this.props.defTacticsAggr}</li>
                    		<li>Team Width: {this.props.defTacticsWidth}</li>
                    		<li>Defender Line: {this.props.defTacticsLine}</li>
                    	</ul>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => ({
	defTacticsPress: state.defTacticsPress,
	defTacticsAggr: state.defTacticsAggr,
	defTacticsWidth: state.defTacticsWidth,
	defTacticsLine: state.defTacticsLine,
	ccTacticsPass: state.ccTacticsPass,
	ccTacticsShoot: state.ccTacticsShoot,
	ccTacticsCross: state.ccTacticsCross,
	ccTacticsPos: state.ccTacticsPos,
	buildUpTacticsSpd: state.buildUpTacticsSpd,
	buildUpTacticsPass: state.buildUpTacticsPass,
	buildUpTacticsPos: state.buildUpTacticsPos
});

export default connect(mapStateToProps)(Tactics);
