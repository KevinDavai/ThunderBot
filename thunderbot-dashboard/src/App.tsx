import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CategoryPage } from './pages/CategoryPage';
import { HomePage } from './pages/LoginPage';
import { SelectGuildPage } from './pages/SelectGuildPage';
import { GuildContext } from './utils/contexts/GuildContext';
import { useFetchUser } from './utils/hooks/useFetchUser';
import { LoadingOverlay } from './components/LoaderComponents/LoadingOverlay';

function App() {
  const [guildId, setGuildId] = useState('');
  const { user, loading, error } = useFetchUser();
  const updateGuildId = (id: string) => setGuildId(id);

  if (loading) return <LoadingOverlay />;

  return (
    <GuildContext.Provider value={{ guildId, updateGuildId }}>
      {user && !error ? (
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/guilds" element={<SelectGuildPage />} />
            <Route path="/categories" element={<CategoryPage />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </>
      )}
      <Routes>
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </GuildContext.Provider>
  );
}

export default App;
