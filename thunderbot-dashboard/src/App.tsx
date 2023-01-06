import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CategoryPage } from './pages/CategoryPage';
import { HomePage } from './pages/HomePage';
import { SelectGuildPage } from './pages/SelectGuildPage';
import { GuildContext } from './utils/contexts/GuildContext';

function App() {
  const [guildId, setGuildId] = useState('');

  const updateGuildId = (id: string) => setGuildId(id);

  return (
    <GuildContext.Provider value={{ guildId, updateGuildId }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guilds" element={<SelectGuildPage />} />
        <Route path="/categories" element={<CategoryPage />} />
      </Routes>
    </GuildContext.Provider>
  );
}

export default App;
