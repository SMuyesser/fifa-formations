import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export class Main extends React.Component {

    render() {

        return (
            <div className="main">
                <h1>FIFA FORMATIONS</h1>
                <Link className="linkBtn" to="/formations" role="button" onClick={e => this.checkGameStart(e)}>Begin Game</Link>
            </div>
        );
    }
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Main);
