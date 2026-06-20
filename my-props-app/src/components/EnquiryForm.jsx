import React, { useState } from 'react'

const EnquiryForm = ({ sendData }) => {

    const [form, setForm] = useState({
       id : '' ,  name: '', qual: '', college: '', email: '', mobile: '', address: ''
    })

    const handleChange = (e) => {
        let { name, value } = e.target;

        setForm({ ...form, [name]: value })
    }

    const clearForm = () => {
        setForm({
       id : '' ,  name: '', qual: '', college: '', email: '', mobile: '', address: ''
    })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        sendData(form);

        clearForm();

    }
    return (
        <div>
            <h2>Enquiry Form</h2>

            <form onSubmit={handleSubmit}>

                id : <input type="text" name='id' value={form.id} onChange={handleChange} required /> <br /><br />
                name : <input type="text" name='name' value={form.name} onChange={handleChange} required /> <br /><br />
                qual : <input type="text" name='qual' value={form.qual} onChange={handleChange} required /> <br /><br />
                college : <input type="text" name='college' value={form.college} onChange={handleChange} required /> <br /><br />
                email : <input type="text" name='email' value={form.email} onChange={handleChange} required /> <br /><br />
                mobile : <input type="text" name='mobile' value={form.mobile} onChange={handleChange} required /> <br /><br />
                address : <input type="text" name='address' value={form.address} onChange={handleChange} required /> <br /><br />

                <button type='submit'>Send Data</button>
            </form>
        </div>
    )
}

export default EnquiryForm
