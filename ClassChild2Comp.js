import { Component } from "react";

class ClassChild2Comp extends Component {
    constructor(props){
       super(props)
        console.log(this.props.name, 'child2 constructor')
    }
    state = {
        count: 0,
    };
    async componentDidMount() {
        console.log(this.props.name, "child2 mounted");
        this.setState({
            count : 2
        })
        this.interval = setInterval(() => {
            console.log('child2 timer')
        }, 1000)
    }
    componentDidUpdate(){
        console.log(this.props.name, "child2 updated");
    
    }
    componentWillUnmount(){
        console.log(this.props.name, "child2 unmounted");
        clearInterval(this.interval)
    
    }
    render() {
        const { name, age } = this.props;
        const { count } = this.state;
        console.log(name, "child2 render");
        return (
            <>
                <h1>
                    Class Child2 Component : {name}, age : {age}
                </h1>
                <p>count : {count}</p>
                <button
                    onClick={() => {
                        this.setState({ count: count + 1 });
                    }}
                >
                    click me
                </button>
            </>
        );
    }
}

export default ClassChild2Comp;
