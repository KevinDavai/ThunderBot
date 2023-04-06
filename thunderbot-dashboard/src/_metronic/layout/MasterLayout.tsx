import {useEffect, useContext, useState} from 'react'
import {Outlet, useNavigate, useParams} from 'react-router-dom'
import {AsideDefault} from './components/aside/AsideDefault'
import {Footer} from './components/Footer'
import {HeaderWrapper} from './components/header/HeaderWrapper'

import {Content} from './components/Content'
import {PageDataProvider} from './core'
import {useLocation} from 'react-router-dom'
import {MenuComponent} from '../assets/ts/components'
import {Sidebar} from './components/Sidebar'
import {useFetchGuilds} from '../../app/utils/hooks/useFetchGuilds'
import {GuildContext} from '../../app/utils/contexts/GuildContext'
import {getGuildConfig} from '../../app/utils/api'
import {GuildConfigType, PartialGuild} from '../../app/utils/types'
import {LoadingOverlay} from '../../app/components/LoaderComponents/LoadingOverlay'

const MasterLayout = () => {
  const {id} = useParams()
  const {mutualGuilds, loading} = useFetchGuilds()
  const {guild, updateGuild, updateGuildConfig, loadingConfig, updateLoadingConfig} =
    useContext(GuildContext)
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
        if (g.id === guildId?.toString()) {
          guildFinded = g
          bool = true
        }
      })

      return {bool, guildFinded}
    }

    const checkAll = async () => {
      console.log(id)
      if (id) {
        const {bool, guildFinded} = await isGuildExist(id)
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
      updateLoadingConfig(true)
      getGuildConfig(guild.id)
        .then(({data}) => {
          updateGuildConfig(data)
        })
        .catch((err) => console.log(err))
        .finally(() => setTimeout(() => updateLoadingConfig(false), 1000))
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
                  <LoadingOverlay className='mb-20'></LoadingOverlay>
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
