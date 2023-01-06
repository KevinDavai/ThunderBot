import { useContext } from 'react';
import { GuildContext } from '../utils/contexts/GuildContext';

export const CategoryPage = () => {
  const { guildId } = useContext(GuildContext);

  return (
    <div className="container mx-auto flex h-screen justify-center items-center">
      CategoryPage {guildId}
    </div>
  );
};
