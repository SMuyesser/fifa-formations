import React from 'react';
import {connect} from 'react-redux';

import '../component-css/help.css';

export class Help extends React.Component {

    render() {

        return (
            <div className="help">
                <h2>Help</h2>
                <p id="help-info">While setting up your team in FIFA, you can adjust your formation, tactics, and instructions.  This section will help you understand the information found in the Fifa Formations App to set your team up for more wins.</p>
                <div id="key">
                	<h3 className='contents-header'>I. POSITION KEY</h3>
                    <ul id="abbreviation-list">
                        <li>ST = Striker</li>
                        <li>CF = Center Forward</li>
                        <li>LF = Left Forward</li>
                        <li>RF = Right Forward</li>
                        <li>LW = Left Wing</li>
                        <li>RW = Right Wing</li>
                        <li>LM = Left Midfielder</li>
                        <li>RM = Right Midfielder</li>
                        <li>CAM = Center Attacking Midfielder</li>
                        <li>CM = Center Midfielder</li>
                        <li>CDM = Center Defensive Midfielder</li>
                        <li>LWB = Left Wing Back</li>
                        <li>RWB = Right Wing Back</li>
                        <li>LB = Left Back</li>
                        <li>RB = Right Back</li>
                        <li>CB = Center Back</li>
                        <li>GK = Goalkeeper</li>
                    </ul>
                </div>

                <div id="custom-tactics-help">
                    <h3 className='contents-header'>II. Custom Tactics</h3>

                    <h4>Build Up</h4>
                    <p>These will change how your team plays in the first two thirds of the pitch with the ball (defense/midfield)</p>

                    <p className="header">Speed:</p>
                    <li>1-32 Slow build up with players waiting to make runs</li>
                    <li>33-66 Medium mixed build up</li>
                    <li>67-99 Fast build up with players making runs and positioning themselves quickly after getting possession</li>

                    <p className="header">Passing:</p>
                    <li>1-32 Short Passing and players stay closer</li>
                    <li>33-66 Mix of short and long passing</li>
                    <li>67-99 Long passing and more distance between players</li>

                    <p className="header">Positioning:</p>
                    <li>Organised - less movement and players stay to their positions</li>                        
                    <li>Free Form - players move freely into creative positions</li>

                    <h4>Chance Creation</h4>
                    <p>These will change how your team plays in the final third of the pitch with the ball (attack)</p>

                    <p className="header">Passing:</p>
                    <li>1-32 Short simple passes</li>
                    <li>33-66 Mix of short and through ball passing</li>
                    <li>67-99 Players make risky runs forward expecting through balls</li>

                    <p className="header">Crossing:</p>
                    <li>1-32 Less crossing meaning players will come short towards the ball while you have it on the wings</li>
                    <li>33-66 Mixed crossing and short play</li>
                    <li>67-99 More crossing meaning players will run into the box expecting a cross from the wings</li>

                    <p className="header">Shooting:</p>
                    <li>1-32 Less shooting and players will offer themselves for passes waiting for forwards to arrive</li>
                    <li>33-66 Mixture of positioning for shots and setting up shots</li>
                    <li>67-99 More shooting and players will position themselves to shoot when they get the ball</li>

                    <p className="header">Positioning:</p>
                    <li>Organised - less movement and players stay to their positions</li>                        
                    <li>Free Form - players move freely into creative positions</li>

                    <h4>Defense</h4>
                    <p>These will change your team's defensive behavior</p>

                    <p className="header">Pressure:</p>
                    <li>1-32 Low meaning your team stays back</li>
                    <li>33-66 Team will press up until midfield</li>
                    <li>67-99 High meaning your team will press as much as possible</li>

                    <p className="header">Aggression:</p>
                    <li>1-32 Low meaning your team will contain with little charging</li>
                    <li>33-66 Close in on player with more charging</li>
                    <li>67-99 Team will charge frequently and double team player</li>

                    <p className="header">Team Width:</p>
                    <li>1-32 Narrow and team will focus on one side of the pitch</li>
                    <li>33-66 Balanced width</li>
                    <li>67-99 Team will stay as wide as possible</li>

                    <p className="header">Defender Line:</p>
                    <li>Cover - Defenders will cover up runs made by other defenders</li>
                    <li>Offside Trap - Defenders step up attempting to draw opponent offsides</li>
                </div>

                <div id="player-instructions-help">
                    <h3 className='contents-header'>III. Player Instructions</h3>
                    <li>This section describes the instruction settings that change the play style of individual players</li>
                    <li>ST(speed) vs. ST(strength) - Certain formations have different instructions depending if you have a quick (speed striker) or slower (strong striker).  If you see these, use whichever option applies to your team</li>
                    <li>ST1/ST2 or CM1/CM2 etc. - When multiple players of the same position have instructions, apply them to players left to right</li>
                    <li>(1 of 2) - Means apply insturctions to any one of the two players in the same position</li>
                    <li>(middle) - Means apply to the middle player of the same position</li>
                    <li>default - Do not change instructions</li>
                </div>

                <div id="strength-weakness-help">
                    <h3 className='contents-header'>IV. Strength/Weakness</h3>
                    <li>Balanced - Well rounded formation with just the right amount of offense and defense</li>
                    <li>Positioning - Team is positioned well for both attack and defense</li>
                    <li>Spacing - Team isn't too far apart or too close</li>
                    <li>Triangles - Good formation for passing between 3 players in a triangle pattern</li>
                    <li>Counter Attacks - Can quickly get the ball up the pitch after gaining possession</li>
                    <li>Tiki-Taka - Short quick passing play style works well</li>
                    <li>Press Formation - Good for putting pressure on your opponent</li>
                    <li>Crowded Middle - Many midfielders to jam opponent passing and give you options</li>
                    <li>Manage Game - Control the pace of play</li>
                    <li>Possession - Hold the ball and pass it around for long periods of time</li>
                    <li>Direct Play - Minimul passing to get the ball up the pitch</li>
                    <li>High Press - Works well against opponents who use high press</li>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => ({
	helpToggle: state.formations.helpToggle
});

export default connect(mapStateToProps)(Help);