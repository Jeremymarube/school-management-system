import React, { useState } from 'react';
import '../App.css'; 

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ name: '', age: '' });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const handleAddStudent = () => {
    if (!newStudent.name || !newStudent.age) return;
    setStudents([...students, newStudent]);
    setNewStudent({ name: '', age: '' });
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setNewStudent(students[index]);
  };

  const handleUpdateStudent = () => {
    const updated = [...students];
    updated[editingIndex] = newStudent;
    setStudents(updated);
    setEditingIndex(null);
    setNewStudent({ name: '', age: '' });
  };

  const handleDelete = (index) => {
    const updated = students.filter((_, i) => i !== index);
    setStudents(updated);
    if (editingIndex === index) {
      setEditingIndex(null);
      setNewStudent({ name: '', age: '' });
    }
  };

  return (
    <div className="container">
      <h2>Student List</h2>

      <div className="form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newStudent.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={newStudent.age}
          onChange={handleChange}
        />
        {editingIndex === null ? (
          <button onClick={handleAddStudent}>Add Student</button>
        ) : (
          <button onClick={handleUpdateStudent}>Update Student</button>
        )}
      </div>

      <ul className="student-list">
        {students.map((student, index) => (
          <li key={index} className="student-item">
            <span>
              {student.name} (Age: {student.age})
            </span>
            <div>
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)} className="delete">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
