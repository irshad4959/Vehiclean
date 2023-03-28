import React from "react";
import { CCard, CCardBody,CRow,
    CCol,CCardHeader, 
    CFormInput, CFormSelect
  } from '@coreui/react'

function NewDisputeReason(){
    return(
        <div>
        <CRow>
        <CCol xs={12}>
        <CCard className="mb-12">
        <CCardHeader>New Category</CCardHeader>
        <CCardBody className="mb-12">
        <CRow>
        <CCol xs={6}>
        <CFormInput type="text" size="lg" label="Description" name="Description"/>
        </CCol>
        <CCol xs={6}>
        <CFormSelect name="Status" label="Status">
        <option > select given below</option>
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
export default NewDisputeReason