import React,{Component} from "react";
import "./style.css"

class Input extends Component{
    constructor(props) {
        super(props);
        this.state={}
    } render() {
        // return <div className="input-group">
        //     <input className="input--style-1" name={this.props.name} placeholder={this.props.placeholder}
        return <div className={this.props.classDiv}>
            {this.props.children}
            <input className={this.props.classComp} name={this.props.name} placeholder={this.props.placeholder}
                   type={this.props.type} value={this.props.value} onClick={this.props.funcName}
                   onChange={this.props.onChangeInput}
            ></input>
        </div>
    }
}
export default Input