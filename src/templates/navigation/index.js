import React,{Component} from "react";
import {Menu} from "../../components"
import "./style.css"
import logo from "../../btpn.png"
import {Link} from "react-router-dom";
import {connect} from "react-redux"

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
                { this.props.loginStatus ?
                    <Link to={"/Logout"}>
                        {/*{this.props.status(false)}*/}
                        <Menu displayStyle={display1} goPage={this.props.doLogout}>Logout</Menu>
                    </Link>
                    :
                    <>
                        <Link to={"/Login"}>
                            <Menu displayStyle={display2} goPage={()=>this.props.toPage("login")}>Login</Menu>
                        </Link>
                        <Link to={"/Register"}>
                            <Menu displayStyle={display2} goPage={()=>this.props.toPage("register")}>Register</Menu>
                        </Link>
                    </>
                }
                {/*<Link to={"/Logout"}>*/}
                {/*    <Menu displayStyle={display1} goPage={()=>this.props.toPage("logout")}>Logout</Menu>*/}
                {/*</Link>*/}
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
        </div>
        </>
    }
}
const mapStateToProps = (state) => ({
    loginStatus: state.auth.isLoggedIn
})

const mapDispatchToProps = (dispatch) => ({
    doLogout: () => dispatch({ type: "LOGOUT" })
})
export default connect(mapStateToProps,mapDispatchToProps) (Nav)