import React,{Component} from "react";

class Option extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {value,text,onChangeSelect}=this.props
        return <>
            <option onChange={onChangeSelect} value={value}>{text}</option>
        </>
    }
}
export default Option