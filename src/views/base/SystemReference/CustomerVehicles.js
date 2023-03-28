import React from "react";
import { CCard, CCardBody, 
   CCardHeader, CCol, CRow, 
   CTable, 
   CTableBody,
   CTableDataCell,
   CTableHead,
   CTableHeaderCell,
   CTableRow,

} from '@coreui/react';


function CustomerVehicles(){

     return(
        <div>
        <CRow>
        <CCol xs={12}>
        <CCard className="mb-12">
        <CCardHeader>
        <strong> Customer Vehicles</strong>
        </CCardHeader>
        <CCardBody>
        <CRow>
        <CTable bordered>
         <CTableHead>
         <CTableRow>
         <CTableHeaderCell>S.NO.</CTableHeaderCell>
         <CTableHeaderCell>Customer Name</CTableHeaderCell>
         <CTableHeaderCell>Society Name</CTableHeaderCell>
         <CTableHeaderCell>Vehicle Type</CTableHeaderCell>
         <CTableHeaderCell>Vehicle Name</CTableHeaderCell>
         <CTableHeaderCell>Vehicle Numnber</CTableHeaderCell>
         <CTableHeaderCell>Vehicle color</CTableHeaderCell>
         <CTableHeaderCell>Start Date</CTableHeaderCell>
         <CTableHeaderCell>Service Duration</CTableHeaderCell>
         <CTableHeaderCell>End Date</CTableHeaderCell>
         <CTableHeaderCell>Remark</CTableHeaderCell>
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
         <CTableDataCell>3 month</CTableDataCell>
         <CTableDataCell>10/12/2030</CTableDataCell>
         <CTableDataCell>Good</CTableDataCell>
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
export default CustomerVehicles