import React, {Component} from "react";

import {Form, Input, MainCard} from "../../components";
import { Redirect } from "react-router-dom"
import {connect} from "react-redux"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[],
            display:"none",
            displayButton:"none",
            index:"",
            name:"",
            email:"",
            username:"",
            phone:"",
            website:"",
            compName:"",
            catchPhrase:"",
            bs:"",
            street:"",
            suite:"",
            city:"",
            zipcode:"",
            lat:"",
            lng:"",
            title:"",
            readOnly:false
        }
    }

    // fetchData(){
    //     console.log("cek eksekusi")
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(json => this.setState({ users: json }))
    //
    //     // let temp=this.state.users
    //     // this.state.users.map((val,index)=>{
    //     //     let password="12345"
    //     //     temp[index].push(password)
    //     // })
    //     // this.setState({users:temp})
    //     // console.log("Cek Fetch")
    //     // console.log(this.state.users)
    // }
    // tanyakan nama ini besok
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(json => this.setState({ users: json }))
    // }


    showModal=(event,index)=>{
        const {dataUser,role,idUser}=this.props
        let temp=[]
        if (role=="Admin"){
            temp=dataUser
        } else{
            temp.splice(0,0,dataUser[idUser])
            // console.log("cek temp")
            // console.log(temp)
        }
        console.log("isi index")
        console.log(temp)
        if (this.state.display=="block"){
            this.setState({
                display:"none"
            })
        } else {
            this.setState({
                display:"block",
                name:temp[index].name,
                email:temp[index].email,
                username:temp[index].username,
                phone:temp[index].phone,
                website:temp[index].website,
                compName:temp[index].company.name,
                catchPhrase:temp[index].company.catchPhrase,
                bs:temp[index].company.bs,
                street:temp[index].address.street,
                suite:temp[index].address.suite,
                city:temp[index].address.city,
                zipcode:temp[index].address.zipcode,
                lat:temp[index].address.geo.lat,
                lng:temp[index].address.geo.lng,
                readOnly:true,
                title:"Detail Data Users"
            })
        }

    }

    showModalEdit=(event,index)=>{
        const {dataUser,role,idUser}=this.props
        let temp=[]
        if (role=="Admin"){
            temp=dataUser
        } else{
            temp.splice(0,0,dataUser[idUser])
            // console.log("cek temp")
            // console.log(temp)
        }
        console.log("isi index")
        console.log(temp)
        if (this.state.display=="block"){
            this.setState({
                display:"none"
            })
        } else {
            this.setState({
                display:"block",
                displayButton:"block",
                id:temp[index].id,
                name:temp[index].name,
                email:temp[index].email,
                username:temp[index].username,
                phone:temp[index].phone,
                website:temp[index].website,
                compName:temp[index].company.name,
                catchPhrase:temp[index].company.catchPhrase,
                bs:temp[index].company.bs,
                street:temp[index].address.street,
                suite:temp[index].address.suite,
                city:temp[index].address.city,
                zipcode:temp[index].address.zipcode,
                lat:temp[index].address.geo.lat,
                lng:temp[index].address.geo.lng,
                readOnly:false,
                title:"Edit Data Users"
            })
        }

    }

    deleteData=(event,index)=>{
        let temp=this.props.dataUser
        temp.splice(index,1)
        this.props.editUser(temp)
        console.log("delete")
        console.log(temp)
        // this.setState({
        //     users:temp
        // })
        alert("Data Berhasil Dihapus")
    }

    saveEdit=()=>{
        let data=this.props.dataUser
        let temp={
            id:this.state.id,
            name:this.state.name,
            email:this.state.email,
            username:this.state.username,
            phone:this.state.phone,
            website:this.state.website,
            address:{
                street:this.state.street,
                suite:this.state.street,
                city:this.state.street,
                zipcode:this.state.street,
                geo:{
                    lat:this.state.lat,
                    lng:this.state.lng,
                }
            },
            company:{
                name:this.state.compName,
                catchPhrase:this.state.catchPhrase,
                bs:this.state.bs,
            }
        }
        data.splice(parseInt(this.state.id)-1,1,temp)
        // this.setState({
        //     users:data
        // })
        alert("Data Berhasil Diedit")
        this.props.editUser(data)
        this.setState({
            display:"none"
        })
        console.log("Hasil Edit")
        console.log(this.state.users)
    }

    // showModalEdit=(event,index,idUser)=>{
    //     const {dataUser,role}=this.props
    //     let temp=[]
    //     if (role=="Admin"){
    //         temp=dataUser
    //     } else{
    //         temp.splice(0,0,dataUser[idUser])
    //         // temp.push(dataUser[role])
    //     }
    //     console.log("cek temp")
    //     console.log(idUser)
    //     if (this.state.display=="block"){
    //         this.setState({
    //             display:"none"
    //         })
    //     }
    //     else {
    //         this.setState({
    //             display:"block",
    //             displayButton:"block",
    //             id:temp[index].id,
    //             name:temp[index].name,
    //             email:temp[index].email,
    //             username:temp[index].username,
    //             phone:temp[index].phone,
    //             website:temp[index].website,
    //             compName:temp[index].company.name,
    //             catchPhrase:temp[index].company.catchPhrase,
    //             bs:temp[index].company.bs,
    //             street:temp[index].address.street,
    //             suite:temp[index].address.suite,
    //             city:temp[index].address.city,
    //             zipcode:temp[index].address.zipcode,
    //             lat:temp[index].address.geo.lat,
    //             lng:temp[index].address.geo.lng,
    //             readOnly:false,
    //             title:"Edit Data Users"
    //         })
    //     }
    // }
    onChangeInput = e => {
        console.log(e.target)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {dataUser,loginStatus,role,idUser} = this.props
        console.info("dataUser",dataUser)
        console.info("dataUser",role)
        var temp=[]
        // temp=dataUser
        let disDelete="block"

        if (role==="Admin"){
            temp=dataUser
            temp.forEach((val,index)=>{
                if (val.name==="Admin"){
                    temp.splice(index,1)
                }
            })
            console.log("Sini")

            // temp=dataUser
        } else {
            temp.push(dataUser[idUser])
            // temp.push(dataUser[role])
            disDelete="none"
            // this.setState({
            //     disDelete:"none"
            // })
            // temp=dataUser[role]
            // temp = dataUser[role].find(obj => {
            //     return obj.id === role+1
            // })
            console.log("cek home")
            console.log(temp)
            // temp=dataUser[1]
        }
        // {this.fetchData()}
        // console.log("cek home")
        console.log(role)
        console.log(temp)
        // console.log(users[role])

        if (loginStatus){
            return <>
                <MainCard padding="10px" height="700px" width="800px">
                    <h2>Data Users</h2>
                    {/*<Form formName="formSearch">*/}
                    {/*    <Input classDiv="input-group" classComp="input--style-1" placeholder="Search" name="searchForm"*/}
                    {/*           type="text"/>*/}
                    {/*    <Input classComp="btn-login" name="btnSearch" type="button" value="Search"/>*/}
                    {/*</Form>*/}
                    <table className="tableData" width="100%" border="1">
                        <thead>
                        <tr>
                            <th>No</th>
                            <th className="namealbum" id="namealbum">Nama</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {temp.map((val,index)=>{
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td align="center">
                                        <button onClick={(e)=>{this.showModal(e,index)}}>Detail</button>
                                        <button onClick={(e)=>{this.showModalEdit(e,index)}}>Edit</button>
                                        <button style={{display:disDelete}} onClick={(e)=>{this.deleteData(e,index)}}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                        </tbody>
                        {/*<tr>*/}
                        {/*    <td>1</td>*/}
                        {/*    <td>Tonny Bennet</td>*/}
                        {/*    <td>La Vie en Rose</td>*/}
                        {/*</tr>*/}
                    </table>

                    {/*<table className="tableData" width="100%" border="1">*/}
                    {/*    <thead>*/}
                    {/*    <tr>*/}
                    {/*        <td></td>*/}
                    {/*    </tr>*/}
                    {/*    </thead>*/}
                    {/*    /!*<tr>*!/*/}
                    {/*    /!*    <td>1</td>*!/*/}
                    {/*    /!*    <td>Tonny Bennet</td>*!/*/}
                    {/*    /!*    <td>La Vie en Rose</td>*!/*/}
                    {/*    /!*</tr>*!/*/}
                    {/*</table>*/}
                </MainCard>

                <MainCard display={this.state.display} padding="20px" height="1250px" width="800px">
                    <h2>{this.state.title}</h2>
                    <Form formName="formEdit">
                        <Input display="none" readOnly={this.state.readOnly} onChangeInput={this.onChangeInput} value={this.state.index} classDiv="input-group" classComp="input--style-1" name="name" type="text"/>
                        <Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput} value={this.state.name} classDiv="input-group" classComp="input--style-1" name="name" type="text">
                            Name
                        </Input>
                        <Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput} value={this.state.email} classDiv="input-group" classComp="input--style-1" name="email" type="email">
                            Email
                        </Input>
                        <Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput} value={this.state.username} classDiv="input-group" classComp="input--style-1" name="username" type="text">
                            Username
                        </Input>
                        <Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput} value={this.state.phone}classDiv="input-group" classComp="input--style-1" name="phone" type="text">
                            Phone
                        </Input>
                        <Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput} value={this.state.website}classDiv="input-group" classComp="input--style-1" name="website" type="text">
                            Website
                        </Input>
                        <div>
                            Company
                            <Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput} value={this.state.compName} classDiv="input-group" classComp="input--style-1" name="companyName" type="text"/>
                            <Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput} value={this.state.catchPhrase}classDiv="input-group" classComp="input--style-1" name="companyPhrase" type="text"/>
                            <Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput} value={this.state.bs}classDiv="input-group" classComp="input--style-1" name="companyBs" type="text"/>
                        </div>
                        <div>
                            Address
                            <Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput} value={this.state.street} classDiv="input-group" classComp="input--style-1" name="addressSt" type="text"/>
                            <Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput} value={this.state.suite} classDiv="input-group" classComp="input--style-1" name="addressSuite" type="text"/>
                            <Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput} value={this.state.city} classDiv="input-group" classComp="input--style-1" name="addressCity" type="text"/>
                            <Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput} value={this.state.zipcode} classDiv="input-group" classComp="input--style-1" name="addressZipCode" type="text"/>
                            <Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput} value={this.state.lat} classDiv="input-group" classComp="input--style-1" name="geoLat" type="text"/>
                            <Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput} value={this.state.lng} classDiv="input-group" classComp="input--style-1" name="geoLang" type="text"/>
                        </div>
                        <Input display={this.state.displayButton} classComp="btn-login" funcName={this.saveEdit} name="btnSearch" type="button" value="Save"/>
                    </Form>
                </MainCard>

            </>
        } else {
            return <Redirect to ="/Login"/>
        }

    }
}
const mapStateToProps=(state)=>({
    idUser: state.auth.idUser,
    role: state.auth.role,
    dataUser:state.process.dataUser
})

export default connect(mapStateToProps) (Home)