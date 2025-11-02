"use client";

import { useState, useEffect } from "react";
import { Advocate } from "@/types/advocate";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";

interface SearchProps {
  advocates: Advocate[];
}

export default function Search({ advocates }: SearchProps) {
  const [filteredAdvocates, setFilteredAdvocates] =
    useState<Advocate[]>(advocates);
  const [searchTerm, setSearchTerm] = useState("");

  // Update filtered advocates when the advocates prop changes
  useEffect(() => {
    setFilteredAdvocates(advocates);
  }, [advocates]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO
    // * Handle missing or weird data (from API or the DOM) gracefully
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    const searchTermLcase = searchValue.toLowerCase();

    const filtered = advocates.filter((advocate: Advocate) => {
      const matchedSpecialties = advocate.specialties.filter((specialty) =>
        specialty.toLowerCase().includes(searchTermLcase)
      );
      if (matchedSpecialties.length) {
        return true;
      }
      return (
        advocate.firstName.toLowerCase().includes(searchTermLcase) ||
        advocate.lastName.toLowerCase().includes(searchTermLcase) ||
        advocate.city.toLowerCase().includes(searchTermLcase) ||
        advocate.degree.toLowerCase().includes(searchTermLcase) ||
        advocate.yearsOfExperience.toString().includes(searchTermLcase) ||
        advocate.phoneNumber.toString().includes(searchTermLcase)
      );
    });

    setFilteredAdvocates(filtered);
  };

  const onReset = () => {
    console.log(advocates);
    setSearchTerm("");
    setFilteredAdvocates(advocates);
  };

  return (
    <div>
      <SearchInput
        searchTerm={searchTerm}
        onChange={onChange}
        onReset={onReset}
      />
      <br />
      <br />
      <SearchResults advocates={filteredAdvocates} />
    </div>
  );
}
