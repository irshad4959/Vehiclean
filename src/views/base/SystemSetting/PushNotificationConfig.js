import React from "react";
import {
    CCard, CCardBody,
    CCardHeader, CCol, CButton,
    CRow, CFormInput, CFormSelect,
} from '@coreui/react';

function PushNotification() {
    return (
        <div className="container">
            <CRow>
                <CCol xs={12}>
                    <CCard className="mb-12" >
                        <CCardHeader>
                            <strong>Push Notification</strong>
                        </CCardHeader>
                        <CCardBody className="mb-12" size="sm">
                            <CRow>
                                <CCol xs={12}>
                                    <CFormInput type="text" className="mb-3" size="lg" label='Push Notification' name='sitename' placeholder="Push Notification" />
                                </CCol>
                            </CRow>
                            <CRow>

                            <CCol xs={12} className="d-grid gap-2 d-md-flex justify-content-md-end">
                            
                            <CButton> Submit </CButton>
                           
                            </CCol>
                            </CRow>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </div>
    )
}
export default PushNotification