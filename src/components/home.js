import React from 'react';

export class HomeComponent extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div>
                <h1>this is home pge</h1>
                <h1>{this.props.data}</h1>
                <button onClick={this.props.change}>change</button>
            </div>
        )
    }
}
