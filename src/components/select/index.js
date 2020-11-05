import React, {Component} from "react";

class Select extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name, text,className,value,onChange} = this.props
        return <>
            <div className={className}>
                {text}
                <select name={name} value={value} onChange={onChange}>
                    {this.props.children}
                </select>
            </div>
        </>
    }
}

export default Select