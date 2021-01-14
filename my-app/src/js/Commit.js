import React, { Component } from 'react';
import { Button, Comment, Divider, List } from 'antd';
import Title from './Title';
import { Redirect } from 'react-router-dom';

class Commit extends Component {
    constructor(props) {
        super(props);
        this.state = {

            flag:0,

            studentcom:[
                {studentname:"student1",commit:"commit1"},
                {studentname:"student2",commit:"commit2"},
                {studentname:"student3",commit:"commit3"},
                {studentname:"student4",commit:"commit4"},
                {studentname:"student5",commit:"commit5"},
                {studentname:"student6",commit:"commit6"},
                {studentname:"student7",commit:"commit7"},
            ],
        };
    }

    Return=()=>{
        this.setState({
            flag:1,
        })
    }

    render() {
        if(this.state.flag===0){
            return (
                <div >
                    <Title></Title>
                    <div className="CreateClass">
                        <List
                            header={this.props.location.state.classname}
                            dataSource={this.state.studentcom}
                            renderItem={item=>(
                                <li>
                                    <Comment
                                        author={item.studentname}
                                        content={item.commit}
                                    />
                                </li>
                            )}
                        />

                        <Button 
                            style={{float:"right"}}
                            onClick={this.Return}
                        >返回首页</Button>

                    <Divider></Divider>
                    <Divider></Divider>
                    
                    </div>
                </div>
            );
        }else if(this.state.flag===1){
            return(<Redirect to={{pathname:'/'}}></Redirect>)
        }
    }
}

export default Commit;
