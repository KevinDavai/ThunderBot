import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GuildMenuItem } from '../components/GuildMenuItem';
import { GuildContext } from '../utils/contexts/GuildContext';
import { mockGuilds } from '../__mocks__/guilds';

export const SelectGuildPage = () => {
  const navigate = useNavigate();
  const { updateGuildId } = useContext(GuildContext);

  const handleClick = (guildId: string) => {
    updateGuildId(guildId);
    navigate('/categories');
  };

  return (
    <div className="container mx-auto flex h-screen justify-center items-center">
      <ul className="w-1/2">
        {mockGuilds.map((guild) => (
          <li className="pb-5" onClick={() => handleClick(guild.id)} key={guild.id}>
            <GuildMenuItem guild={guild} />
          </li>
        ))}
      </ul>
    </div>
  );
};
