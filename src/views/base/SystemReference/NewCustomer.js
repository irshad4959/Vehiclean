import React, { useState } from 'react'
import { CCard, CCardBody,CRow,
          CCol,CCardHeader, 
          CFormInput, CFormSelect, 
          CButton, CForm
} from '@coreui/react'
import { useNavigate} from 'react-router-dom'
function NewCustomer() {
  const [formData, setFormData] = useState({});
  const navigate= useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const val = {
      Profile: formData.Profile,
      Name: formData.Name,
      State: formData.State,
      MobileNumber: formData.MobileNumber,
      SocietyName: formData.SocietyName,
      FlatNoOrVillaNo: formData.FlatNoOrVillaNo,
      ParkingSlot: formData.ParkingSlot,
    };
    navigate(
      `/Customer?
      Profile=${formData.Profile}&
      Name=${formData.Name}&
      Email=${formData.Email}&
      MobileNumber=${formData.MobileNumber}&
      FlatNoOrVillaNo=${formData.FlatNoOrVillaNo}&
      ParkingSlot=${formData.ParkingSlot}`
    );
  };
      const addRow=(data)=>{
        const totalData = formData.length;
        data.id = totalData+1; 
        const updatformData =[ ...formData]
        updatformData.push(data);
        setFormData(updatformData);
      } 


  
  return (
    <div>
    <CForm onSubmit={handleSubmit}>
    <CRow>
    <CCol xs={12}>
    <CCard className="mb-12">
    <CCardHeader>New Customer</CCardHeader>
    <CCardBody className="mb-12">
    <CRow >
    <CCol xs={4}>
    <CFormInput type='file' name="Profile" label="Profile Pic" className="mb-4" size="lg" onChange={(event) => setFormData({ ...formData, Profile: event.target.value })}/>
    </CCol>
    <CCol xs={4}>
    <CFormInput type='text' name="Name" label="Name" className="mb-4" size="lg" onChange={(event) => setFormData({ ...formData, Name: event.target.value })}/>
    </CCol>
    <CCol xs={4}>
    <CFormInput type='email' name="Email" label="Email" className="mb-4" size="lg" onChange={(event) => setFormData({ ...formData, Email: event.target.value })}/>
    </CCol>
    <CRow>
    <CCol xs={6}>
    <CFormInput type ='number' name="MobileNumber" label="Mobile Number" className="mb-4" size="lg" onChange={(event)=>setFormData({...form,MobileNumber:event.target.value})} />
    </CCol>
    <CCol xs={6}>
      <CFormSelect name="SocietyName" size='lg' label="Society Name" onChange={(event)=>setFormData({...formData,SocietyName:event.target.value})}>
        <option>select Society </option>
        <option value="1">USA</option>
        <option value="0">America</option>
      </CFormSelect>
    </CCol>
     </CRow>
    <CRow>
    <CCol xs={6}>
    <CFormInput type='text' name="FlatNoOrVillaNo" label="Flat No/Villa No" className="mb-4" size="lg" onChange={(event)=>setFormData({...formData,FlatNoOrVillaNo:event.target.value})} />
    </CCol>
    <CCol xs={6}>
    <CFormInput type='text' name="ParkingSlot " label="Parking slot" className="mb-4" size="lg" onChange={(event)=>setFormData({...formData,ParkingSlot:event.target.value})} />
    </CCol>
    </CRow>
    <CRow>
    <CCol xs={4}>
    <CButton type='submit'>Submit</CButton>
    </CCol>
    </CRow>
    </CRow>
    </CCardBody>
    </CCard>
    </CCol>
    </CRow>
    </CForm>
    </div>
  )
}

export default NewCustomer
