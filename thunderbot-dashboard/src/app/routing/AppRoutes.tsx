import {FC, useState} from 'react'
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

const AppRoutes: FC = () => {
  const {user, loading, error} = useFetchUser()
  const [guildId, setGuildId] = useState('')
  const updateGuildId = (id: string) => setGuildId(id)

  return (
    <GuildContext.Provider value={{guildId, updateGuildId}}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            {loading ? (
              <>
                <Route path='*' element={<LoadingOverlay />} />
              </>
            ) : (
              <>
                {user && !error ? (
                  <>
                    <Route path='guilds' element={<GuildsPage />}></Route>
                    <Route element={<MasterLayout />}>
                      <Route path='/dashboard' element={<DashboardWrapper />} />
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
  )
}

export {AppRoutes}
