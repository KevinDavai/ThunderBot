import {FC, useState, useEffect} from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import {App} from '../App'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import {LoginPage} from '../pages/home/LoginPage'
import {GuildContext} from '../utils/contexts/GuildContext'
import {useFetchUser} from '../utils/hooks/useFetchUser'
import {setTimeout} from 'timers'
import {LoadingOverlay} from '../components/LoaderComponents/LoadingOverlay'
import {GuildsPage} from '../pages/home/GuildsPage'
import {PartialGuild, User} from '../utils/types'
import {DashboardSettings} from '../pages/dashboard/DashboardSettings'
import {DashboardWelcomeLeave} from '../pages/dashboard/DashboardWelcomeLeave'
import {UserContext} from '../utils/contexts/UserContext'

const AppRoutes: FC = () => {
  const {user, loading, error} = useFetchUser()
  const [guild, setGuild] = useState<PartialGuild>()
  const updateGuild = (guild: PartialGuild) => setGuild(guild)

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
                  {user.id != '' && !error ? (
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
                      <Route path='*' element={<LoginPage />} />
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
