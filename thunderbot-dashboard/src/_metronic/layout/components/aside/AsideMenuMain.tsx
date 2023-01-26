/* eslint-disable react/jsx-no-target-blank */
import {useContext} from 'react'
import {AsideMenuItem} from './AsideMenuItem'
import {GuildContext} from '../../../../app/utils/contexts/GuildContext'

export function AsideMenuMain() {
  const {guild, updateGuild} = useContext(GuildContext)
  const guildId = window.location.href.match(/\/dashboard\/([^\/]+)(?=\/|$)/)?.[1].toString()

  return (
    <>
      <AsideMenuItem
        to={'/dashboard/' + guildId}
        icon='/media/icons/duotune/arrows/arr001.svg'
        title={'DASHBOARD'}
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to={'/dashboard/' + guildId + '/settings'}
        icon='/media/icons/duotune/arrows/arr001.svg'
        title={'SETTINGS'}
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to={'/dashboard/' + guildId + '/welcome'}
        icon='/media/icons/duotune/arrows/arr001.svg'
        title={'WELCOMES & LEAVES'}
        fontIcon='bi-app-indicator'
      />
    </>
  )
}
