import {motion as m} from 'framer-motion'
import {GuildContext} from '../../utils/contexts/GuildContext'
import {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {useFetchGuilds} from '../../utils/hooks/useFetchGuilds'
import {GuildMenuItem} from '../../components/GuildMenuItem/GuildMenuItem'

export const GuildsPage = () => {
  const navigate = useNavigate()
  const {updateGuildId} = useContext(GuildContext)
  const {ownerGuilds, mutualGuilds, loading, error} = useFetchGuilds()

  const handleClick = (guildId: string) => {
    updateGuildId(guildId)
    navigate(`${guildId}/home`)
  }
  return (
    <>
      <div className='absolute mask-bg'></div>
      <div className='guilds-bg'>
        <div className='container mt-20 d-flex flex-column bgi-no-repeat bgi-size-cover bgi-position-x-center pb-0'>
          <m.div
            className='d-flex justify-content-center flex-wrap mx-auto mt-15 p-10 gap-10'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
          >
            <div className='d-flex'>
              <h1 className='text-uppercase fs-1 mb-10'>Sélectionner un serveur</h1>
            </div>

            <div className='d-flex justify-content-center flex-wrap mx-auto mt-5 p-10 gap-4 relative'>
              <div border-radius='50% 200% 40% 80%' className='radial-bg'></div>
              <div border-radius='50% 200% 40% 80%' className='radial-bg-2'></div>

              {ownerGuilds?.map((guild) => (
                <div key={guild.id}>
                  {mutualGuilds?.some((mutualGuild) => mutualGuild.id === guild.id) ? (
                    <div onClick={() => handleClick(guild.id)}>
                      <GuildMenuItem ownerGuild={guild} isMutual={true} />
                    </div>
                  ) : (
                    <div onClick={() => handleClick(guild.id)}>
                      <GuildMenuItem ownerGuild={guild} isMutual={false} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </>
  )
}
