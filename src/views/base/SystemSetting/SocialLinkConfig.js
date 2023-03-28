import React from 'react'
import {
  CCard,CCardBody,
  CCardHeader,CCol,CButton,
  CRow,CFormInput,CFormSwitch,
} from '@coreui/react';

function SocialLinkConfig(){
    return(
        <CRow>
        <CCol xs={12}>
            <CCard className='mb-12'>
            <CCardHeader>Social Link Config</CCardHeader>
            <CCardBody className='mb-12'>
            <CRow>
            <CCol xs={3}>
            <CFormSwitch label="SocialLink" id="formSwitchCheckDefault" name='SocialLink'/>
            </CCol>
            <CCol xs={3}>
            <CFormInput type="text" className="mb-3"  size="lg" label='Google Client Id' name='GoogleClientId' placeholder="GoogleClientId" />
            </CCol>
            <CCol xs={3}>
            <CFormInput type="text" className="mb-3"  size="lg" label='Facebook App Id' name='FacebookAppId' placeholder="FacebookAppId" />
            </CCol>
            <CCol xs={3}>
            <CFormInput type="text" className="mb-3"  size="lg" label='Facebook App Secret' name='FacebookAppSecret' placeholder="FacebookAppSecret" />
            </CCol>
            </CRow>
            <CRow>
            <CCol xs={3}>
                <CButton  color="primary" className="me-md-2" size="lg"> Submit </CButton>
                </CCol>
            </CRow>
            </CCardBody>
            </CCard>
        </CCol>
        </CRow>
    )
}
export default SocialLinkConfig