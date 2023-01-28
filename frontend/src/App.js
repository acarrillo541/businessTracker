import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from 'mdb-react-ui-kit';

function Layout() {
  return (
    <div className='d-flex align-content-center text-center bg-dark'>
      <MDBContainer>
        <h1>Member Login</h1>
        <MDBRow center>
          <MDBCol size='4'>
            one of them
          </MDBCol>
          <MDBCol size='4'>
            <form>
              <MDBInput className='mb-4' type='email'  label='Email address'/>
              <MDBInput className='mb-4' type='password' label='Password'/>
              <MDBBtn type='submit' className='mb-4' block>Sign In</MDBBtn>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default Layout;
