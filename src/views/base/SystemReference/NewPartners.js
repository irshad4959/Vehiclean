import React from 'react';
import { CCard, CCardBody,CRow,
  CCol,CCardHeader, 
  CFormInput, CFormSelect
} from '@coreui/react'

function NewPartners (){
  return (
    <div>
    <CRow>
    <CCol xs={12}>
    <CCard className="mb-12">
    <CCardHeader>New Customer</CCardHeader>
    <CCardBody className="mb-12">
    <CRow>
    <CCol xs={3}>
    <CFormInput type='file' name="Profile" label="Partner Profile" className="mb-4" size="lg" />
    </CCol>
    <CCol xs={3}>
    <CFormSelect name="Country" size='lg' label=" Partner Country" >
        <option>select Partner Country </option>
        <option value="1">usa</option>
        <option value="0">australia</option>
        </CFormSelect>
    </CCol>
    <CCol xs={3}>
    <CFormInput type='email' name="State" label="Email" className="mb-4" size="lg" />
    </CCol>
    <CCol xs={3}>
    <CFormInput type ='number' name="number" label="Mobile Number" className="mb-4" size="lg" />
    </CCol>
    <CRow>
    <CCol xs={3}>
    <CFormInput type ='text' name="number" label="Address" className="mb-4" size="lg" />
    </CCol>
    <CCol xs={3}>
      <CFormSelect name="Status" size='lg' label="Country">
        <option>select Country </option>
        <option value="1">USA</option>
        <option value="0">America</option>
      </CFormSelect>
    </CCol>
    <CCol xs={3}>
      <CFormSelect name="State" size='lg' label="State">
        <option>select State </option>
        <option value="1">USA</option>
        <option value="0">America</option>
      </CFormSelect>
    </CCol>
    <CCol xs={3}>
      <CFormSelect name="City" size='lg' label="City">
        <option>select City </option>
        <option value="1">USA</option>
        <option value="0">America</option>
      </CFormSelect>
    </CCol>
    </CRow>
    <CRow>
    <CCol xs={3}>
      <CFormSelect name="City" size='lg' label="Salery">
        <option>select Salery </option>
        <option value="1">1lpa</option>
        <option value="0">2lpa</option>
      </CFormSelect>
    </CCol>
    <CCol xs={3}>
    <CFormInput type='file' name="Profile" label="Adhar Front" className="mb-4" size="lg" />
    </CCol>
    <CCol xs={3}>
    <CFormInput type='file' name="Adhar Back" label="Adhar Back" className="mb-4" size="lg" />
    </CCol>
    <CCol xs={3}>
    <CFormInput type='file' name="Police Verification" label="Police Verification" className="mb-4" size="lg" />
    </CCol>
    </CRow>
    <CRow>
    <CCol xs={3}>
    <CFormInput type='text' name="Bank Name" label="Bank Name" className="mb-3" size="lg" />
    </CCol>
    <CCol xs={3}>
    <CFormInput type='text' name="Bank Account Number" label="Bank Account Number" className="mb-3" size="lg" />
    </CCol>
    <CCol xs={3}>
    <CFormInput type='text' name="Bank ifsc code" label="Bank Ifsc Code" className="mb-3" size="lg" />
    </CCol>
    <CCol xs={3}>
      <CFormSelect name="City" size='lg' label="Status">
        <option>Select Status </option>
        <option value="1">Active</option>
        <option value="0">DeActive</option>
      </CFormSelect>
    </CCol>
    </CRow>
    </CRow>
    </CCardBody>
    </CCard>
    </CCol>
    </CRow>
    </div>
  )
}

export default NewPartners
