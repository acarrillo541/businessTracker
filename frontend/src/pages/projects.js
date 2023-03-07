import { MDBIcon, MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit";

const QuickBtn = ({label})=>{
    return(
    <div className="quickBtn">
        <div className="bigBtn">
            <MDBIcon icon="download"/>
        </div>
        <p>{label}</p>
    </div>
    );
}

export default function Project(){
    return(
    <>
            <div className="quickAdd">
                <div className="table-header">
                    Quick Actions
                </div>
                <div className="table">
                    <QuickBtn label="Estimate"/>
                    <QuickBtn label="Invoice"/>
                    <QuickBtn label="Receipt"/>
                </div>
           </div>
           <div>
                <MDBTable >
                    <MDBTableHead style={{backgroundColor:'black'}}>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Address</th>
                            <th scope="col">Status</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        <tr>
                            <td>101</td>
                            <td>Alan Carrillo</td>
                            <td>10/17/1998</td>
                            <td>1810 William Way, Concord CA</td>
                            <td>submitted</td>
                        </tr>
                        <tr>
                            <td>101</td>
                            <td>Alan Carrillo</td>
                            <td>10/17/1998</td>
                            <td>1810 William Way, Concord CA</td>
                            <td>submitted</td>
                        </tr>
                    </MDBTableBody>
                </MDBTable>
                
            </div>
    </>
    );
}