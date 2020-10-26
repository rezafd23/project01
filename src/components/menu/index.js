import React,{Component} from "react";
import "./style.css"

class Menu extends Component{
    constructor(props) {
        super(props);
        this.state={}
    }
    render() {
        return <>
        <div className="nav-menu" style={{display:this.props.displayStyle}} onClick={this.props.goPage}>
            {this.props.children}
        </div>
        </>
    }
}
export default Menu