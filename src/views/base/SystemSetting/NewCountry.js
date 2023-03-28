import React from "react";
import {
     CRow, CCol, CCard, CCardHeader,
     CCardBody,CFormInput,CFormSelect,
     } from '@coreui/react';
function NewCountry(){
    return(
        <CRow>
        <CCol xs="12">
        <CCard className="mb-12">
        <CCardHeader>
            <strong>New Country</strong>
        </CCardHeader>
        <CCardBody className="mb-12">
        <CRow>
            <CCol xs={6}>
            <CFormInput type="text" className="mb-6"  size="lg" label='Country' name='country' placeholder="textbox" />
            </CCol>
            <CCol xs={6}>
            <CFormSelect size="lg" className="mb-6" aria-label="Small select example" label="Currency">
            <option>Select the given Currency</option>
            <option value="1">Aus</option>
            <option value="2">KD</option>
            <option value="3">UAD</option>
          </CFormSelect>
            </CCol>
        </CRow>
            <CRow>
            <CCol xs={6}>
            <CFormSelect size="lg" className="mb-6" aria-label="Small select example" label="Currency Symbole">
            <option>Select the Currency Symbole</option>
            <option value="1">$</option>
            <option value="2">€</option>
            <option value="3">¥</option>
            <option value="4">£</option>
          </CFormSelect>
            </CCol>
            <CCol xs={6}>
            <CFormSelect size="lg" className="mb-6" aria-label="Small select example" label="Status">
            <option>Select the Currency Symbole</option>
            <option value="1">Active</option>
            <option value="2">DeActive</option>
             </CFormSelect>
            </CCol>
            </CRow>
        </CCardBody>
        </CCard>
        
        </CCol>
        </CRow>
    )
}
export default NewCountry