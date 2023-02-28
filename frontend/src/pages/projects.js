import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

const QuickBtn = ({label})=>{
    return(
    <div className="quickBtn">
        <MDBBtn floating >
            <MDBIcon icon="download"/>
        </MDBBtn>
        <p>{label}</p>
    </div>
    );
}

export default function Project(){
    return(
    <>
        <div>
            <div className="quickAdd">
                <QuickBtn label="Estimate"/>
                <QuickBtn label="Invoice"/>
                <QuickBtn label="Receipt"/>
            </div>
        </div>
    </>
    );
}