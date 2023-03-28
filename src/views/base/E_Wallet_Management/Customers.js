import React from "react";
import { 
    CCard, CCardBody,CCardHeader,
    CCol, CRow,CFormInput, CFormSelect,
  } from '@coreui/react';
function Customers()
{
    return (
        <div>
        <CRow>
        <CCol xs={12}>
        <CCard className="mb-12">
        <CCardHeader>
        <strong>Customers</strong>
        </CCardHeader>
        <CCardBody className="mb-12">
        <CRow>
        <CCol xs={1}>
        <CFormInput type='text' name="S.No." label="S.No." className="mb-3" size="lg" />
        </CCol>
        <CCol xs={3}>
        <CFormInput type='text' name="Coustomer Name" label="Coustomer Namee" className="mb-3" size="lg" />
        </CCol>
        <CCol xs={2}>
        <CFormInput type='text' name="Wallet Balance" label="Wallet Balance" className="mb-3" size="lg" />
        </CCol>
        <CCol xs={3}>
        <CFormSelect label="Country" className="mb-3" name="Country"  size='lg'>
        <option >Country</option>
        <option value="1">A</option>
        <option value="0">D</option>
        <option value="0">L</option>
        <option value="0">J</option>
        </CFormSelect>
        </CCol>
        <CCol xs={3}>
        <CFormSelect label="Action" className="mb-3" name="Action"  size='lg'>
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
export default Customers