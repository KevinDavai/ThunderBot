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
  const {ownerGuilds, mutualGuilds, error} = useFetchGuilds()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const {guild, updateGuild} = useContext(GuildContext)

  useEffect(() => {
    const checkGuilds = async () => {
      if (mutualGuilds) {
        const guildId = window.location.href.match(/\/dashboard\/([^\/]+)(?=\/|$)/)?.[1]
        console.log(guildId?.toString())
        mutualGuilds?.forEach((g) => {
          if (g.id == guildId?.toString()) {
            updateGuild(g)
          }
        })
        setLoading(false)
      }
    }

    checkGuilds()
  }, [mutualGuilds])

  useEffect(() => {
    if (loading === false) {
      console.log('useeffect')
      if (!guild) navigate('/dashboard')
    }
  }, [loading])

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

  return (
    <PageDataProvider>
      <div className='d-flex flex-column flex-root'>
        <div className='page d-flex flex-row flex-column-fluid'>
          <AsideDefault />
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

      {/* begin:: Drawers */}
      <ActivityDrawer />
      <RightToolbar />
      <DrawerMessenger />
      {/* end:: Drawers */}

      {/* begin:: Modals */}
      <InviteUsers />
      <UpgradePlan />
      {/* end:: Modals */}
      <ScrollTop />
    </PageDataProvider>
  )
}

export {MasterLayout}
