import React from 'react';
import { connect } from 'react-redux'

import { AboutComponent } from '../components/about';

class AboutContainer extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        // console.log("Home", this.props.authReducer)
        return (
            <div>
                <AboutComponent />
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         authReducer: state.UserReducer
//     }
// }

// export default connect(mapStateToProps, null)(AboutContainer)
export default AboutContainer;