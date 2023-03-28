import React from "react";
import { CCard, CCardBody,CRow,
    CCol,CCardHeader, 
    CFormInput, CFormSelect
  } from '@coreui/react'
function NewTickets(){
    return (
        <div>
        <CRow>
        <CCol xs={12}>
        <CCard className="mb-12">
        <CCardHeader>
        <strong>New Customer</strong>
        </CCardHeader>
        <CCardBody className="mb-12">
        <CRow>
        <CCol xs={4}>
        <CFormSelect name="Dispute Reason" size='lg' label="Dispute Reason">
            <option>select Dispute Reason</option>
            <option value="1">U</option>
            <option value="0">A</option>
            </CFormSelect>
        </CCol>
        <CCol xs={4}>
        <CFormSelect name="Merchant" size='lg' label="Merchant">
            <option>Select Merchant </option>
            <option value="1">U</option>
            <option value="0">A</option>
            </CFormSelect>
        </CCol>
        <CCol xs={4}>
        <CFormInput type ='number' name="Mobile Number" label="Mobile Number" className="mb-4" size="lg" />
        </CCol>
        </CRow>
        <CRow>
        <CCol xs={6}>
        <CFormSelect name="Order Number" size='lg' label="Order Number">
            <option>Select Order Number </option>
            <option value="1">US</option>
            <option value="0">Am</option>
          </CFormSelect>
        </CCol>
       
        <CCol xs={6}>
          <CFormSelect name="Status" size='lg' label="Status">
            <option>Select Status </option>
            <option value="1">Active</option>
            <option value="0">Deactive</option>
          </CFormSelect>
        </CCol>
         </CRow>
        </CCardBody>
        </CCard>
        </CCol>
        </CRow>
        </div>
      )
}
export default NewTickets