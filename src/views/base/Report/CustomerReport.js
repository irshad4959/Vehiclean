import React from "react";
import{
  CTable,CTableHead,CTableRow,CTableHeaderCell,
  CTableBody,CTableDataCell,CFormSelect, CCard, CCardBody,

} from  '@coreui/react'

function CustomerReport()
  {
    return(
        <div>
        <CCard>
        <CCardBody>
        <CTable bordered>
  <CTableHead>
    <CTableRow>
        <CTableHeaderCell>
      <CFormSelect >
      <option>Profile Pic</option>
      <option></option>
      </CFormSelect>
      </CTableHeaderCell>
      <CTableHeaderCell> <CFormSelect >
      <option>Name</option>
      <option></option>
      </CFormSelect></CTableHeaderCell>
      <CTableHeaderCell> <CFormSelect >
      <option>Email</option>
      <option></option>
      </CFormSelect></CTableHeaderCell>
      <CTableHeaderCell> 
      <CFormSelect >
      <option>Mobile Number</option>
      <option></option>
      </CFormSelect>
      </CTableHeaderCell>
      <CTableHeaderCell>
      <CFormSelect >
      <option>Flat No/Villa No</option>
      <option></option></CFormSelect>
      </CTableHeaderCell>
      <CTableHeaderCell> 
      <CFormSelect >
      <option>Parking Slot</option>
      <option></option></CFormSelect>
      </CTableHeaderCell>
      <CTableHeaderCell>
      <CFormSelect >
      <option>Status</option>
      <option></option>
      </CFormSelect>
      </CTableHeaderCell>
      <CTableHeaderCell>
      <CFormSelect >
      <option>Action</option>
      <option></option>
      </CFormSelect>
      </CTableHeaderCell>
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableDataCell>Pic</CTableDataCell>
      <CTableDataCell>Anthem</CTableDataCell>
      <CTableDataCell>Anthem@gmail.com</CTableDataCell>
      <CTableDataCell>+1235648</CTableDataCell>
      <CTableDataCell>v126</CTableDataCell>
      <CTableDataCell>VR126</CTableDataCell>
      <CTableDataCell>Good</CTableDataCell>
      <CTableDataCell>Active</CTableDataCell>
    </CTableRow>
    </CTableBody>
      </CTable>
      </CCardBody>
      </CCard>
    </div>
  )
}
export default CustomerReport