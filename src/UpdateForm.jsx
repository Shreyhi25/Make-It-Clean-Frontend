import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
  MDBBtn
} from 'mdb-react-ui-kit';
import Nav_Bar from './Nav_Bar';

export default function App() {
  return (
    <React.Fragment>
    <Nav_Bar/>
    <div style={{width:1510}}>
    <form style={{paddingTop:80}}>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form6Example1' label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form6Example2' label='Last name' />
        </MDBCol>
      </MDBRow>

      <MDBInput wrapperClass='mb-4' id='form6Example3' label='Email' />
      <MDBInput wrapperClass='mb-4' id='form6Example4' label='Password' />
      <MDBInput wrapperClass='mb-4' type='email' id='form6Example5' label='Contact' />
      <MDBInput wrapperClass='mb-4' type='tel' id='form6Example6' label='Location' />

      <MDBBtn className='mb-4' type='submit' block>
        Update  
      </MDBBtn>
    </form>
    </div>
    </React.Fragment>
  );
}