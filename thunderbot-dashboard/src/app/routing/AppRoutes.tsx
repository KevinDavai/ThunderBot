import {FC, useState} from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import {App} from '../App'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import { LoginPage } from '../pages/home/LoginPage'
import { GuildContext } from '../utils/contexts/GuildContext';
import { useFetchUser } from '../utils/hooks/useFetchUser';
import { setTimeout } from 'timers'


const AppRoutes: FC = () => {
  const [guildId, setGuildId] = useState('');
  const { user, loading, error } = useFetchUser();
  const updateGuildId = (id: string) => setGuildId(id);

  return (
    <GuildContext.Provider value={{ guildId, updateGuildId }}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            { loading ? (
              <>
                <Route path='*' element={<h1>loading...</h1>}/>
              </>
            ) : (
              <>
                {user && !error ? (
                  <>
                    <Route element={<MasterLayout />}>
                      <Route path='/dashboard' element={<DashboardWrapper />} />
                    </Route>
                    <Route path='/' element={<LoginPage/>}/>
                  </>
                ) : (
                  <>
                    <Route path='/' element={<LoginPage/>}/>
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
