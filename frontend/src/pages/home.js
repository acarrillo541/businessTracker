import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import Sidebar from "./sidebar";
import "./styles.css";

export default function Home(){
    return(
<>
    <MDBRow>
        <MDBCol size={1} className="bg-dark position-fixed" >
            <Sidebar/>
        </MDBCol>
        <MDBCol className="d-flex flex-wrap justify-content-center">
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
        </MDBCol>
    </MDBRow>
</>
    );
}