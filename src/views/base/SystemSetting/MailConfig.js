import React from "react";
import {
    CCard, CCardBody,
    CCardHeader, CCol, CButton,
    CRow, CFormInput, CFormSelect,
} from '@coreui/react';


function MailConfig() {
    return (

        <CRow>
            <CCol xs="mb-12">
                <CCard className="mb-12">
                    <CCardHeader> Mail Configration</CCardHeader>
                    <CCardBody className="mb-12">
                        <CRow>
                            <CCol xs={4}>
                                <CFormSelect size="lg" className="mb-4" label="Driver">
                                    <option>Select Given Name</option>
                                    <option value="name">JOhan </option>
                                    <option value="name">Mask</option>
                                    <option value="name">Rean</option>
                                </CFormSelect>
                            </CCol>
                            <CCol xs={4}>
                                <CFormInput type="text" className="mb-4" size="lg" label='Host' name='host' placeholder="Host Name" />
                            </CCol>
                            <CCol xs={4}>
                                <CFormInput type="text" className="mb-4" size="lg" label='Port' name='Port' placeholder="Port Name" />
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol xs={4}>
                                <CFormInput type="text" className="mb-4" size="lg" label='From Address' name='Address' placeholder="Form Address" />
                            </CCol>
                            <CCol xs={4}>
                                <CFormInput type="password" className="mb-4" size="lg" label='Password' name='Password' placeholder="Password" />
                            </CCol>
                            <CCol xs={4}>
                                <CFormSelect className="mb-4" size="lg" label="Encryption" name="Encryption">
                                    <option>Select Option</option>
                                    <option value="1">Now</option>
                                    <option value="2">Show</option>
                                </CFormSelect>
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol xs={4}>
                                <CFormInput type="textbox" className="mb-4" size="lg" label='Domain' placeholder="Domain" />
                            </CCol>
                            <CCol xs={4}>
                                <CFormInput type="textbox" className="mb-4" size="lg" label='Textbox' placeholder="Textbox" />
                            </CCol>
                            <CCol xs={4}   >
                            <div className="d-grid gap-2 d-md-flex justify-content-md-end" size="lg">
                                 <CButton color="primary" size="lg">Large button</CButton>
                                </div>
                            </CCol>

                        </CRow>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}
export default MailConfig;