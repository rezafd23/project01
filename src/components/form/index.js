import React,{Component} from "react";

class Form extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return <>
            <form name={this.props.formName}>
                {this.props.children}
            </form>
        </>
    }

}
export default Form