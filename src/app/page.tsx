"use client";

import { useEffect, useState } from "react";
import { Advocate } from "@/types/advocate";
import PageHeader from "./components/PageHeader";
import Search from "./components/Search";

export default function Home() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);

  useEffect(() => {
    console.log("fetching advocates...");
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
      });
    });
  }, []);

  return (
    <main style={{ margin: "24px" }}>
      <PageHeader />
      <Search advocates={advocates} />
    </main>
  );
}
