import React, { useState, useEffect } from 'react';

const StudentForm = ({ student, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
  });

  useEffect(() => {
    if (student) {
      setFormData(student);
    }
  }, [student]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const method = student ? 'PATCH' : 'POST';
    const url = student
      ? `/api/students/${student.id}`
      : 'api/students';

      fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(data => {
        onSave(data, !student);
      })
      .catch(err => console.error('Save failed:', err));
  };

   return (
    <form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
      <input
        type="text"
        name="name"
        placeholder="Student Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
       <input
        type="email"
        name="email"
        placeholder="Student Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        required
      />
      <button type="submit">{student ? 'Update' : 'Add'}</button>
      <button type="button" onClick={onClose}>Cancel</button>
    </form>
  );
};

export default StudentForm;