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
      <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        <input
          style={{
            border: "1px solid #265b4e",
            padding: "12px",
            borderRadius: "4px",
            flex: 1,
            fontSize: "16px",
          }}
          onChange={onChange}
          placeholder="Search advocates..."
        />
        <button style={buttonStyle} onClick={onReset}>
          Reset
        </button>
      </div>
    </div>
  );
}
