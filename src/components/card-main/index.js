import React,{Component} from "react";
import './style.css'

class MainCard extends Component{
    constructor(props) {
        super(props);
    } render() {
        return <>
            <div className="card-main" style={{display:this.props.display, height:this.props.height,width:this.props.width}}>
                {this.props.children}
            </div>
        </>
    }
}
export default MainCard