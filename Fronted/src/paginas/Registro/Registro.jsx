import React, { useState } from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import './Registro.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    correo: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    correo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validar campo de correo para que tenga una "@"
    if (name === 'correo') {
      if (!value.includes('@')) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          correo: 'El correo debe contener una "@"'
        }));
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          correo: ''
        }));
      }
    }

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.correo) {
      alert('Por favor, corrige los errores antes de enviar.');
      return;
    }
    console.log('Datos enviados:', formData);
    // Aquí podrías enviar los datos a una API o realizar otra acción con los datos
  };

  return (
    <div className="register-father">
      <Header />
      <div className="register-body">
        <div className="register-container">
          <h1 className="register-title">Registro</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                id="username"
                type="text"
                className="register-input-text"
                placeholder="Nombre de usuario"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                id="correo"
                type="email"
                className="register-input-text"
                placeholder="Correo electrónico"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                required
              />
              {errors.correo && <p className="error-message">{errors.correo}</p>}
            </div>
            <div className="form-group">
              <input
                id="password"
                type="password"
                className="register-input-text"
                placeholder="Contraseña"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="button-register">
              Registrar
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
