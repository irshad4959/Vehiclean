import React from "react";
import { CCard, CCardBody,CRow,
    CCol,CCardHeader, 
    CFormInput, CFormSelect
  } from '@coreui/react'

function NewNotification(){
    return(
        <div>
        <CRow>
        <CCol xs={12}>
        <CCard className="mb-12">
        <CCardHeader>New Promo Code</CCardHeader>
        <CCardBody className="mb-12">
        <CRow>
        <CCol xs={4}>
        <CFormInput type="text" size="lg" label="Title" name="Title"/>
        </CCol>
        <CCol xs={4}>
        <CFormInput type="text" size="lg" label="Description" name="Description"/>
        </CCol>
        <CCol xs={4}>
        <CFormInput type="file" size="lg" label="Image" name="Image"/>
        </CCol>
        </CRow>
        </CCardBody>
        </CCard>
        </CCol>
        </CRow>
        </div>
    )
}
export default NewNotification