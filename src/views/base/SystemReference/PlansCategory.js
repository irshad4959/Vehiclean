import React from "react";
import { CCard, CCardBody,CRow,
    CCol,CCardHeader, 
    CFormInput, CFormSelect
 } from '@coreui/react';

function PlansCategory(){

        return(
            <div>
            <CRow>
            <CCol xs={12}>
            <CCard className="mb-12">
            <CCardHeader>New Plan</CCardHeader>
            <CCardBody className="mb-12">
            <CRow>
            <CCol xs={3}>
            <CFormSelect name="Country" size='lg' label="Country">
                <option>select givn Country </option>
                <option value="1">usa</option>
                <option value="0">australia</option>
                </CFormSelect>
            </CCol>
            <CCol xs={3}>
            <CFormInput name="Plan" label="Subscription Plans" className="mb-4" size="lg"/>
            </CCol>
            <CCol xs={3}>
            <CFormSelect name="Vehicle Type" size='lg' label="Vehicle Type">
                <option>Select Vehical type </option>
                <option >Disel</option>
                <option >Petrol</option>
                <option >Electric</option>
                </CFormSelect>
            </CCol>
            <CCol xs={3}>
            <CFormSelect name="Status" size='lg' label="Status">
                <option>select givn below </option>
                <option value="1">Active</option>
                <option value="0">DeActive</option>
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
export default PlansCategory