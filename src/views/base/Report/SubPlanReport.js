import React from 'react';
import{
    CTable,CTableHead,CTableRow,
    CTableHeaderCell,CTableBody,
    CTableDataCell,CFormSelect, 
    CCard, CCardBody,
  } from  '@coreui/react'
function SubPlanReport()
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
      <option>Type Icon</option>
      <option></option>
      </CFormSelect>
      </CTableHeaderCell>
      <CTableHeaderCell> <CFormSelect >
      <option>Type Name</option>
      <option></option>
      </CFormSelect></CTableHeaderCell>
            <CTableHeaderCell>
      <CFormSelect >
      <option>Status</option>
      <option></option>
      </CFormSelect>
      </CTableHeaderCell>
      <CTableHeaderCell>
      <CFormSelect >
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
      <CTableDataCell>Anthem</CTableDataCell>
      <CTableDataCell>Anthem@gmail.com</CTableDataCell>
      <CTableDataCell>+1235648</CTableDataCell>
     
    </CTableRow>
    </CTableBody>
      </CTable>
      </CCardBody>
      </CCard>
    </div>
  )
}
export default SubPlanReport