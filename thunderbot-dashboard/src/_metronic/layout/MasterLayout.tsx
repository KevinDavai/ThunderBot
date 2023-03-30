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
import {getGuildConfig} from '../../app/utils/api'
import {GuildConfigType, PartialGuild} from '../../app/utils/types'

const MasterLayout = () => {
  const {ownerGuilds, mutualGuilds, loading} = useFetchGuilds()
  const {guild, updateGuild} = useContext(GuildContext)
  const [config, setConfig] = useState<GuildConfigType>()
  const [loadingConfig, setLoadingConfig] = useState(true)
  const navigate = useNavigate()

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
    const isGuildExist = async (guildId: string) => {
      let bool = false
      let guildFinded: PartialGuild = {
        id: '',
        name: '',
        icon: '',
        owner: false,
        permissions: '',
        features: [],
      }

      mutualGuilds?.forEach((g) => {
        if (g.id == guildId?.toString()) {
          guildFinded = g
          bool = true
        }
      })

      return {bool, guildFinded}
    }

    const checkAll = async () => {
      const guildId = window.location.href.match(/\/dashboard\/([^\/]+)(?=\/|$)/)?.[1].toString()

      if (guildId) {
        const {bool, guildFinded} = await isGuildExist(guildId)
        if (!bool) navigate('/dashboard') // TODO: Add error redirect for popup
        updateGuild(guildFinded)
      }
    }

    if (!loading && !guild) {
      checkAll()
    }
  }, [loading])

  useEffect(() => {
    console.log('useEffectGuild')
    if (guild) {
      setLoadingConfig(true)
      getGuildConfig(guild.id)
        .then(({data}) => {
          setConfig(data)
        })
        .catch((err) => console.log(err))
        .finally(() => setLoadingConfig(false))
    }
  }, [guild])

  return (
    <PageDataProvider>
      <div className='d-flex flex-column flex-root'>
        <div className='page d-flex flex-row flex-column-fluid'>
          <AsideDefault mutualGuilds={mutualGuilds} loading={loading} />
          <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
            <HeaderWrapper />

            <div id='kt_content' className='content d-flex flex-column flex-column-fluid'>
              {loadingConfig ? (
                <>
                  <span className='spinner-border spinner-border-xl ms-auto me-auto mt-auto mb-auto '></span>
                </>
              ) : (
                <>
                  <Content>
                    <Outlet />
                  </Content>
                </>
              )}
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
