import React, { useState } from 'react';
import useFetchJokes from './hooks/useFetchJokes';

import Title from './components/Title';
import Search from './components/Search';
import Cards from './components/Cards';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const {jokes, loading} = useFetchJokes(searchTerm);

  return (
    <div className="App">
      <Title />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Cards jokes={jokes} isLoading={loading} />
    </div>
  );
}

export default App;
