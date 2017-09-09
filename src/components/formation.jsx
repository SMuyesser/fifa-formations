import React from 'react';
import {connect} from 'react-redux';

export class Formation extends React.Component {

    render() {
        return (
            <div className="formation">
            </div>
        );
    }
};

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(Formation);