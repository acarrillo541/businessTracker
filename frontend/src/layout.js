import {useState} from 'react';
import { MDBBtn, MDBCol, MDBIcon, MDBNavbar, MDBRow } from "mdb-react-ui-kit";
import Sidebar from "./pages/sidebar";
import "./pages/styles.css";
import { Outlet } from 'react-router-dom';

function Layout({children}){
  
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
              {/*do some shit here*/ }
              <main>{children}</main>

          </MDBRow>
      </MDBCol>
  </MDBRow>
  <Outlet/>
</>
  );
}

export default Layout;
