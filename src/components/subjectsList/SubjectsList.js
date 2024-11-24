import React from "react";
import "./SubjectsList.css";

const SubjectsList = () => {
  // Sample data for subjects and their respective faculty
  const subjects = [
    { id: 1, name: "Mathematics", faculty: "Dr. John Smith" },
    { id: 2, name: "Physics", faculty: "Dr. Alice Johnson" },
    { id: 3, name: "Chemistry", faculty: "Dr. Robert Brown" },
    { id: 4, name: "English", faculty: "Dr. Emily Davis" },
    { id: 5, name: "Biology", faculty: "Dr. Sarah Wilson" },
  ];

  return (
    <div className="subjects-list">
      <h2>Subjects List</h2>
      <table className="subjects-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Subject Name</th>
            <th>Faculty</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject, index) => (
            <tr key={subject.id}>
              <td>{index + 1}</td>
              <td>{subject.name}</td>
              <td>{subject.faculty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubjectsList;
