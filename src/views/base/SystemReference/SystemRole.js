import React from "react";
import { 
    CCard, CCardBody,CCardHeader,
    CCol, CRow,CFormInput,
 } from '@coreui/react';
function SystemRole()
{
    return (
        <div>
        <CRow>
        <CCol xs={12}>
        <CCard className="mb-12">
        <CCardHeader><strong>System Role</strong></CCardHeader>
        <CCardBody className="mb-12">
        <CRow>
        <CCol xs={2}>
        <CFormInput type='text' name="S.No." label="S.NO." className="mb-2" size="lg" />
        </CCol>
        <CCol xs={5}>
        <CFormInput type='text' name="Role" label="Role" className="mb-5" size="lg" />
        </CCol>
        <CCol xs={5}>
        <CFormInput type='text' name="Action" label="Action" className="mb-5" size="lg" />
        </CCol>
        </CRow>
        </CCardBody>
        </CCard>
        </CCol>
        </CRow>
        </div>
      )
}
export default SystemRole
