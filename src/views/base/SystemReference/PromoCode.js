import React from "react";
import { 
    CCard, CCardBody,CCardHeader,
    CCol, CRow,CTable,CTableBody,
    CTableDataCell,CTableHead,CButton,
    CTableHeaderCell,CTableRow,
 
 } from '@coreui/react';
import { useNavigate } from "react-router-dom";
function PromoCode(){
    const navigate = useNavigate();
    return(
        <div>
        <CRow>
        <CCol xs={12}>
        <CCard className="mb-12">
        <CCardHeader>
        <CRow>
        <CCol xs={10}>
        <strong>Promo Code </strong>
        </CCol>
        <CCol xs={2}>
        <CButton className="d-grid gap-2 d-md-flex justify-content-md-end"
         onClick={()=>navigate('/base/SystemReference/NewPromoCode')}>Add New PromoCode</CButton>
        </CCol>
        </CRow>
        </CCardHeader>
        <CCardBody>
        <CRow>
        <CTable bordered>
         <CTableHead>
         <CTableRow>
         <CTableHeaderCell>S.NO.</CTableHeaderCell>
         <CTableHeaderCell>Country </CTableHeaderCell>
         <CTableHeaderCell>State </CTableHeaderCell>
         <CTableHeaderCell>City</CTableHeaderCell>
         <CTableHeaderCell>PromoCode</CTableHeaderCell>
         <CTableHeaderCell>Image</CTableHeaderCell>
         <CTableHeaderCell>Percentage</CTableHeaderCell>
         <CTableHeaderCell>Max Amount</CTableHeaderCell>
         <CTableHeaderCell>Expiration Date</CTableHeaderCell>
         <CTableHeaderCell>Status</CTableHeaderCell>
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
export default PromoCode