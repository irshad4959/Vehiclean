import React from "react";
import {
    CCard,CCardBody,
    CCardHeader,CCol,CButton,
    CRow,CFormInput, CFormSelect,
  } from '@coreui/react'

function PaymentSetting(){
    return(
        <div className="container">
        <CRow>
        <CCol xs={12}>
        <CCard className="mb-12">
        <CCardHeader> 
        <strong>Payment Setting</strong>
        </CCardHeader>
        <CCardBody className="mb-12" size="sm">
        <CRow>
        <CCol xs={5}>
        <CFormInput type="text" name="RozerPaySecretKey"  label="RozerPaySecretKey" size="lg" placeholder="RozerPaySecretKey"/>
        </CCol>
        <CCol xs={5}>
        <CFormInput type="text" name="RozerPayPublishKey"  label="RozerPayPublishKey" size="lg" placeholder="RozerPayPublishKey"/>
        </CCol>
        <CCol xs={2}>
        <CButton color="primary" className="me-md-2" size="lg"> Submit </CButton>
        </CCol>
        </CRow>
        </CCardBody>
        </CCard>
        </CCol>
        </CRow>
        </div>
    )
}
export default PaymentSetting