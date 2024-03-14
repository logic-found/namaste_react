import { Component } from "react";
import ClassChild1Comp from './ClassChild1Comp'
import ClassChild2Comp from './ClassChild2Comp'

class ClassParentComp extends Component{
    constructor(props){
        super(props)
        this.state = {
            count1: 0,
            count2: 0,
        };
        console.log('parent constructor')
    }
    componentDidMount(){
        console.log('parent mounted')
    }
    componentDidUpdate(){
        console.log('parent updated')
    }
    componentWillUnmount(){
        console.log('parent unmounted')
    }
    render(){
        const { name, age } = this.props;
        let { count1, count2 } = this.state;
        console.log('parent render')
        return(
        <>
            <h1>Class Parent component</h1>
            <h3>Name : {name}</h3>
                <h3>Age : {age}</h3>
                <h3>State Var Count 1 : {count1}</h3>
                <h3>State Var Count 2 : {count2}</h3>
                <button
                    onClick={() => {
                        this.setState({ count1 : count1 + 1, count2 : count2 + 1 });  
                    }}
                >
                    Click me
                </button>
            {/* <ClassChild1Comp name={"1"}/> */}
            {/* <ClassChildComp name={"2"}/> */}
            <ClassChild2Comp name={'1'} age={10}/>
            {/* <ClassNewComp name={'2'} age={20}/> */}
        </>
        )
    }
}


export default ClassParentComp