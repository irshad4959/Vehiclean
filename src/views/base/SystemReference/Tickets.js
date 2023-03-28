import React from "react";
import { 
    CCard, CCardBody,CCardHeader,
    CCol, CRow,CTable,CTableBody,
    CTableDataCell,CTableHead,CButton,
    CTableHeaderCell,CTableRow,
 } from '@coreui/react';
import { useNavigate } from "react-router-dom";

function Tickets()
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
        <strong>Tickets</strong>
        </CCol>
        <CCol xs={2}>
        <CButton className="d-grid gap-2 d-md-flex justify-content-md-end"
         onClick={()=>navigate('/base/SystemReference/NewTickets')}>Create Reason</CButton>
        </CCol>
        </CRow>
        </CCardHeader>
        <CCardBody>
        <CRow>
        <CTable bordered>
         <CTableHead>
         <CTableRow>
         <CTableHeaderCell>S.NO.</CTableHeaderCell>
         <CTableHeaderCell>Ticket Id</CTableHeaderCell>
         <CTableHeaderCell>Ticket Description</CTableHeaderCell>
         <CTableHeaderCell>Merchant Name</CTableHeaderCell>
         <CTableHeaderCell>Order Number</CTableHeaderCell>
         <CTableHeaderCell>Status</CTableHeaderCell>
         </CTableRow>
         </CTableHead>  
         <CTableBody>
         <CTableRow>
         <CTableDataCell>1</CTableDataCell>
         <CTableDataCell>fight</CTableDataCell>
         <CTableDataCell>Active</CTableDataCell>
         <CTableDataCell>D</CTableDataCell>
         <CTableDataCell>De</CTableDataCell>
         <CTableDataCell>Dte</CTableDataCell>
         </CTableRow>
          </CTableBody>      
        </CTable>
        </CRow>
        </CCardBody>
        </CCard>
        </CCol>
        </CRow>
        </div>
    )
}
export default Tickets