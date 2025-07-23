import React, { useState, useEffect } from "react";

const TeacherForm = ({ fetchTeachers, editingTeacher, setEditingTeacher }) => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [token] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (editingTeacher) {
      setName(editingTeacher.name);
      setSubject(editingTeacher.subject);
    } else {
      setName("");
      setSubject("");
    }
  }, [editingTeacher]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !subject) return alert("Please fill in all fields");

    const method = editingTeacher ? "PATCH" : "POST";
    const url = editingTeacher
      ? `/${editingTeacher.id}`
      : "";

    try {
      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, subject }),
      });

      setName("");
      setSubject("");
      setEditingTeacher(null);
      fetchTeachers();
    } catch (err) {
      console.error("Failed to submit teacher:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{editingTeacher ? "Edit Teacher" : "Add Teacher"}</h3>
      <input
        type="text"
        placeholder="Teacher Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <button type="submit">{editingTeacher ? "Update" : "Add"}</button>
      {editingTeacher && <button onClick={() => setEditingTeacher(null)}>Cancel</button>}
    </form>
  );
};

export default TeacherForm;
