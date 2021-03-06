import React,{Component} from "react";
import {Menu} from "../../components"
import "./style.css"
import logo from "../../btpn.png"
import {Link} from "react-router-dom";

class Nav extends Component{
    constructor(props) {
        super(props);
        this.state={}
    }
    setdisplay=()=>{
        const {loginStatus}=this.props
        console.log("statuslogin")
        console.log(loginStatus)
        let {display1,display2}=""
        if (loginStatus){
            display1="block"
            display2="none"
        } else {
            display2="block"
            display1="none"
        }
        return <>
            <div className="navbar">
                <div className="left-nav">
                    <img src={logo} alt="logo" style={{height:'40px'}} />
                </div>
                <Link to={"/"}>
                    <Menu displayStyle={display1} goPage={()=>this.props.toPage("home")}>Home</Menu>
                </Link>
                <Link to={"/About"}>
                    <Menu goPage={()=>this.props.toPage("about")}>About</Menu>
                </Link>
                <Link to={"/Login"}>
                    <Menu displayStyle={display2} goPage={()=>this.props.toPage("login")}>Login</Menu>
                </Link>
                <Link to={"/Register"}>
                    <Menu displayStyle={display2} goPage={()=>this.props.toPage("register")}>Register</Menu>
                </Link>
                <Menu displayStyle={display1} goPage={()=>this.props.toPage("logout")}>Logout</Menu>                <Menu displayStyle={display1} goPage={()=>this.props.toPage("home")}>Home</Menu>
                {/*without Link*/}
                {/*<Menu goPage={()=>this.props.toPage("about")}>About</Menu>*/}
                {/*<Menu displayStyle={display2} goPage={()=>this.props.toPage("login")}>Login</Menu>*/}
                {/*<Menu displayStyle={display2} goPage={()=>this.props.toPage("register")}>Register</Menu>*/}
                {/*<Menu displayStyle={display1} goPage={()=>this.props.toPage("logout")}>Logout</Menu>*/}

            </div>
        </>

    }
    render() {


        return <>
            <div>
                {this.setdisplay()}
                {/*<div className="navbar">*/}
                {/*    <div className="left-nav">*/}
                {/*        <img src={logo} alt="logo" style={{height:'40px'}} />*/}
                {/*    </div>*/}
                {/*    <Menu goPage={()=>this.props.toPage("home")}>Home</Menu>*/}
                {/*    <Menu goPage={()=>this.props.toPage("about")}>About</Menu>*/}
                {/*    <Menu goPage={()=>this.props.toPage("login")}>Login</Menu>*/}
                {/*    <Menu goPage={()=>this.props.toPage("register")}>Register</Menu>*/}
                {/*    <Menu displayStyle={loginStatus} goPage={()=>this.props.toPage("login")}>Logout</Menu>*/}

                {/*</div>*/}
        </div>
        </>
    }
}
export default Nav