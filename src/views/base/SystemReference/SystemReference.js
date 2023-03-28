import React from 'react'
import { CNavbar ,CButton,CForm, CRow, CCol, CCard, CCardHeader, CCardBody, CNavItem,
 } from '@coreui/react';
import { useNavigate } from 'react-router-dom';

function SystemReference(){
 const navigate = useNavigate();
  return (
    <div>
    <CRow>
    <CCol xs={12}>
    <CCard>
    <CCardHeader>
    <strong>System Reference</strong>
    </CCardHeader>
    <CCardBody>

    <CForm className="container-fluid justify-content-start">
    <CNavbar colorScheme="light" className="bg-light">
      <CButton type="button" size='sm' color="warning"  className="me-1" onClick={()=>navigate('/base/SystemReference/Customer')}>
       <strong> Customers</strong>
      </CButton>
      
      <CButton type="button" size='sm' color="warning" className="me-1" onClick={()=>navigate('/base/SystemReference/VehicleanPartners')}>
      <strong>Vehiclean Partners</strong>
      </CButton> 
      
      <CButton type="button" size='sm' color="warning" className="me-1" onClick={()=>navigate('/base/SystemReference/VehicleType')}>
      <strong>Vehicle Types</strong>
      </CButton>
      
      <CButton type="button" size='sm' color="warning" className="me-1" onClick={()=>navigate('/base/SystemReference/VehicleCatalogs')}>
      <strong>Vehicle Catalogs</strong>
      </CButton>
      <CButton type="button" size='sm' color="warning" className="me-1" onClick={()=>navigate('/base/SystemReference/CustomerVehicles')}>
      <strong>Customer Vehicles</strong>
      </CButton>
      
      <CButton type="button" size='sm' color="warning" className="me-1" onClick={()=>navigate('/base/SystemReference/ServiceChart')}>
      <strong>Service Chart</strong>
      </CButton>
      
      <CButton type="button" color="warning" className="me-1" onClick={()=>navigate('/base/SystemReference/SubscriptionPlans')} size='sm'>
      <strong>Subscription Plans</strong>
      </CButton>
      </CNavbar>
      
      <CNavbar colorScheme="light" className="bg-light">
      <CButton type="button" size='sm' color="warning" className="me-1" onClick={()=>navigate('/base/SystemReference/PromoCode')}>
      <strong>Promo Codes</strong>
      </CButton>
      
      <CButton type="button" size='sm' color="warning" className="me-1" onClick={()=>navigate('/base/SystemReference/Tickets')}>
      <strong>Tickets</strong>
      </CButton>
      
      <CButton type="button" size='sm' color="warning" className="me-1" onClick={()=>navigate('/base/SystemReference/Notification')}>
      <strong>Notifications</strong>
      </CButton>
      
      <CButton type="button" size='sm' color="warning" className="me-1" onClick={()=>navigate('/base/SystemReference/DisputeReason')}>
      <strong>Dispute Reason</strong>
      </CButton>
      
      <CButton type="button" size='sm' color="warning" className="me-1" onClick={()=>navigate('/base/SystemReference/SystemRole')}>
      <strong>System Role</strong>
      </CButton>
      
      <CButton type="button" size='sm' color="warning" className="me-1" onClick={()=>navigate('/base/SystemReference/AffiliatePartner')}>
      <strong>Affiliate Partner</strong>
      </CButton>
      
      <CButton type="button" size='sm' color="warning" className="me-1" onClick={()=>navigate('/base/SystemReference/Merchants')}>
      <strong>Merchants</strong>
      </CButton>
      </CNavbar>
    </CForm>
  
  </CCardBody>
  </CCard>
  </CCol>
  </CRow>
      </div>
)
}

export default SystemReference;
