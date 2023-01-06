type Props = {
  guild: {
    id: string;
    name: string;
    icon: string;
  };
};

export const GuildMenuItem = ({ guild }: Props) => (
  <div className="flex items-center space-x-4 bg-stone-800 shadow-xl border border-neutral-800 rounded-xl p-2 cursor-pointer">
    <div className="flex-1 min-w-0">
      <div className="w-8 h-8 rounded-full bg-white"></div>
    </div>
    <div className="inline-flex items-center text-sm text-white-900">{guild.name}</div>
  </div>
);
