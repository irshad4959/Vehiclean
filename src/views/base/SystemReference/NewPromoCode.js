import React from "react";
import { CCard, CCardBody,CRow,
    CCol,CCardHeader, 
    CFormInput, CFormSelect
  } from '@coreui/react'

function NewPromoCode(){
    return(
        <div>
        <CRow>
        <CCol xs={12}>
        <CCard className="mb-12">
        <CCardHeader>New Promo Code</CCardHeader>
        <CCardBody className="mb-12">
        <CRow>
        <CCol xs={4}>
        <CFormSelect name="Country" size='lg' label="Country">
            <option>select givn Country </option>
            <option>usa</option>
            <option>australia</option>
            </CFormSelect>
        </CCol>
        <CCol xs={4}>
        <CFormSelect name="State" size='lg' label="State">
            <option>select given State </option>
            <option >u</option>
            <option >a</option>
            </CFormSelect>
            </CCol>
        <CCol xs={4}>
        <CFormSelect name="City" size='lg' label="City">
            <option>Select City </option>
            <option >D</option>
            <option >P</option>
            <option >E</option>
            </CFormSelect>
        </CCol>
        </CRow>
        <CRow>
        <CCol xs={4}>
        <CFormInput type="text" size="lg" label="PromoCode" name="promocode"/>
        </CCol>
        <CCol xs={4}>
        <CFormInput type="text" size="lg" label="Promo Description" name="Promo Description"/>
        </CCol>
        <CCol xs={4}>
        <CFormInput type="file" size="lg" label="Image" name="Image"/>
        </CCol>
        </CRow>
        <CRow>
        <CCol xs={4}>
        <CFormInput type="text" size="lg" label="Percentage" name="percentage"/>
        </CCol>
        <CCol xs={4}>
        <CFormInput type="number" size="lg" label="Max Amount" name="Max Amount"/>
        </CCol>
        <CCol xs={4}>
        <CFormInput type="date" size="lg" label="Expiration Date" name="Expiration Date"/>
        </CCol>
        </CRow>
        </CCardBody>
        </CCard>
        </CCol>
        </CRow>
        </div>
    )
}
export default NewPromoCode
