import React from 'react';
import { CCard, CCardBody,CFormSelect,
   CCardHeader, CCol, CFormInput, CRow 
  } from '@coreui/react';


function VehicleCategory (){
  return (
    <div>
      <CRow>
      <CCol xs={12}>
      <CCard className='mb-12'>
      <CCardHeader>
      <strong>Vehicle Category</strong>
       </CCardHeader>
      <CCardBody className='mb-12'>
        <CRow>
        <CCol xs={4}>
        <CFormInput type='file' name='type icon'  label='Type icon' size='lg'/>
        </CCol>
        <CCol xs={4}>
        <CFormInput type='text' name='typeName'  label='Type Name' size='lg'/>
        </CCol>
        <CCol xs={4}>
        <CFormSelect name="Status" size='lg' label="Status">
        <option>Status </option>
        <option value="1">1</option>
        <option value="0">A</option>
      </CFormSelect>
        </CCol>
        </CRow>
      </CCardBody>
      </CCard>
      </CCol>
      </CRow>

    </div>
  )
};

export default VehicleCategory
