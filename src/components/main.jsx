import React from 'react';
import {connect} from 'react-redux';

export class Main extends React.Component {

    render() {
        return (
            <div className="main">
                <h1>FIFA FORMATIONS</h1>
            </div>
        );
    }
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Main);
