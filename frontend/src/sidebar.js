import { Link } from "react-router-dom";
import "./layout.css"

export default function Sidebar(){
    return(
        <div>
            <p>Add New</p>
            <p>Dashboard</p>
            <p>Projects</p>
            <p>Invoices</p>
            <p>Expenses</p>
            <p>Cash Flow</p>
        </div>
    );
}