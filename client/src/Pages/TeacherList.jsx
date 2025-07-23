import React, { useEffect, useState } from "react";
import TeacherForm from "./TeacherForm";

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [editingTeacher, setEditingTeacher] = useState(null);
  const [token] = useState(localStorage.getItem("token"));

  const fetchTeachers = async () => {
    try {
      const res = await fetch("", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setTeachers(data);
    } catch (err) {
      console.error("Failed to fetch teachers:", err);
    }
  };

  useEffect(() => {
    fetchTeachers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this teacher?")) return;
    try {
      await fetch(`${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTeachers(teachers.filter((t) => t.id !== id));
    } catch (err) {
      console.error("Failed to delete teacher:", err);
    }
  };

  return (
    <div className="container">
      <h2>Teachers</h2>
      <TeacherForm fetchTeachers={fetchTeachers} editingTeacher={editingTeacher} setEditingTeacher={setEditingTeacher} />
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>
            <strong>{teacher.name}</strong> – {teacher.subject}
            <button onClick={() => setEditingTeacher(teacher)}>Edit</button>
            <button onClick={() => handleDelete(teacher.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherList;
