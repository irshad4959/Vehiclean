import React from "react";
import{
    CTable,CTableHead,CTableRow,
    CTableHeaderCell,CTableBody,
    CButton,CTableDataCell,CRow,
    CCol,CCard, CCardHeader,
  
  } from  '@coreui/react'
import { useNavigate } from "react-router-dom";

function VehicleCatalogs()
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
          <strong><h3>Vehiclean CataLog</h3></strong>
          </CCol>
            <CCol xs={2}>
            <CButton className="d-grid gap-2 d-md-flex justify-content-md-end"
             onClick={()=>navigate('/base/SystemReference/NewCatalog')}>Add New Catalog</CButton>
            </CCol>
            </CRow>
          </CCardHeader>
        <CTable bordered>
      <CTableHead>
        <CTableRow>
          <CTableHeaderCell scope="col">S.No.</CTableHeaderCell>
          <CTableHeaderCell scope="col">Type Icon</CTableHeaderCell>
          <CTableHeaderCell scope="col">Type Name</CTableHeaderCell>
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
export default VehicleCatalogs