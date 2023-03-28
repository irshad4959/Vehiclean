import React from "react";
import { CCard, CCardBody,CRow,
    CCol,CCardHeader, 
    CFormInput, CFormSelect
 } from '@coreui/react';

function NewCity(){

    return(
        <div>
        return(
            <div>
            <CRow>
            <CCol xs={12}>
            <CCard className="mb-12">
            <CCardHeader>New States</CCardHeader>
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
            <CFormInput name="State" label="State" className="mb-4" size="lg"></CFormInput>
            </CCol>
            <CCol xs={3}>
            <CFormInput name="City" label="City" className="mb-4" size="lg"></CFormInput>
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
        </div>
    )
}

export default NewCity  