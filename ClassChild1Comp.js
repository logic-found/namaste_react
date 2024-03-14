import React from "react";

class ClassChild1Comp extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.name ,"child1 constructor");
    }
    componentDidMount() {
        console.log(this.props.name , "child1 mounted");
    }
    render() {
        console.log(this.props.name, "child1 render");
        return <h1>Class Child1 Component</h1>;
    }
}

export default ClassChild1Comp;
