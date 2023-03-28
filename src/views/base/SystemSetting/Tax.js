import React from "react";
import {
    CTable,CTableHead,CTableHeaderCell,
    CTableRow,CTableDataCell,CTableBody,
     CRow, CCol, CCard, CCardHeader, CButton,
     } from '@coreui/react';
import { useNavigate } from "react-router-dom";

function Tax()
{
    const navigate = useNavigate();
    return(
        <div>
        <CRow>
        <CCol xs={12}>
        <CCard className="mb-12">   
        <CCardHeader>
        <CRow>
        <CCol xs={10}>       
        <strong>Tax</strong>
        </CCol>
          <CCol xs={2}>
          <CButton className="d-grid gap-2 d-md-flex justify-content-md-end"
           onClick={()=>navigate ('/base/SystemSetting/NewTax')}>Add New Tax</CButton>
          </CCol>
          </CRow>
        </CCardHeader>    
        <CTable>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">S.No.</CTableHeaderCell>
      <CTableHeaderCell scope="col">Country</CTableHeaderCell>
      <CTableHeaderCell scope="col">State</CTableHeaderCell>
      <CTableHeaderCell scope="col">tax </CTableHeaderCell>
      <CTableHeaderCell scope="col">Action</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell scope="row">1</CTableHeaderCell>
      <CTableDataCell>Mark</CTableDataCell>
      <CTableDataCell>Otto</CTableDataCell>
      <CTableDataCell>@mdo</CTableDataCell>
      <CTableDataCell>a</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell scope="row">2</CTableHeaderCell>
      <CTableDataCell>Jacob</CTableDataCell>
      <CTableDataCell>Thornton</CTableDataCell>
      <CTableDataCell>Thornton</CTableDataCell>
      <CTableDataCell>qa</CTableDataCell>
    </CTableRow>
    <CTableRow>
      <CTableHeaderCell >3</CTableHeaderCell>
      <CTableDataCell >Larry the Bird</CTableDataCell>
      <CTableDataCell>@twitter</CTableDataCell>
      <CTableDataCell>@tr</CTableDataCell>
      <CTableDataCell>@t</CTableDataCell>
    </CTableRow>
  </CTableBody>
        </CTable>
        </CCard>
        </CCol>
        </CRow>
        
        </div>
    )
}
export default Tax