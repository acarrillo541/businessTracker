import {
    MDBBtn
} from 'mdb-react-ui-kit';
import {Link} from 'react-router-dom';

export default function Sidebar(){
    return(
        <div className="vh-100">
            <p>Add New</p>
            <p>Dashboard</p>
            <p>Projects</p>
            <p>Invoices</p>
            <p>Expenses</p>
            <p>Cash Flow</p>
            <Link to='/'>
                <MDBBtn>Contacts</MDBBtn>
            </Link>
        </div>
    );
}