import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar";
import Footer from "./footer";
import Faq from "./Faqs";
import Tickers from "./tickers";

interface StudentData {
  schoolName: string;
  studentName: string;
  registrationTime: string;
}

function MedhaData() {
  const { city = "", classType = "" } = useParams<{
    city?: string;
    classType?: string;
  }>();

  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedSchool, setSelectedSchool] = useState("");
  const [results, setResults] = useState<StudentData[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

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
          `${import.meta.env.VITE_BACKEND_URL}/api/schools`,
          {
            params: {
              city: city.toLowerCase(),
              classType: classType.replace("class-", ""),
              query: search,
            },
          }
        );

        setSuggestions(
          Array.isArray(res.data)
            ? res.data
            : Array.isArray(res.data?.schools)
            ? res.data.schools
            : []
        );
      } catch (err) {
        console.error(err);
        setSuggestions([]);
      } finally {
        setIsLoading(false);
      }
    };

    const timer = setTimeout(fetchSuggestions, 300);

    return () => clearTimeout(timer);
  }, [search, city, classType, hasSearched, selectedSchool]);

  const handleInputFocus = async () => {
    if (selectedSchool || hasSearched || suggestions.length > 0) return;

    try {
      setIsLoading(true);

      const res = await axios.get(
        "https://medha-samman-backend.onrender.com/api/fetchAllSchools",
        {
          params: {
            city: city.toLowerCase(),
            classType: classType.replace("class-", ""),
          },
        }
      );

      setSuggestions(
        Array.isArray(res.data)
          ? res.data
          : Array.isArray(res.data?.schools)
          ? res.data.schools
          : []
      );
    } catch (err) {
      console.error(err);
      setSuggestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!search.trim()) {
      setError("Please enter a school name");
      return;
    }

    try {
      setIsLoading(true);

      const res = await axios.get(
        "https://medha-samman-backend.onrender.com/api/search",
        {
          params: {
            city: city.toLowerCase(),
            classType: classType.replace("class-", ""),
            school: search.trim(),
          },
        }
      );

      const data = Array.isArray(res.data) ? res.data : [];

      setResults(data);

      if (data.length === 0) {
        setError(`No results found for ${search}`);
      } else {
        setError("");
      }

      setSelectedSchool(search.trim());
      setHasSearched(true);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch data");
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuggestionClick = (school: string) => {
    setSearch(school);
    setSelectedSchool(school);
    setSuggestions([]);
  };

  useEffect(() => {
    if (!search.trim()) {
      setSelectedSchool("");
      setHasSearched(false);
      setResults([]);
      setSuggestions([]);
    }
  }, [search]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">
      <Navbar />

      <Tickers />

      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Hero Section */}

        <div className="mb-10 rounded-3xl border border-white/30 bg-white/70 p-8 shadow-2xl backdrop-blur-lg">
          <h1 className="text-center text-5xl font-extrabold uppercase tracking-wide">
            <span className="bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Medha Samman
            </span>
          </h1>

          <h2 className="mt-3 text-center text-3xl font-bold text-red-600">
            {classType.replace("-", " ").toUpperCase()} -{" "}
            {city.toUpperCase()}
          </h2>

          <p className="mt-4 text-center text-lg font-semibold text-amber-700">
            📅{" "}
            {city === "kolkata"
              ? classType === "class-12"
                ? "21st JUNE 2025"
                : "12th JULY 2025"
              : "3rd AUGUST 2025"}
          </p>

          <p className="text-center font-medium text-slate-700">
            📍{" "}
            {city === "kolkata"
              ? "DHONO DHANYO AUDITORIUM"
              : "ARYABHATTA AUDITORIUM"}
          </p>
        </div>

        {/* Search Section */}

        <div className="mx-auto mb-10 max-w-2xl">
          <div className="relative flex gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={search}
                placeholder="Search school name..."
                onChange={(e) => {
                  setSearch(e.target.value);
                  setError("");
                }}
                onFocus={handleInputFocus}
                className="w-full rounded-2xl border border-slate-300 bg-white p-4 text-lg shadow-lg transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
              />

              {Array.isArray(suggestions) &&
                suggestions.length > 0 &&
                !selectedSchool &&
                !hasSearched && (
                  <ul className="absolute z-50 mt-2 max-h-72 w-full overflow-y-auto rounded-xl border bg-white shadow-2xl">
                    {suggestions.map((school, index) => (
                      <li
                        key={index}
                        onClick={() => handleSuggestionClick(school)}
                        className="cursor-pointer px-4 py-3 transition hover:bg-blue-50"
                      >
                        {school}
                      </li>
                    ))}
                  </ul>
                )}
            </div>

            <button
              onClick={handleSearch}
              disabled={isLoading}
              className="rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {isLoading ? "Searching..." : "Search"}
            </button>
          </div>

          {error && (
            <div className="mt-4 text-center font-medium text-red-600">
              {error}
            </div>
          )}
        </div>

        {/* Results */}

        {results.length > 0 && (
          <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
                  <th className="px-6 py-4 text-left">School Name</th>
                  <th className="px-6 py-4 text-left">Student Name</th>
                  <th className="px-6 py-4 text-left">
                    Registration Time
                  </th>
                </tr>
              </thead>

              <tbody>
                {results.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b hover:bg-slate-50 transition"
                  >
                    <td className="px-6 py-4">{item.schoolName}</td>
                    <td className="px-6 py-4">{item.studentName}</td>
                    <td className="px-6 py-4">{item.registrationTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {results.length > 0 && (
          <>
            <div className="mt-8 rounded-xl border-l-4 border-red-500 bg-red-50 p-4 text-center font-semibold text-red-600">
              NOTE: IF THERE IS ANY DISCREPANCY PLEASE MAIL TO
              events@taazatv.com
            </div>

            <div className="mt-6 text-center">
              <Link
                to="/form"
                className="rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-indigo-700"
              >
                Submit Grievance Form
              </Link>
            </div>

            <div className="mt-10">
              <Faq />
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default MedhaData;