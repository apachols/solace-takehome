interface SearchInputProps {
  searchTerm: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
}

export default function SearchInput({
  searchTerm,
  onChange,
  onReset,
}: SearchInputProps) {
  return (
    <div>
      <p>Search</p>
      <p>
        Searching for: <span id="search-term">{searchTerm}</span>
      </p>
      <input style={{ border: "1px solid black" }} onChange={onChange} />
      <button onClick={onReset}>Reset Search</button>
    </div>
  );
}
