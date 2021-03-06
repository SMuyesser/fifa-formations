import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Help from './help';
import FormationSelector from './formationselector';
import ProsCons from './proscons';
import Tactics from './tactics';
import PlayerInstructions from './playerinstructions';

import {setCurrentPlayer, setAuthToken} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import '../component-css/formation.css';

export class Formations extends React.Component {

    logOut() {
        this.props.dispatch(setCurrentPlayer(null));
        this.props.dispatch(setAuthToken(null));
        clearAuthToken();
    }

    render() {
        
        // Only visible to logged in users
        if (!this.props.loggedIn) {
            return <Redirect to="/" />;
        }

        let logOutButton;

        if (this.props.loggedIn) {
            logOutButton = (
                <button id="logout" onClick={() => this.logOut()}>{this.props.playername} Log Out</button>
            );
        }

        let display;
        //show normal display
        if(this.props.helpToggle === 'off') {
            display = (
                <div>
                    <div className="tactics-instr-combo">
                        <Tactics />
                        <PlayerInstructions />
                    </div>
                    <ProsCons />
                </div>
            );
        //show help
        } else {
            display = (
                <div>
                    <Help />
                </div>
            )
        }
    

        return (
            <div className="formation">
                <FormationSelector />
                {display}
                {logOutButton}
            </div>
        );
    }
};

const mapStateToProps = state => {
    const {currentPlayer} = state.auth;
    return {
        loggedIn: currentPlayer !== null,
        playername: currentPlayer ? state.auth.currentPlayer.playername : '',
    	formation: state.formations.formation,
        helpToggle: state.formations.helpToggle
    };
};

export default connect(mapStateToProps)(Formations);
