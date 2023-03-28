import React from 'react'
import{
  CTable,CTableHead,CTableRow,
  CTableHeaderCell,CTableBody,
  CTableDataCell,CFormSelect, 
  CCard, CCardBody,
} from  '@coreui/react'
function TicketsReport()
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
      <option>Ticket Id</option>
      <option></option>
      </CFormSelect>
      </CTableHeaderCell>
      <CTableHeaderCell> 
      <CFormSelect >
      <option>Dispute Type</option>
      <option></option>
      </CFormSelect></CTableHeaderCell>
      <CTableHeaderCell> 
      <CFormSelect >
      <option>Ticket Description</option>
      <option></option>
      </CFormSelect></CTableHeaderCell>
      <CTableHeaderCell> 
      <CFormSelect >
      <option>Merchant Name</option>
      <option></option>
      </CFormSelect></CTableHeaderCell>
      <CTableHeaderCell> 
      <CFormSelect >
      <option>Order Number</option>
      <option></option>
      </CFormSelect>
      </CTableHeaderCell>
            <CTableHeaderCell>
      <CFormSelect >
      <option>Status</option>
      <option>edit</option>
      <option>Delete</option>
      </CFormSelect>
      </CTableHeaderCell>
    </CTableRow>
    </CTableHead>
    <CTableBody>
    <CTableRow>
      <CTableHeaderCell>1</CTableHeaderCell>
      <CTableDataCell>10210</CTableDataCell>
      <CTableDataCell>Not Clean</CTableDataCell>
      <CTableDataCell>ID 126215</CTableDataCell>
      <CTableDataCell>Anthem</CTableDataCell>
      <CTableDataCell>123504</CTableDataCell>
      <CTableDataCell>Edit</CTableDataCell>
    
    </CTableRow>
    </CTableBody>
      </CTable>
      </CCardBody>
      </CCard>
    </div>
)
}

export default  TicketsReport
