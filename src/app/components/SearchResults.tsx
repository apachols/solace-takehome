import { Advocate } from "@/types/advocate";

interface SearchResultsProps {
  advocates: Advocate[];
}

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse" as const,
  backgroundColor: "white",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  borderRadius: "8px",
  overflow: "hidden",
};

const thStyle = {
  backgroundColor: "#265b4e",
  color: "white",
  padding: "12px 16px",
  textAlign: "left" as const,
  fontWeight: 600,
  fontSize: "14px",
};

const tdStyle = {
  padding: "12px 16px",
  borderBottom: "1px solid #e5e7eb",
  fontSize: "14px",
  verticalAlign: "top" as const,
};

const trStyle = {
  transition: "background-color 0.2s",
};

export default function SearchResults({ advocates }: SearchResultsProps) {
  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>Specialist</th>
          <th style={thStyle}>Specialties</th>
          <th style={thStyle}>Years of Experience</th>
          <th style={thStyle}>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {advocates.map((advocate: Advocate) => {
          return (
            <tr key={advocate.id} style={trStyle}>
              <td style={tdStyle}>
                <div style={{ fontWeight: 600, marginBottom: "4px" }}>
                  {advocate.firstName} {advocate.lastName}, {advocate.degree}
                </div>
                <div style={{ fontSize: "13px", color: "#6b7280" }}>
                  {advocate.city}
                </div>
              </td>
              <td style={tdStyle}>
                {advocate.specialties.map((s, index) => (
                  <div key={index} style={{ marginBottom: "4px" }}>
                    {s}
                  </div>
                ))}
              </td>
              <td style={tdStyle}>{advocate.yearsOfExperience}</td>
              <td style={tdStyle}>{advocate.phoneNumber}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
