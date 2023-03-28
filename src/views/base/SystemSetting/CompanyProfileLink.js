import React from 'react'
import {
  CCard,CCardBody,
  CCardHeader,CCol,CButton,
  CRow,CFormInput,
} from '@coreui/react';


function CompanyProfileLink(){
    return(
        <CRow>
        <CCol xs={12}>
            <CCard className='mb-12'>
            <CCardHeader>Company Profile link</CCardHeader>
            <CCardBody className='mb-12'>
            <CRow>
            <CCol xs={3}>
            <CFormInput type="text" className="mb-3"  size="lg" label='Facebook Link' name='sitename' placeholder="textbox" />
            </CCol>
            <CCol xs={3}>
            <CFormInput type="text" className="mb-3"  size="lg" label='Twitter Link' name='sitename' placeholder="textbox" />
            </CCol>
            <CCol xs={3}>
            <CFormInput type="text" className="mb-3"  size="lg" label='Instagram Link' name='sitename' placeholder="textbox" />
            </CCol>
            <CCol xs={3}>
            <CFormInput type="text" className="mb-3"  size="lg" label='Printest Link' name='sitename' placeholder="textbox" />
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
export default CompanyProfileLink