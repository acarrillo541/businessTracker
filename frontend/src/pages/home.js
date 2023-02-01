import { MDBBtn, MDBCol, MDBIcon, MDBNavbar, MDBRow } from "mdb-react-ui-kit";
import Sidebar from "./sidebar";
import "./styles.css";

export default function Home(){
    var start=1;
    function flipStart(){
        start = start*-1;
    }
    
    return(
<>
    <MDBRow>
        {start == 1 &&
        <MDBCol size={1} className="bg-dark " >
            <Sidebar/>
        </MDBCol>
        }
        
        <MDBCol >
            <MDBRow>
                <MDBNavbar className="bg-dark d-flex justify-content-start">
                    <MDBBtn className="bg-dark " floating onClick={()=>{start=start*-1; console.log(start);}} >
                        <MDBIcon icon="angle-double-right"/>
                    </MDBBtn>
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