import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface StudentData {
  schoolName: string;
  studentName: string;
  registrationTime: string;
  venue: string;
  date: string;
}

function MedhaData() {
  const { city = '', classType = '' } = useParams<{ city?: string; classType?: string }>();
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedSchool, setSelectedSchool] = useState('');
  const [results, setResults] = useState<StudentData[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!city || !classType) {
      navigate('/');
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
        const res = await axios.get('http://localhost:8000/api/schools', {
          params: { 
            city: city.toLowerCase(), 
            classType: classType.replace('class-', ''),
            query: search 
          },
        });
        setSuggestions(res.data);
      } catch (err) {
        console.error('Error fetching suggestions:', err);
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
      setError('Please enter a school name');
      setResults([]);
      return;
    }

    try {
      setIsLoading(true);
      const res = await axios.get('http://localhost:8000/api/search', {
        params: { 
          city: city.toLowerCase(),
          classType: classType.replace('class-', ''),
          school: search.trim() 
        },
      });
      
      if (res.data.length === 0) {
        setError(`No results found for ${search.trim()}`);
      } else {
        setError('');
      }
      
      setResults(res.data);
      setSelectedSchool(search.trim());
      setHasSearched(true);
    } catch (err) {
      console.error('Error searching:', err);
      setError('Failed to fetch data. Please try again.');
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
    <div className="min-h-screen p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center capitalize">
        Medha Samman {classType.replace('-', ' ')} - {city}
      </h1>

      <div className="mb-8">
        <div className="relative max-w-md mx-auto">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search school name..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setError('');
                }}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              
              {isLoading && suggestions.length === 0 && search.length > 1 && !selectedSchool && (
                <div className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                  <div className="text-center py-2 text-gray-500">Loading...</div>
                </div>
              )}

              {suggestions.length > 0 && !selectedSchool && !hasSearched && (
                <ul className="absolute top-full mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                  {suggestions.map((school, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-0"
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
              className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-lg disabled:bg-amber-400 disabled:cursor-not-allowed transition-colors"
            >
              {results.length > 0 ? 'Results' : 'Search'}
            </button>
          </div>
          
          {error && (
            <div className="mt-2 text-red-500 text-sm text-center">{error}</div>
          )}
        </div>
      </div>

      {results.length > 0 ? (
        <div className="overflow-x-auto shadow-md rounded-lg">
          <table className="min-w-full bg-white">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">School</th>
                <th className="py-3 px-4 text-left">Student</th>
                <th className="py-3 px-4 text-left">Venue</th>
                <th className="py-3 px-4 text-left">Date</th>
                <th className="py-3 px-4 text-left">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {results.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3 px-4">{item.schoolName}</td>
                  <td className="py-3 px-4">{item.studentName}</td>
                  <td className="py-3 px-4">{item.venue}</td>
                  <td className="py-3 px-4">{new Date(item.date).toLocaleDateString()}</td>
                  <td className="py-3 px-4">{item.registrationTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : hasSearched && !error && (
        <div className="text-center py-10 text-gray-500">
          No results found for {search}
        </div>
      )}
    </div>
  );
}

export default MedhaData;