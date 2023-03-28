import React from 'react';
import{
  CTable,CTableHead,CTableRow,
  CTableHeaderCell,CTableBody,CButton,
  CTableDataCell,CRow,CCol,CCard, CCardHeader,

} from  '@coreui/react'
import { useNavigate } from 'react-router-dom';

function VehiCleanPartners(){
  const navigate = useNavigate();
  return (
      <div>
      <CRow>
      <CCol xs={12}>
        <CCard className="mb-12">
        <CCardHeader>
        <CRow>
        <CCol xs={10}>       
        <strong><h3>Vehiclean Partner</h3></strong>
        </CCol>
          <CCol xs={2}>
          <CButton className="d-grid gap-2 d-md-flex justify-content-md-end"
           onClick={()=>navigate('/base/SystemReference/NewPartners')}>Add New Partner</CButton>
          </CCol>
          </CRow>
        </CCardHeader>
      <CTable bordered>
    <CTableHead>
      <CTableRow>
        <CTableHeaderCell scope="col">S.No.</CTableHeaderCell>
        <CTableHeaderCell scope="col">Partner Profile</CTableHeaderCell>
        <CTableHeaderCell scope="col">Partner Category</CTableHeaderCell>
        <CTableHeaderCell scope="col">Email Id</CTableHeaderCell>
        <CTableHeaderCell scope="col">Mobile Number</CTableHeaderCell>
        <CTableHeaderCell scope="col">Address</CTableHeaderCell>
        <CTableHeaderCell scope="col">Country</CTableHeaderCell>
        <CTableHeaderCell scope="col">State</CTableHeaderCell>
        <CTableHeaderCell scope="col">City</CTableHeaderCell>
        <CTableHeaderCell scope="col">Salary</CTableHeaderCell>
        <CTableHeaderCell scope="col">KYC Document</CTableHeaderCell>
        <CTableHeaderCell scope="col">Bank Details</CTableHeaderCell>
        <CTableHeaderCell scope="col">Status</CTableHeaderCell>
        <CTableHeaderCell scope="col">Action</CTableHeaderCell>
      </CTableRow>
    </CTableHead>
    <CTableBody>
      <CTableRow active>
        <CTableHeaderCell scope="row">1</CTableHeaderCell>
        <CTableDataCell>Mark</CTableDataCell>
        <CTableDataCell>Otto</CTableDataCell>
        <CTableDataCell>@mdo</CTableDataCell>
      </CTableRow>
      <CTableRow>
        <CTableHeaderCell scope="row">2</CTableHeaderCell>
        <CTableDataCell>Jacob</CTableDataCell>
        <CTableDataCell>Thornton</CTableDataCell>
        <CTableDataCell>@fat</CTableDataCell>
      </CTableRow>
      <CTableRow>
        <CTableHeaderCell scope="row">3</CTableHeaderCell>
        <CTableDataCell>
          Larry the Bird
        </CTableDataCell>
        <CTableDataCell>@twitter</CTableDataCell>
      </CTableRow>
    </CTableBody>
        </CTable>
        </CCard> 
        </CCol>
        </CRow>
      </div>
  )
}

export default VehiCleanPartners
