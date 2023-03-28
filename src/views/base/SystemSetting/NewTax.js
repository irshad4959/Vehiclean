import React from "react";
import { CCard, CCardBody,CRow,
    CCol,CCardHeader, 
    CFormInput, CFormSelect
 } from '@coreui/react';

function NewTax()
{
    return(
        <div>
        
            <div>
            <CRow>
            <CCol xs={12}>
            <CCard className="mb-12">
            <CCardHeader>New Taxes</CCardHeader>
            <CCardBody className="mb-12">
            <CRow>
            <CCol xs={4}>
            <CFormSelect name="Country" size='lg' label="Country">
                <option>select givn Country </option>
                <option value="1">usa</option>
                <option value="0">australia</option>
                </CFormSelect>
            </CCol>
            <CCol xs={4}>
            <CFormInput name="State" label="State" className="mb-4" size="lg"></CFormInput>
            </CCol>
            <CCol xs={4}>
            <CFormInput name="Tax" label="Tax" className="mb-4" size="lg"></CFormInput>
            </CCol>
            </CRow>
            </CCardBody>
            </CCard>
            </CCol>
            </CRow>
            </div>
        </div>
    )
}
export default NewTax
