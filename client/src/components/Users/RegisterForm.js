import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../utils/mutations';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    companyId: '',
  });

  const [createUser] = useMutation(CREATE_USER);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createUser({ variables: formData });
      console.log('User created successfully:', data);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <select name="role" value={formData.role} onChange={handleChange} required>
        <option value="">Select role</option>
        <option value="admin">Admin</option>
        <option value="manager">Manager</option>
        <option value="worker">Worker</option>
      </select>
      <input
        type="text"
        name="companyId"
        value={formData.companyId}
        onChange={handleChange}
        placeholder="Company ID"
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
