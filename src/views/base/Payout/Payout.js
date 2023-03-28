import React from "react";
import { CCard, CCardBody, 
    CCardHeader, CCol, CRow, 
    CTable, 
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,CButton ,
 
 } from '@coreui/react';
import { useNavigate } from "react-router-dom";
 
function Partners()
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
        <strong><h3>Payout</h3></strong>
        </CCol>
          <CCol xs={2}>
          <CButton className="d-grid gap-2 d-md-flex justify-content-md-end"
           onClick={()=>navigate('/base/Payout/NewPayout')}>Create New Payout</CButton>
          </CCol>
          </CRow>
        </CCardHeader>
        <CCardBody>
        <CRow>
        <CTable bordered>
         <CTableHead>
         <CTableRow>
         <CTableHeaderCell>S.No.</CTableHeaderCell>
         <CTableHeaderCell>Partner Name</CTableHeaderCell>
         <CTableHeaderCell>Payout Amount</CTableHeaderCell>
         <CTableHeaderCell>Status</CTableHeaderCell>
         <CTableHeaderCell>Transcation Id</CTableHeaderCell>
         <CTableHeaderCell>Transcation Month</CTableHeaderCell>
         <CTableHeaderCell>Transcation Time</CTableHeaderCell>
         <CTableHeaderCell>Action</CTableHeaderCell>
         </CTableRow>
         </CTableHead>  
         <CTableBody>
         <CTableRow>
         <CTableDataCell>1</CTableDataCell>
         <CTableDataCell>jamess</CTableDataCell>
         <CTableDataCell>Ashiyana</CTableDataCell>
         <CTableDataCell>Disel</CTableDataCell>
         <CTableDataCell>Toyata</CTableDataCell>
         <CTableDataCell>Rj31PA3986</CTableDataCell>
         <CTableDataCell>Aura</CTableDataCell>
         <CTableDataCell>10/12/2021</CTableDataCell>
         </CTableRow>
         <CTableRow>
         <CTableDataCell>A</CTableDataCell>
         <CTableDataCell>B</CTableDataCell>
         <CTableDataCell>c</CTableDataCell>
         <CTableDataCell>d</CTableDataCell>
         <CTableDataCell>e</CTableDataCell>
         <CTableDataCell>g</CTableDataCell>
         <CTableDataCell>h</CTableDataCell>
         </CTableRow>
         <CTableRow>
         <CTableDataCell>D</CTableDataCell>
         <CTableDataCell>E</CTableDataCell>
         <CTableDataCell>F</CTableDataCell>
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
export default Partners