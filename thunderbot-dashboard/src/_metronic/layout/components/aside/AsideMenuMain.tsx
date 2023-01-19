/* eslint-disable react/jsx-no-target-blank */
import {useContext} from 'react'
import {AsideMenuItem} from './AsideMenuItem'
import {GuildContext} from '../../../../app/utils/contexts/GuildContext'

export function AsideMenuMain() {
  const {guild, updateGuild} = useContext(GuildContext)

  return guild ? (
    <>
      <AsideMenuItem
        to={'/dashboard/' + guild.id}
        icon='/media/icons/duotune/arrows/arr001.svg'
        title={'DASHBOARD'}
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to={'/dashboard/' + guild.id + '/settings'}
        icon='/media/icons/duotune/arrows/arr001.svg'
        title={'SETTINGS'}
        fontIcon='bi-app-indicator'
      />
    </>
  ) : (
    <></>
  )
}
