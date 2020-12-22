import React, { Component } from 'react';

class ClassInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                {this.props.location.state.classname}
            </div>
        );
    }
}

export default ClassInfo;
