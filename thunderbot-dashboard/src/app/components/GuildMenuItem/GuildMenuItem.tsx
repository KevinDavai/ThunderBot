import {getIconURL, getShortName} from '../../utils/helpers'
import {PartialGuild} from '../../utils/types'
import {motion as m} from 'framer-motion'

type Props = {
  ownerGuild: PartialGuild
  isMutual: boolean
}

export const GuildMenuItem = ({ownerGuild, isMutual}: Props) => {
  const iconGuild = getIconURL(ownerGuild)
  const shortName = getShortName(ownerGuild)
  return (
    <>
      <m.div initial={{opacity: 0}} animate={{opacity: 1}}>
        <div className='card card-xl-stretch guild-card mb-xl-10 theme-dark-bg-body mx-4'>
          <div className='guild-card-svg'>
            {ownerGuild.icon ? (
              <svg
                version='1.1'
                id='Calque_1'
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                x='0px'
                y='0px'
                className='enable-background-guild-card'
              >
                <g>
                  <defs>
                    <clipPath id='theClippingPath'>
                      <path
                        fill='pink'
                        id='SVGID_1_'
                        d='M204,106v21.5c0,17.9,14.5,32.5,32.5,32.5H300V25c0-13.8-11.2-25-25-25H25C11.2,0,0,11.2,0,25v135h63.5
c17.9,0,32.5-14.5,32.5-32.5V106H204z'
                      />
                    </clipPath>
                  </defs>
                  <g className='clip-path-svg-guild-card'>
                    <image
                      className='overflow-visible bg-blend'
                      width='100%'
                      href={iconGuild}
                      clipPath='url(#theClippingPath)'
                    ></image>
                  </g>
                </g>
              </svg>
            ) : (
              <svg
                version='1.1'
                id='Calque_1'
                xmlns='http://www.w3.org/2000/svg'
                width='100%'
                height='100%'
                x='0px'
                y='0px'
                className='enable-background-guild-card'
              >
                <path
                  fill='#151521'
                  d='M204,106v21.5c0,17.9,14.5,32.5,32.5,32.5H300V25c0-13.8-11.2-25-25-25H25C11.2,0,0,11.2,0,25v135h63.5
c17.9,0,32.5-14.5,32.5-32.5V106H204z'
                />
              </svg>
            )}

            {ownerGuild.icon ? (
              <img src={iconGuild}></img>
            ) : (
              <div className='icon-null-guild'>
                <p>{shortName}</p>
              </div>
            )}
          </div>
          <div className='d-flex justify-content-between sub-guild-card w-100'>
            <div className='d-flex justify-content-center flex-column gap-1 px-6 align-self-center'>
              <p className='fs-4 text-white lh-sm pb-2'>{ownerGuild.name}</p>
              <p className='fs-7 text-gray-600'>{ownerGuild.owner ? 'Propriétaire' : ''}</p>
            </div>
            {isMutual ? (
              <a className='btn btn-primary me-6 align-self-start'>Ouvrir</a>
            ) : (
              <a
                className='btn btn-light-info me-6 align-self-start'
                href={process.env.REACT_APP_DISCORD_INVITE + '&guild_id=' + ownerGuild.id}
              >
                Configurer
              </a>
            )}
          </div>
        </div>
      </m.div>
    </>
  )
}
