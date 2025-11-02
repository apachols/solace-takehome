interface SearchInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
}

const buttonStyle = {
  backgroundColor: "#265b4e",
  color: "white",
  border: "none",
  padding: "8px 16px",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "14px",
};

export default function SearchInput({ onChange, onReset }: SearchInputProps) {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "8px",
        padding: "24px",
        boxShadow:
          "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
      }}
    >
      <h2 style={{ marginTop: 0, marginBottom: "16px", color: "#265b4e" }}>
        Search
      </h2>
      <input
        style={{
          border: "1px solid #265b4e",
          padding: "8px",
          borderRadius: "4px",
          marginRight: "8px",
        }}
        onChange={onChange}
      />
      <button style={buttonStyle} onClick={onReset}>
        Reset Search
      </button>
    </div>
  );
}
