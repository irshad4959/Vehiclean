import React from "react";
import{
    CTable,CTableHead,CTableRow,
    CTableHeaderCell,CTableBody,
    CTableDataCell,CFormSelect, 
    CCard, CCardBody,
  
  } from  '@coreui/react'
function NotificationReport()
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
      <option>S.No.</option> 
      <option></option>
      </CFormSelect>
      </CTableHeaderCell>
      <CTableHeaderCell>
      <CFormSelect >
      <option>Title</option>
      <option></option>
      </CFormSelect>
      </CTableHeaderCell>
      <CTableHeaderCell> <CFormSelect >
      <option>Description</option>
      <option></option>
      </CFormSelect></CTableHeaderCell>
            <CTableHeaderCell>
      <CFormSelect >
      <option>img</option>
      <option></option>
      </CFormSelect>
      </CTableHeaderCell>
      
    </CTableRow>
  </CTableHead>
  <CTableBody>
    <CTableRow>
      <CTableHeaderCell>1</CTableHeaderCell>
      <CTableDataCell>Pic</CTableDataCell>
      <CTableDataCell>Anthem</CTableDataCell>
      <CTableDataCell>Anthem@gmail.com</CTableDataCell>
     
    </CTableRow>
    </CTableBody>
      </CTable>
      </CCardBody>
      </CCard>
    </div>
  )
}
export default NotificationReport