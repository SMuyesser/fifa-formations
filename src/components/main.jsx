import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export class Main extends React.Component {

    render() {

        return (
            <div className="main">
                <h1>FIFA FORMATIONS</h1>
                <Link to="/formation">Kick Off</Link>
            </div>
        );
    }
};

const mapStateToProps = state => ({
	formation: state.formation
});

export default connect(mapStateToProps)(Main);
