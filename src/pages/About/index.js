import React,{Component} from "react";
import {MainCard} from "../../components";

class About extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return <>
            <MainCard height="450px" width="450px">
                <h1>BTPN SYARIAH</h1>
                <h3>Visi :</h3>
                <p>Menjadi bank syariah terbaik untuk keuangan inklusif, mengubah hidup berjuta rakyat Indonesia</p>
                <h3>Misi :</h3>
                <p>Bersama, kita ciptakan kesempatan tumbuh dan hidup yang lebih berarti</p>
            </MainCard>
        </>
    }
}
export default About