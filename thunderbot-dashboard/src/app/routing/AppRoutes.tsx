import {FC, useState, useEffect} from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import {App} from '../App'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import {LoginPage} from '../pages/home/LoginPage'
import {GuildContext} from '../utils/contexts/GuildContext'
import {useFetchUser} from '../utils/hooks/useFetchUser'
import {LoadingOverlay} from '../components/LoaderComponents/LoadingOverlay'
import {GuildsPage} from '../pages/home/GuildsPage'
import {GuildConfigType, PartialGuild, User} from '../utils/types'
import {DashboardSettings} from '../pages/dashboard/DashboardSettings'
import {DashboardWelcomeLeave} from '../pages/dashboard/DashboardWelcomeLeave'
import {UserContext} from '../utils/contexts/UserContext'
import {isEqual} from 'lodash'

const AppRoutes: FC = () => {
  const {user, loading, error} = useFetchUser()
  const [guild, setGuild] = useState<PartialGuild>()
  const [guildConfig, setGuildConfig] = useState<GuildConfigType>()
  const [loadingConfig, setLoadingConfig] = useState(true)
  const updateGuild = (guild: PartialGuild) => setGuild(guild)
  const updateGuildConfig = (data: GuildConfigType) => setGuildConfig(data)
  const updateLoadingConfig = (bool: boolean) => setLoadingConfig(bool)

  const [isChanged, setIsChanged] = useState(false)
  const [editedData, setEditedData] = useState({})
  const [apiUrl, setApiUrl] = useState('')
  const updateIsChanged = (oldObj: object, newOjb: object) => {
    if (isEqual(oldObj, newOjb)) {
      setIsChanged(false)
    } else setIsChanged(true)
  }
  const updateData = (data: object) => setEditedData(data)
  const updateApi = (url: string) => setApiUrl(url)

  const [userState, setUserState] = useState<User>()
  const updateUser = (user: User) => setUserState(user)

  useEffect(() => {
    if (user) {
      updateUser(user)
    }
  }, [user])

  return (
    <UserContext.Provider value={{user, updateUser}}>
      <GuildContext.Provider
        value={{
          guild,
          updateGuild,
          guildConfig,
          updateGuildConfig,
          loadingConfig,
          updateLoadingConfig,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route element={<App />}>
              {loading ? (
                <>
                  <Route path='*' element={<LoadingOverlay />} />
                </>
              ) : (
                <>
                  {user.id !== '' && !error ? (
                    <>
                      <Route path='dashboard' element={<GuildsPage />}></Route>
                      <Route element={<MasterLayout />}>
                        <Route path='dashboard/:id' element={<DashboardWrapper />} />
                        <Route path='dashboard/:id/settings' element={<DashboardSettings />} />
                        <Route path='dashboard/:id/welcome' element={<DashboardWelcomeLeave />} />
                      </Route>
                      <Route path='/' element={<LoginPage />} />
                    </>
                  ) : (
                    <>
                      <Route path='*' element={<Navigate to='/' />} />
                      <Route path='/' element={<LoginPage />} />
                    </>
                  )}
                </>
              )}
            </Route>
          </Routes>
        </BrowserRouter>
      </GuildContext.Provider>
    </UserContext.Provider>
  )
}

export {AppRoutes}
