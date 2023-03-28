import React from "react";
import { 
    CCard, CCardBody,CCardHeader,
    CCol, CRow,CFormInput, CFormSelect,
  } from '@coreui/react';
function Merchants()
{
    return (
        <div>
        <CRow>
        <CCol xs={12}>
        <CCard className="mb-12">
        <CCardHeader>
        <strong>Merchants</strong>
        </CCardHeader>
        <CCardBody className="mb-12">
        <CRow>
        <CCol xs={3}>
        <CFormInput type='text' name="S.No." label="S.No." className="mb-3" size="lg" />
        </CCol>
        <CCol xs={3}>
        <CFormInput type='text' name="Name" label="Name" className="mb-3" size="lg" />
        </CCol>
        <CCol xs={3}>
        <CFormInput type='text' name="Role" label="Role" className="mb-3" size="lg" />
        </CCol>
        <CCol xs={3}>
        <CFormSelect label="Status" className="mb-3" name="Status"  size='lg'>
        <option >Status</option>
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
export default Merchants