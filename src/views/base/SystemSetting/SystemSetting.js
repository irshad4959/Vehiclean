import React from 'react'
import {
    CCard,CCardHeader,
    CCol,CRow,CButton,
    CNavbar,
    
  } from '@coreui/react'
import General from './General';
import { useNavigate } from 'react-router-dom';

function SystemSetting(){
        const navigate= useNavigate();

    return(
        <CRow>
        <CCol xs={12} className="ColomRow">
            <CCard>
            <CCardHeader>
              <strong>Global_Setup</strong>
              </CCardHeader>
              <CNavbar colorScheme="light" className="bg-primary" >

              <CButton type="button" size='sm' color="info" shape="rounded-pill" variant="ghost" className="me-1" onClick={()=>navigate('/base/SystemSetting/General')}>
                <strong>General</strong>
               </CButton>
               
                <CButton type="button" size='sm' color="info" shape="rounded-pill" variant="ghost" onClick={()=>navigate('/base/SystemSetting/CompanyProfileLink')}>
                <strong>Company Profile Link</strong>
                </CButton>
                
                <CButton type="button" size='sm' color="info" shape="rounded-pill" variant="ghost" onClick={()=>navigate('/base/SystemSetting/SocialLinkConfig')}>
                <strong>Social Link Config</strong>
                </CButton>
                
                <CButton type="button" size='sm' color="info" shape="rounded-pill" variant="ghost" onClick={()=>navigate('/base/SystemSetting/MailConfig')}>
                <strong>Mail Config</strong>
                </CButton>
               
                <CButton type="button" size='sm' color="info" shape="rounded-pill" variant="ghost" className="me-1" onClick={()=>navigate('base/SystemSetting/MapAndSmsConfig')}>
                <strong>Map And Sms Config</strong>
                </CButton>
                
                <CButton type="button" size='sm' color="info" shape="rounded-pill" variant="ghost" className="me-1" onClick={()=>navigate('/base/SystemSetting/PushNotificationConfig')}>
                <strong>Push Notification Config</strong>
                </CButton>
                </CNavbar>
                <CNavbar colorScheme="light" className="bg-warning" >
                <CButton type="button" size='sm' color="info" shape="rounded-pill" variant="ghost" className="me-1" onClick={()=>navigate('/base/SystemSetting/PaymentSetting')}>
                <strong>Payment Setting</strong>
                </CButton>
               
                <CButton type="button" size='sm' color="info" shape="rounded-pill" variant="ghost" className="me-1" onClick={()=>navigate('/base/SystemSetting/BusinessCountry')}>
                <strong>Business Country</strong>
                </CButton>
                
                <CButton type="button" size='sm' color="info" shape="rounded-pill" variant="ghost" className="me-1" onClick={()=>navigate('/base/SystemSetting/BusinessState')}>
                <strong>Business State</strong>
                </CButton>
                
                <CButton type="button" size='sm' color="info" shape="rounded-pill" variant="ghost" className="me-1"  onClick={()=>navigate('/base/SystemSetting/BusinessCity')}>
                <strong>Business City</strong>
                </CButton>
                
                <CButton type="button" size='sm' color="info" shape="rounded-pill" variant="ghost" className="me-1"  onClick={()=>navigate('/base/SystemSetting/Tax')}>
                <strong>Tax</strong>
                </CButton>
                </CNavbar>
            </CCard>
        </CCol>
      </CRow>
    );
};

export default SystemSetting;
