import React, { useState, useEffect } from "react";
import { CountriesMap } from "./types";
import CountriesList from "./components/CountriesList";

const App: React.FC = () => {
  const [countries, setCountries] = useState<CountriesMap | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const res = await fetch("/countries.json");
        if (!res.ok) throw new Error("Помилка завантаження JSON");

        const data: CountriesMap = await res.json();
        setCountries(data);
      } catch (err) {
        setError(String(err));
      } finally {
        setLoading(false);
      }
    }

    loadCountries();
  }, [])

  return (
    <div className="app">
      <h1>Країни та столиці</h1>

      {loading && <div className="status">Завантаження…</div>}
      {error && <div className="error">{error}</div>}
      {countries && <CountriesList countries={countries} />}
    </div>
  );
}

export default App;