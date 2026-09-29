function StudentList() {
  const students = [
    { id: 1, name: "Ali", score: 75 },
    { id: 2, name: "Sara", score: 42 },
    { id: 3, name: "Ahmed", score: 50 },
    { id: 4, name: "Fatima", score: 35 },
  ];

  const cell = { padding: "10px 25px", border: "1px solid #999" };

  return (
    <table
      style={{
        margin: "0 auto",
        borderCollapse: "collapse",
        minWidth: "320px",
        border: "1px solid #999",
      }}
    >
      <thead>
        <tr style={{ backgroundColor: "#1565c0", color: "white" }}>
          <th style={cell}>Name</th>
          <th style={cell}>Score</th>
          <th style={cell}>Status</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td style={cell}>{student.name}</td>
            <td style={cell}>{student.score}</td>
            <td style={cell}>
              {student.score >= 50 ? (
                <span style={{ color: "green", fontWeight: "bold" }}>Pass</span>
              ) : (
                <span style={{ color: "red", fontWeight: "bold" }}>Fail</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentList;