import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";

export const ContactEdit = ({ selectUser }) => {
    // const [name, setName] = useEffect();
    // const [email, setEmail] = useEffect();
    // const [phone, setPhone] = useEffect();
    // const [address, setAddress] = useEffect();
    const { store, actions } = useContext(Context);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });
    const navigate = useNavigate()


    useEffect(() => {
        setFormData(store.currentContact)
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        actions.editUser(formData);
        setFormData({ name: '', email: '', phone: '', address: '' });
        navigate("/Contact")
    };

    return (
        <div className="row">
            <div className="container col-4">
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nombre</label>
                        <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Teléfono</label><input type="tel" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Dirección</label>
                        <input type="text" name="address" className="form-control" value={formData.address} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="btn btn-primary my-2">Guardar Contacto</button>
                </form>
            </div>
        </div>
    );
};

export default ContactEdit;
