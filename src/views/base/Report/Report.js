import React from 'react'
import {
    CCard,CCardHeader,
    CCol,CRow,CButton,
    CNavbar,
    
  } from '@coreui/react'
import { useNavigate } from 'react-router-dom';

function SystemSetting(){
        const navigate= useNavigate();

    return(
        <CRow>
        <CCol xs={12}>
            <CCard>
            <CCardHeader>
              <strong>Report</strong>
              </CCardHeader>
              <CNavbar className="bg-warning">

              <CButton type="button" size='sm' color="info" shape="rounded-pill" variant="ghost" className="m-1" onClick={()=>navigate('/base/Report/CustomerReport')}>
                <strong>Customer Report</strong>
               </CButton>
               
                <CButton type="button" size='sm' color="info" shape="rounded-pill"  variant="ghost" className="me-1" onClick={()=>navigate('/base/Report/PartnersReport')}>
                <strong>Partners Report</strong>
                </CButton>
                
                <CButton type="button" size='sm' color="info"  shape="rounded-pill" variant="ghost" className="me-1" onClick={()=>navigate('/base/Report/VehicleReport')}>
                <strong>Vehicle Report</strong>
                </CButton>
                
                <CButton type="button" size='sm' color="info" shape="rounded-pill"  variant="ghost" className="me-1" onClick={()=>navigate('/base/Report/OrderReport')}>
                <strong>Order Report</strong>
                </CButton>
               
                <CButton type="button" size='sm' color="info" shape="rounded-pill" variant="ghost" className="me-1" onClick={()=>navigate('/base/Report/SubPlanReport')}>
                <strong>Sub Plan Report</strong>
                </CButton>
                
                <CButton type="button" size='sm' color="info" shape="rounded-pill" variant="ghost" className="me-1" onClick={()=>navigate('/base/Report/NotificationReport')}>
                <strong>Notification Report</strong>
                </CButton>
                
                <CButton type="button" size='sm' color="info" shape="rounded-pill" variant="ghost" className="me-1" onClick={()=>navigate('/base/Report/DisputeReasonReport')}>
                <strong>Dispute Reason Report</strong>
                </CButton>
               
                <CButton type="button" size='sm' color="info" shape="rounded-pill"  variant="ghost" className="me-1" onClick={()=>navigate('/base/Report/TicketsReport')}>
                <strong>Tickets Report</strong>
                </CButton>
                </CNavbar>
                
            </CCard>
        </CCol>
      </CRow>
    );
};

export default SystemSetting;
