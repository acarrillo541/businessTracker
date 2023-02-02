import {useState} from 'react';
import { MDBBtn, MDBCol, MDBIcon, MDBNavbar, MDBRow } from "mdb-react-ui-kit";
import Sidebar from "./sidebar";
import "./styles.css";

export default function Home(){
    const [start, setStart]=useState(1);
    function flipStart(){
        const flipped = start*-1;
        setStart(flipped);
        console.log(start);
    }
    
    return(
<>
    <MDBRow>
        { start === 1 &&
        <MDBCol size={1} className="bg-dark " >
            <Sidebar/>
        </MDBCol>
        }
        
        <MDBCol >
            <MDBRow>
                <MDBNavbar className="bg-dark d-flex justify-content-start">
                    {start === 1?
                    <MDBBtn className="bg-dark shadow-0 pe-2"  floating on >
                        <MDBIcon icon="angle-double-left" onClick={flipStart}/>
                    </MDBBtn>
                    :
                    <MDBBtn className="bg-dark shadow-0 pe-2 ps-2"  floating onClick={flipStart} >
                        <MDBIcon icon="angle-double-right"/>
                    </MDBBtn>
                    }
                    Hello, Alan Carrillo 
                    
                </MDBNavbar>
            </MDBRow>
            <MDBRow>
                <div className="d-flex flex-wrap justify-content-center">
                    <div class="box">Cash Flow</div>
                    <div class="box">Expenses</div>
                    <div class="box">Sales</div>
                    <div class="box">Payroll</div>
                    <div class="box">Profit Loss</div>
                    <div class="box">Invoices</div>
                    <div class="box">Cash Flow</div>
                    <div class="box">Expenses</div>
                    <div class="box">Sales</div>
                    <div class="box">Payroll</div>
                    <div class="box">Profit Loss</div>
                    <div class="box">Invoices</div>
                </div>
            </MDBRow>
        </MDBCol>
    </MDBRow>
</>
    );
}