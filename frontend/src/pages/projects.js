import { MDBIcon } from "mdb-react-ui-kit";

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
        <div>
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
        </div>
    </>
    );
}