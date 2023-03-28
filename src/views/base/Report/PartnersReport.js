import React from 'react'
import{
  CTable,CTableHead,CTableRow,
  CTableHeaderCell,CTableBody,
  CTableDataCell,CFormSelect, 
  CCard, CCardBody,

} from  '@coreui/react'
function PartnersReport(){
  return (
    <div>
    <CCard>
    <CCardBody>
    <CTable bordered>
<CTableHead>
<CTableRow>
  <CTableHeaderCell>
  <CFormSelect >
  <option>S.No.</option> 
  <option></option>
  </CFormSelect>
  </CTableHeaderCell>
  <CTableHeaderCell>
  <CFormSelect id='img'>
  <option>Partner Profile</option>
  <option></option>
  </CFormSelect>
  </CTableHeaderCell>
  <CTableHeaderCell> 
  <CFormSelect id='Category' >
  <option>Partner Category</option>
  <option></option>
  </CFormSelect>
  </CTableHeaderCell>
  <CTableHeaderCell> 
  <CFormSelect id='Email Id'>
  <option>Email Id</option>
  <option></option>
  </CFormSelect>
  </CTableHeaderCell>
  <CTableHeaderCell> 
  <CFormSelect id='MobNum' >
  <option>Mobile Number</option>
  <option></option>
  </CFormSelect>
  </CTableHeaderCell>
  <CTableHeaderCell>
  <CFormSelect id='Addr'>
  <option>Address</option>
  <option></option>
  </CFormSelect>
  </CTableHeaderCell>
  <CTableHeaderCell> 
  <CFormSelect id='country' >
  <option>Country</option>
  <option></option>
  </CFormSelect>
  </CTableHeaderCell>
  <CTableHeaderCell>
  <CFormSelect id='state' >
  <option>State</option>
  <option></option>
  </CFormSelect>
  </CTableHeaderCell>
  <CTableHeaderCell>
  <CFormSelect id='City' >
  <option>City</option>
  <option></option>
  </CFormSelect>
  </CTableHeaderCell>
  <CTableHeaderCell>
  <CFormSelect id='Salery'>
  <option>Salery</option>
  <option></option>
  </CFormSelect>
  </CTableHeaderCell>
  <CTableHeaderCell>
  <CFormSelect id='Kyc'>
  <option>KYC Document</option>
  <option></option>
  </CFormSelect>
  </CTableHeaderCell>
  <CTableHeaderCell>
  <CFormSelect id='Bank'>
  <option>Bank Details</option>
  <option></option>
  </CFormSelect>
  </CTableHeaderCell>
  <CTableHeaderCell>
  <CFormSelect id='stu' >
  <option>Status</option>
  <option></option>
  </CFormSelect>
  </CTableHeaderCell>
  <CTableHeaderCell>
  <CFormSelect id='Act'>
  <option>Action</option>
  <option>Edit</option>
  <option>Delete</option>
  </CFormSelect>
  </CTableHeaderCell>
</CTableRow>
</CTableHead>
<CTableBody>
<CTableRow>
  <CTableHeaderCell>1</CTableHeaderCell>
  <CTableDataCell>Pic</CTableDataCell>
  <CTableDataCell>Disel Cleaner</CTableDataCell>
  <CTableDataCell>Anthem@gmail.com</CTableDataCell>
  <CTableDataCell>+1235648</CTableDataCell>
  <CTableDataCell>Malpur</CTableDataCell>
  <CTableDataCell>IN</CTableDataCell>
  <CTableDataCell>Raj</CTableDataCell>
  <CTableDataCell>Jaipur</CTableDataCell>
  <CTableDataCell>35000</CTableDataCell>
  <CTableDataCell>Adhar Pan</CTableDataCell>
  <CTableDataCell>asdffd</CTableDataCell>
  <CTableDataCell>active</CTableDataCell>
  <CTableDataCell>Deleted</CTableDataCell>
</CTableRow>
</CTableBody>
  </CTable>
  </CCardBody>
  </CCard>
</div>
  )
}

export default PartnersReport
