import React from 'react'
import {
  CCard,CCardBody,
  CCardHeader,CCol,
  CRow,CFormInput, CFormSelect,
} from '@coreui/react';
function MapAndSmsConfig(){
        return(
            <CRow>
            <CCol xs={12}>
            <CCard className='mb-12'>
            <CCardHeader>Map And Sms Config</CCardHeader>
            <CCardBody className='mb-12'>
            <CRow>
            <CCol xs={3}>
            <CFormInput type='text' className='Radius Cofig' label='Search Radius Config' size='lg' placeholder='SearchRadiusConfig'/>
            </CCol>
            <CCol xs={3}>
            <CFormInput type='text' className='BrowserMapKey' label='Browser Map Key' size='lg' placeholder='BrowserMapKey'/>
            </CCol>
            <CCol xs={3}>
            <CFormInput type='text' className='ServerMapKey' label='Server Map Key' size='lg' placeholder='ServerMapKey'/>
            </CCol>
            <CCol xs={3}>
            <CFormSelect  name="Status" size='lg' label="Sms Provider">
            <option>select givn below </option>
            <option value="1">Active</option>
            <option value="0">Inactive</option>
            </CFormSelect>
            </CCol>
            </CRow>
            </CCardBody>
            </CCard>
            </CCol>
            </CRow>
        )
}
export default MapAndSmsConfig