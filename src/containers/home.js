import React from 'react';
import { connect } from 'react-redux'
import { changeClick } from '../store/actions/action';
import { HomeComponent } from '../components/home';

class HomeContainer extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    clickFunc(){
        console.log("click!")
        // this.props.myClick();
    }
    render() {
        // console.log("Home", this.props.name)
        return (
            <div>
                <HomeComponent  change={this.clickFunc.bind(this)}/>
            </div>
        )
    }
}

// function mapStateToProps(state){
//     return({
//         name: state.todoReducer
//     })
// }
// function mapDispatchToProps(dispatch){
//     return({
//         myClick: ()=>{dispatch(changeClick())}
//     })
// }

// export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
export default HomeContainer;