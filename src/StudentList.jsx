function StudentList() {
  const students = [
    { id: 1, name: "Ali", score: 75 },
    { id: 2, name: "Sara", score: 42 },
    { id: 3, name: "Ahmed", score: 50 },
    { id: 4, name: "Fatima", score: 35 },
  ];

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Student Results</h2>
      {students.map((student) => (
        <p key={student.id}>
          {student.name} - Score: {student.score} -{" "}
          {student.score >= 50 ? (
            <span style={{ color: "green", fontWeight: "bold" }}>Pass</span>
          ) : (
            <span style={{ color: "red", fontWeight: "bold" }}>Fail</span>
          )}
        </p>
      ))}
    </div>
  );
}

export default StudentList;