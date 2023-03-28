import React from "react";
import { 
    CCard, CCardBody,CCardHeader,
    CCol, CRow,CFormInput,CFormSelect,
  } from '@coreui/react';
function NewPayout(){
    return (
        <div>
        <CRow>
        <CCol xs={12}>
        <CCard className="mb-12">
        <CCardHeader>New Payout</CCardHeader>
        <CCardBody className="mb-12">
        <CRow>
        <CCol xs={3}>
        <CFormInput type='text' name="S.No." label="Partner Name" className="mb-2" size="lg" />
        </CCol>
        <CCol xs={3}>
        <CFormInput type='number' name="Name" label="Payout Amount" className="mb-5" size="lg" />
        </CCol>
        <CCol xs={3}>
            <CFormSelect label="Status" className="mb-3" name="Status" size='lg' >
            <option >Status</option>
            <option value="1">Active</option>
            <option value="0">Deactive</option>
            </CFormSelect>
            </CCol>
        <CCol xs={3}>
        <CFormInput type='text' name="Role" label="Transcation Id" className="mb-5" size="lg" />
        </CCol>
        </CRow>
        <CRow>
        <CCol xs={4}>
        <CFormInput type="month" className="mb-4" size="lg" label="Transcation Month"/>
        </CCol>
        <CCol xs={4}>
        <CFormInput type="time" className="mb-4" size="lg" label="Transcation Time"/>
        </CCol>
        <CCol xs={4}>
            <CFormSelect label="Action" className="mb-3" name="Status" size='lg' >
            <option >Action</option>
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
export default NewPayout