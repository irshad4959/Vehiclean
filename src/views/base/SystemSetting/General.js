import React from 'react'
import {
  CCard,CCardBody,
  CCardHeader,CCol,CButton,
  CRow,CFormInput, CFormSelect,
} from '@coreui/react';

const General=()=>{
  return(
    <CRow>
    <CCol xs={12}>
      <CCard className="mb-12" >
        <CCardHeader>
          <strong>General Information</strong>
        </CCardHeader>
        <CCardBody className="mb-12" size="sm">
        <CRow>
        <CCol xs={3}>
        <CFormInput type="text" className="mb-3"  size="lg" label='Site Name' name='sitename' placeholder="textbox" />
        </CCol> 
        <CCol xs={3}>
        <CFormInput type="file" className="mb-3"  size="lg" label='Site Icon' name='siteicon' placeholder="imageslector" />
        </CCol> 
        <CCol xs={3}>
        <CFormInput type="file" className="mb-3"  size="lg" label='Fav Icon' name='favicon' placeholder="imageslector" />
        </CCol> 
        <CCol xs={3}>
        <CFormInput type="file" className="mb-3"  size="lg" label='Site Logo' name='sitelogo' placeholder="imageslector" />
        </CCol> 
        </CRow>
        <CRow>
        <CCol xs={3}>
        <CFormInput type="number" className="mb-3"  size="lg" label='Contact Number' name='number' placeholder="Mobile Number" />
        </CCol> 
        <CCol xs={3}>
        <CFormInput type="email" className="mb-3"  size="lg" label='Contact @email' name='email' placeholder="contact Email" />
        </CCol> 
        <CCol xs={3}>
        <CFormInput type="text" className="mb-3"  size="lg" label='© content' name='copyright' placeholder="© content" />
        </CCol> 
        <CCol xs={3}>
        <CFormSelect size="lg" className="mb-3" aria-label="Small select example"name='country' label='Default Country'>
            <option>Country</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </CFormSelect>
        </CCol>
        </CRow>
        <CRow>
        <CCol xs={3}>
        <CFormSelect size="lg" className="mb-3" aria-label="Small select example" name='currency' label='Currency'>
            <option>Currency</option>
            <option value="1">Dollor</option>
            <option value="2">Euro</option>
            <option value="3">Rupees</option>
          </CFormSelect>
        </CCol>
        <CCol xs={3}>
        <CFormInput type="text" className="mb-3"  size="lg" label='Unit Measurment' name='unit' placeholder="Unit Measurment" />
        </CCol>

        <CCol xs={3}>
        <CFormInput type="text" className="mb-3"  size="lg" label='Loyality Point' name='loyality' placeholder="Loyality Point" />
        </CCol>
        
        <CCol xs={3}>
        <CButton  color="primary" className="me-md-2" size="lg"> Submit </CButton>
        </CCol>

        </CRow>          
        </CCardBody>
       
      </CCard>
    </CCol>
  </CRow>
    
    )

 }
 export default General;