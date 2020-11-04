import React, {Component} from "react";

import {Form, Input, MainCard} from "../../components";
import {Redirect} from "react-router-dom"
import {connect} from "react-redux"

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            display: "none",
            displayButton: "none",
            index: "",
            name: "",
            email: "",
            username: "",
            phone: "",
            website: "",
            compName: "",
            catchPhrase: "",
            bs: "",
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            lat: "",
            lng: "",
            title: "",
            alamat: "",
            tempatLahir: "",
            tglLahir: "",
            noHp: "",
            readOnly: false
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


    showModal = (event, index) => {
        const {dataUser, userLoginData} = this.props
        let temp = []
        if (userLoginData['role'] === "admin") {
            temp = dataUser
        } else {
            console.log("cek isi data user")
            console.log(dataUser)
            temp.splice(0, 0, dataUser[0])
            // console.log("cek temp")
            // console.log(temp)
        }
        console.log("isi index")
        console.log(temp)
        if (this.state.display == "block") {
            this.setState({
                display: "none"
            })
        } else {
            this.setState({
                display: "block",
                displayButton: "none",
                name: temp[index].name,
                email: temp[index].email,
                // username:temp[index].username,
                phone: temp[index].noHp,
                tempatLahir: temp[index].tempatLahir,
                tglLahir: temp[index].tglLahir,
                // website:temp[index].website,
                // compName:temp[index].company.name,
                // catchPhrase:temp[index].company.catchPhrase,
                // bs:temp[index].company.bs,
                street: temp[index].alamat,
                // suite:temp[index].address.suite,
                // city:temp[index].address.city,
                // zipcode:temp[index].address.zipcode,
                // lat:temp[index].address.geo.lat,
                // lng:temp[index].address.geo.lng,
                readOnly: true,
                title: "Detail Data Users"
            })
        }

    }

    showModalEdit = (event, index) => {
        const {dataUser, userLoginData} = this.props

        let temp = []
        if (userLoginData['role'] === "admin") {
            temp = dataUser
        } else {
            console.log("cek isi data user")
            console.log(dataUser)
            temp.splice(0, 0, dataUser[0])
        }
        console.log("isi index")
        console.log(temp)
        if (this.state.display == "block") {
            this.setState({
                display: "none"
            })
        } else {
            this.setState({
                display: "block",
                displayButton: "block",
                id: temp[index]._id,
                name: temp[index].name,
                email: temp[index].email,
                phone: temp[index].noHp,
                tempatLahir: temp[index].tempatLahir,
                tglLahir: temp[index].tglLahir,
                street: temp[index].alamat,
                // name:temp[index].name,
                // email:temp[index].email,
                // username:temp[index].username,
                // phone:temp[index].phone,
                // website:temp[index].website,
                // compName:temp[index].company.name,
                // catchPhrase:temp[index].company.catchPhrase,
                // bs:temp[index].company.bs,
                // street:temp[index].address.street,
                // suite:temp[index].address.suite,
                // city:temp[index].address.city,
                // zipcode:temp[index].address.zipcode,
                // lat:temp[index].address.geo.lat,
                // lng:temp[index].address.geo.lng,
                readOnly: false,
                title: "Edit Data Users"
            })
        }

    }

    saveEdit = async () => {
        console.log("EDIT"+this.state.id)
        let temp = {
            name: this.state.name,
            email: this.state.email,
            noHp: this.state.phone,
            tempatLahir: this.state.tempatLahir,
            tglLahir: this.state.tglLahir,
            alamat: this.state.street,
        }
        const response = await fetch('http://localhost:3000/app/api/user/edit/'+this.state.id, {
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+this.props.access_token,
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(temp) // body data type must match "Content-Type" header
        }).then(response=>{
            response.json().then(res=>{
                if (res.status=="200"){
                    alert("Data Berhasil Diubah")
                    this.getDataUser()
                    this.setState({
                        display:"none"
                    })
                } else {
                    alert("Data Gagal Diubah")
                }
                console.log("cek Hasil")
                console.log(res)
                console.log(res.response.status)
            })
        });
    }

    deleteData = async (event,index) => {
        console.log("cek delete"+index)
        const response = await fetch('http://localhost:3000/app/api/user/remove/'+index, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer '+this.props.access_token,
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(response=>{
            response.json().then(res=>{
                if (res.status=="200"){
                    this.getDataUser()
                    alert("Data Berhasil Dihapus")
                    this.setState({
                        display:"none"
                    })
                }
                console.log("cek Hasil")
                console.log(res)
                console.log(res.response.status)
            })
        });
    }
    getDataUser=async ()=>{
        let role=this.props.role
        let dataUser=[]
        let url=(role==="admin")?'http://localhost:3000/app/api/user/users/all':'http://localhost:3000/app/api/user/users/'

        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json',
                'Authorization':'Bearer '+this.props.access_token},
        };
        await fetch(url,requestOptions)
            .then(response => response.json())
            .then(json => dataUser=json)
        console.log("Get Data User")
        console.log(dataUser.response.payload)
        this.props.setDataUser(dataUser.response.payload)
    }

    onChangeInput = e => {
        console.log(e.target)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {dataUser, loginStatus, role, idUser} = this.props
        console.info("dataUser", dataUser)
        console.info("dataUser", role)
        var temp = []
        temp = dataUser
        let disDelete = "block"

        // if (role==="Admin"){
        //     temp=dataUser
        //     temp.forEach((val,index)=>{
        //         if (val.name==="Admin"){
        //             temp.splice(index,1)
        //         }
        //     })
        //     console.log("Sini")
        //
        //     // temp=dataUser
        // } else {
        //     temp.push(dataUser[idUser])
        //     // temp.push(dataUser[role])
        //     disDelete="none"
        //     // this.setState({
        //     //     disDelete:"none"
        //     // })
        //     // temp=dataUser[role]
        //     // temp = dataUser[role].find(obj => {
        //     //     return obj.id === role+1
        //     // })
        //     console.log("cek home")
        //     console.log(temp)
        //     // temp=dataUser[1]
        // }
        // {this.fetchData()}
        // console.log("cek home")
        console.log(role)
        console.log(temp)
        // console.log(users[role])

        if (loginStatus) {
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
                        {temp.map((val, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td align="center">
                                        <button onClick={(e) => {
                                            this.showModal(e, index)
                                        }}>Detail
                                        </button>
                                        <button onClick={(e) => {
                                            this.showModalEdit(e, index)
                                        }}>Edit
                                        </button>
                                        {val.role !== "admin" && <button style={{display: disDelete}} onClick={(e) => {
                                            this.deleteData(e, val._id)
                                        }}>Delete
                                        </button>}
                                        {/*<button style={{display: disDelete}} onClick={(e) => {*/}
                                        {/*    this.deleteData(e, val._id)*/}
                                        {/*}}>Delete*/}
                                        {/*</button>*/}
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
                        <Input display="none" readOnly={this.state.readOnly} onChangeInput={this.onChangeInput}
                               value={this.state.index} classDiv="input-group" classComp="input--style-1" name="name"
                               type="text"/>
                        <Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput} value={this.state.name}
                               classDiv="input-group" classComp="input--style-1" name="name" type="text">
                            Name
                        </Input>
                        <Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput}
                               value={this.state.email} classDiv="input-group" classComp="input--style-1" name="email"
                               type="email">
                            Email
                        </Input>
                        {/*<Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput} value={this.state.username} classDiv="input-group" classComp="input--style-1" name="username" type="text">*/}
                        {/*    Username*/}
                        {/*</Input>*/}
                        <Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput}
                               value={this.state.phone} classDiv="input-group" classComp="input--style-1" name="phone"
                               type="text">
                            Phone
                        </Input>
                        <Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput}
                               value={this.state.tempatLahir} classDiv="input-group" classComp="input--style-1"
                               name="tempatLahir" type="text">
                            Tempat Lahir
                        </Input>
                        <Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput}
                               value={this.state.tglLahir} classDiv="input-group" classComp="input--style-1"
                               name="tglLahir" type="text">
                            Tanggal Lahir
                        </Input>
                        <Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput} value={this.state.street}classDiv="input-group" classComp="input--style-1" name="street" type="text">
                            Alamat
                        </Input>
                        {/*<div>*/}
                        {/*    Company*/}
                        {/*    <Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput} value={this.state.compName} classDiv="input-group" classComp="input--style-1" name="companyName" type="text"/>*/}
                        {/*    <Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput} value={this.state.catchPhrase}classDiv="input-group" classComp="input--style-1" name="companyPhrase" type="text"/>*/}
                        {/*    <Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput} value={this.state.bs}classDiv="input-group" classComp="input--style-1" name="companyBs" type="text"/>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    Address*/}
                        {/*    <Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput} value={this.state.street} classDiv="input-group" classComp="input--style-1" name="addressSt" type="text"/>*/}
                        {/*    <Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput} value={this.state.suite} classDiv="input-group" classComp="input--style-1" name="addressSuite" type="text"/>*/}
                        {/*    <Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput} value={this.state.city} classDiv="input-group" classComp="input--style-1" name="addressCity" type="text"/>*/}
                        {/*    <Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput} value={this.state.zipcode} classDiv="input-group" classComp="input--style-1" name="addressZipCode" type="text"/>*/}
                        {/*    <Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput} value={this.state.lat} classDiv="input-group" classComp="input--style-1" name="geoLat" type="text"/>*/}
                        {/*    <Input readOnly={this.state.readOnly} onChangeInput={this.onChangeInput} value={this.state.lng} classDiv="input-group" classComp="input--style-1" name="geoLang" type="text"/>*/}
                        {/*</div>*/}
                        <Input display={this.state.displayButton} classComp="btn-login" funcName={this.saveEdit}
                               name="btnSearch" type="button" value="Save"/>
                    </Form>
                </MainCard>

            </>
        } else {
            return <Redirect to="/Login"/>
        }

    }
}

const mapStateToProps = (state) => ({
    idUser: state.auth.idUser,
    role: state.auth.role,
    access_token: state.auth.access_token,
    dataUser: state.process.dataUser,
    userLoginData: state.auth.userLoginData
})
const mapDispatchToProps = (dispatch) => ({
   setDataUser:(data)=>dispatch({
        type:"fetchData",
        payload: {dataUser:data}}
    )

})

export default connect(mapStateToProps,mapDispatchToProps)(Home)