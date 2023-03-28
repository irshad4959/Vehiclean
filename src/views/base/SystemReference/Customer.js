import React from 'react';
import{
      CTable,CTableHead,CTableRow,CTableHeaderCell,
      CTableBody,CButton,CTableDataCell,CRow,CCol,
      CCard, CCardHeader,

} from  '@coreui/react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function Customer(){

  const navigate = useNavigate();  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const Profile = searchParams.get('Profile');
  const Name = searchParams.get('Name');
  const Email = searchParams.get('Email');
  const MobileNumber = searchParams.get('MobileNumber');
  const SocietyName = searchParams.get('SocietyName'); // corrected
  const FlatNoOrVillaNo = searchParams.get('FlatNoOrVillaNo');
  const ParkingSlot = searchParams.get('ParkingSlot');

  return (
    <div>
    <CRow>
    <CCol xs={12}>
      <CCard className="mb-12">
      <CCardHeader>
      <CRow>
      <CCol xs={10}>       
      <strong><h3>Customer</h3></strong>
      </CCol>
        <CCol xs={2}>
        <CButton className="d-grid gap-2 d-md-flex justify-content-md-end"
         onClick={()=>navigate('/base/SystemReference/NewCustomer')}>Add New Customer</CButton>
        </CCol>
        </CRow>
      </CCardHeader>
    <CTable bordered>
  <CTableHead>
    <CTableRow>
      <CTableHeaderCell scope="col">S.No.</CTableHeaderCell>
      <CTableHeaderCell scope="col">Profile PiC</CTableHeaderCell>
      <CTableHeaderCell scope="col">Name</CTableHeaderCell>
      <CTableHeaderCell scope="col">Email</CTableHeaderCell>
      <CTableHeaderCell scope="col">Mobile Number</CTableHeaderCell>
      <CTableHeaderCell scope="col">Society Name</CTableHeaderCell>
      <CTableHeaderCell scope="col">Flat No/Villa No</CTableHeaderCell>
      <CTableHeaderCell scope="col">Parking Slot</CTableHeaderCell>
      <CTableHeaderCell scope="col">Status</CTableHeaderCell>
      <CTableHeaderCell scope="col">Action</CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
    <CTableHeaderCell scope="row">1</CTableHeaderCell>
    <CTableDataCell>{Profile}</CTableDataCell>
    <CTableDataCell>{Name}</CTableDataCell>
    <CTableDataCell>{Email}</CTableDataCell>
    <CTableDataCell>{MobileNumber}</CTableDataCell>
    <CTableDataCell>{SocietyName}</CTableDataCell> {/* corrected */}
    <CTableDataCell>{FlatNoOrVillaNo}</CTableDataCell>
    <CTableDataCell>{ParkingSlot}</CTableDataCell>
    </CTableRow>
  </CTableBody>
      </CTable>
      </CCard> 
      </CCol>
      </CRow>
    </div>
  )
}

export default Customer
