import React, { useState } from 'react';
import axios from 'axios';
import apiUrl from '../../components/apiurl';

const VectorSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async () => {
    const response = await axios.post(`${apiUrl.url}searchai`, { query });
    setResults(response.data);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask something..."
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {results.map((r, i) => (
          <li key={i}>{r.metadata?.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default VectorSearch;
