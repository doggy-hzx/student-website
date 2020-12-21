import React, { Component } from 'react';

class RealChange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token:"",
        };
    }

    componentDidMount(){
        // fetch(backendUrl+"user/profile/changepass/set_new/",{
        //     mode:"cors",
        // credentials: 'include',
        // })
        //     .then(res => res.json())
        //     .then((tokenresult)=>{
        //         this.setState({
        //             token:tokenresult.token,
        //         })
        //     },
        // (error)=>{
        //     console.log(error);
        // })
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default RealChange;
