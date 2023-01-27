import {useEffect, useContext, useState} from 'react'
import {Outlet, useNavigate} from 'react-router-dom'
import {AsideDefault} from './components/aside/AsideDefault'
import {Footer} from './components/Footer'
import {HeaderWrapper} from './components/header/HeaderWrapper'
import {RightToolbar} from '../partials/layout/RightToolbar'
import {ScrollTop} from './components/ScrollTop'
import {Content} from './components/Content'
import {PageDataProvider} from './core'
import {useLocation} from 'react-router-dom'
import {DrawerMessenger, ActivityDrawer, InviteUsers, UpgradePlan} from '../partials'
import {MenuComponent} from '../assets/ts/components'
import {Sidebar} from './components/Sidebar'
import {useFetchGuilds} from '../../app/utils/hooks/useFetchGuilds'
import {GuildContext} from '../../app/utils/contexts/GuildContext'

const MasterLayout = () => {
  const {ownerGuilds, mutualGuilds, loading} = useFetchGuilds()
  const {guild, updateGuild} = useContext(GuildContext)

  const location = useLocation()
  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [])

  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization()
    }, 500)
  }, [location.key])

  useEffect(() => {
    const checkGuilds = async () => {
      if (!loading && !guild) {
        const guildId = window.location.href.match(/\/dashboard\/([^\/]+)(?=\/|$)/)?.[1]
        console.log(guildId?.toString())
        if (guildId?.toString()) {
          mutualGuilds?.forEach((g) => {
            if (g.id == guildId?.toString()) {
              console.log('update guild')
              updateGuild(g)
            }
          })
        }
      }
    }

    checkGuilds()
  }, [loading])

  return (
    <PageDataProvider>
      <div className='d-flex flex-column flex-root'>
        <div className='page d-flex flex-row flex-column-fluid'>
          <AsideDefault mutualGuilds={mutualGuilds} loading={loading} />
          <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
            <HeaderWrapper />

            <div id='kt_content' className='content d-flex flex-column flex-column-fluid'>
              <Content>
                <Outlet />
              </Content>
            </div>
            <Footer />
          </div>
          <Sidebar />
        </div>
      </div>
    </PageDataProvider>
  )
}

export {MasterLayout}
