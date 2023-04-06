import {motion as m} from 'framer-motion'
import {GuildContext} from '../../utils/contexts/GuildContext'
import {useContext, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useFetchGuilds} from '../../utils/hooks/useFetchGuilds'
import {GuildMenuItem} from '../../components/GuildMenuItem/GuildMenuItem'
import {GuildMenuItemSkeleton} from '../../components/GuildMenuItem/GuildMenuItemSkeleton'
import {PartialGuild} from '../../utils/types'

export const GuildsPage = () => {
  const navigate = useNavigate()
  const {guild, updateGuild} = useContext(GuildContext)
  const {ownerGuilds, mutualGuilds, loading} = useFetchGuilds()

  const handleClick = (guild: PartialGuild) => {
    updateGuild(guild)
    navigate(`${guild.id}`)
  }
  return (
    <>
      <div className='absolute mask-bg'></div>
      <div className='guilds-bg'>
        <div className='container mt-20 d-flex flex-column bgi-no-repeat bgi-size-cover bgi-position-x-center pb-0'>
          <div className='d-flex justify-content-center flex-wrap mx-auto mt-15 p-10 gap-10'>
            <div className='d-flex'>
              <h1 className='text-uppercase fs-1 mb-10'>Sélectionner un serveur</h1>
            </div>

            <div className='d-flex justify-content-center flex-wrap mx-auto mt-5 p-10 gap-4 relative w-100'>
              <div border-radius='50% 200% 40% 80%' className='radial-bg'></div>
              <div border-radius='50% 200% 40% 80%' className='radial-bg-2'></div>
            </div>
            {loading ? (
              <>
                <GuildMenuItemSkeleton />
                <GuildMenuItemSkeleton />
                <GuildMenuItemSkeleton />
              </>
            ) : (
              <>
                {ownerGuilds?.map((guild) => (
                  <div key={guild.id}>
                    {mutualGuilds?.some((mutualGuild) => mutualGuild.id === guild.id) ? (
                      <div onClick={() => handleClick(guild)}>
                        <GuildMenuItem ownerGuild={guild} isMutual={true} />
                      </div>
                    ) : (
                      <div>
                        <GuildMenuItem ownerGuild={guild} isMutual={false} />
                      </div>
                    )}
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
