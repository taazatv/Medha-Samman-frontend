import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar";
import Footer from "./footer";

interface StudentData {
  schoolName: string;
  studentName: string;
  registrationTime: string;
  venue: string;
  date: string;
}

function MedhaData() {
  const { city = "", classType = "" } = useParams<{
    city?: string;
    classType?: string;
  }>();
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedSchool, setSelectedSchool] = useState("");
  const [results, setResults] = useState<StudentData[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!city || !classType) {
      navigate("/");
    }
  }, [city, classType, navigate]);

  useEffect(() => {
    if (hasSearched || search.length < 2 || selectedSchool) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(
          import.meta.env.VITE_BACKEND_URL + "/api/schools",
          {
            params: {
              city: city.toLowerCase(),
              classType: classType.replace("class-", ""),
              query: search,
            },
          },
        );
        setSuggestions(res.data);
      } catch (err) {
        console.error("Error fetching suggestions:", err);
        setSuggestions([]);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(debounceTimer);
  }, [search, city, classType, hasSearched, selectedSchool]);

  const handleSearch = async () => {
    if (!search.trim()) {
      setError("Please enter a school name");
      setResults([]);
      return;
    }

    try {
      setIsLoading(true);
      const res = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/api/search",
        {
          params: {
            city: city.toLowerCase(),
            classType: classType.replace("class-", ""),
            school: search.trim(),
          },
        },
      );

      if (res.data.length === 0) {
        setError(`No results found for ${search.trim()}`);
      } else {
        setError("");
      }

      setResults(res.data);
      setSelectedSchool(search.trim());
      setHasSearched(true);
    } catch (err) {
      console.error("Error searching:", err);
      setError("Failed to fetch data. Please try again.");
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (school: string) => {
    setSearch(school);
    setSelectedSchool(school);
    setSuggestions([]);
    setHasSearched(false);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="mx-auto min-h-screen max-w-4xl p-6">
        <h1 className="mb-6 text-center text-4xl font-bold uppercase">
          Medha Samman
          <div className="text-secondary text-2xl font-bold">
            {classType.replace("-", " ")} - {city}
          </div>
        </h1>

        <div className="mb-8">
          <div className="relative mx-auto max-w-md">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search school name..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setError("");
                  }}
                  className="w-full rounded-lg border border-gray-950 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                />

                {isLoading &&
                  suggestions.length === 0 &&
                  search.length > 1 &&
                  !selectedSchool && (
                    <div className="absolute top-full mt-1 w-full rounded-lg border border-gray-200 bg-white p-2 shadow-lg">
                      <div className="py-2 text-center text-gray-500">
                        Loading...
                      </div>
                    </div>
                  )}

                {suggestions.length > 0 && !selectedSchool && !hasSearched && (
                  <ul className="absolute top-full z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-lg border border-gray-200 bg-white shadow-lg">
                    {suggestions.map((school, index) => (
                      <li
                        key={index}
                        className="cursor-pointer border-b border-gray-100 px-4 py-2 last:border-0 hover:bg-blue-50"
                        onClick={() => handleSuggestionClick(school)}
                      >
                        {school}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <button
                onClick={handleSearch}
                disabled={isLoading || !search.trim()}
                className="rounded-lg bg-amber-700 px-6 py-3 text-white transition-colors hover:bg-amber-800 disabled:cursor-not-allowed disabled:bg-amber-400"
              >
                {results.length > 0 ? "Results" : "Search"}
              </button>
            </div>

            {error && (
              <div className="mt-2 text-center text-sm text-red-500">
                {error}
              </div>
            )}
          </div>
        </div>

        {results.length > 0 ? (
          <div className="overflow-x-auto rounded-lg shadow-md">
            <table className="min-w-full bg-white">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">School Name</th>
                  <th className="px-4 py-3 text-left">Student Name</th>
                  <th className="px-4 py-3 text-left">Venue</th>
                  <th className="px-4 py-3 text-left">Date</th>
                  <th className="px-4 py-3 text-left">Registration Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {results.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-4 py-3">{item.schoolName}</td>
                    <td className="px-4 py-3">{item.studentName}</td>
                    <td className="px-4 py-3">{item.venue}</td>
                    <td className="px-4 py-3">{item.date}</td>
                    <td className="px-4 py-3">{item.registrationTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 text-center font-bold text-red-600">
              NOTE: IF THERE IS ANY DESCRIPENCY PLEASE MAIL TO
              events@taazatv.com.
            </div>
          </div>
        ) : (
          hasSearched &&
          !error && (
            <div className="py-10 text-center text-gray-500">
              No results found for {search}
            </div>
          )
        )}
      </div>

      <Footer></Footer>
    </>
  );
}

export default MedhaData;
