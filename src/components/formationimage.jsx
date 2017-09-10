import React from 'react';
import {connect} from 'react-redux';

export class FormationImage extends React.Component {

    render() {
        return (
            <div className="formationImage">
		        <img src={require('../images/'+this.props.image+'.jpg')} width={210} height={110} alt={'formation'} />
            </div>
        );
    }
};

const mapStateToProps = state => ({
	image: state.image
});

export default connect(mapStateToProps)(FormationImage);