import {useContext, useEffect, useState} from 'react'
import {EnableSidebar, PageTitle} from '../../../_metronic/layout/core'
import {
  ListsWidget4,
  ListsWidget5,
  TablesWidget9,
  MixedWidget13,
  MixedWidget14,
  MixedWidget15,
} from '../../../_metronic/partials/widgets'
import {motion as m} from 'framer-motion'
import {GuildContext} from '../../utils/contexts/GuildContext'
import {Navigate} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

import {useFetchGuilds} from '../../utils/hooks/useFetchGuilds'
import {PartialGuild} from '../../utils/types'

const DashboardWelcomeLeavePage = () => {
  const [welcomeMsg, setWelcomeMsg] = useState(true)
  const [leaveMsg, setLeaveMsg] = useState(false)
  const [dmWelcomeMsg, setDmWelcomeMsg] = useState(false)
  const [dmLeaveMsg, setDmLeaveMsg] = useState(false)

  return (
    <>
      {/*begin::Card*/}
      <div className='card my-8'>
        {/*begin::Col*/}
        <div className='card-body p-lg-8'>
          <div className='text-inverse-primary fs-3'>
            <div className='d-flex justify-content-between'>
              <p className='p-0 m-0'>Envoyer un message lorsqu’un membre rejoint le serveur</p>
              <div className='form-check form-switch form-check-custom form-check-solid '>
                <input
                  className='form-check-input w-50px'
                  type='checkbox'
                  value=''
                  id='flexSwitchChecked'
                  checked={welcomeMsg}
                  onClick={() => setWelcomeMsg(!welcomeMsg)}
                />
              </div>
            </div>
            {welcomeMsg ? <div className='separator my-8'></div> : <></>}
          </div>
        </div>
        {/*end::Col*/}
      </div>
      {/*end::Card*/}
      {/*begin::Card*/}
      <div className='card my-8'>
        {/*begin::Col*/}
        <div className='card-body p-lg-8'>
          <div className='text-inverse-primary fs-3'>
            <div className='d-flex justify-content-between'>
              <p className='p-0 m-0'>Envoyer un message lorsqu’un membre quitte le serveur</p>
              <div className='form-check form-switch form-check-custom form-check-solid '>
                <input
                  className='form-check-input w-50px'
                  type='checkbox'
                  value=''
                  id='flexSwitchChecked'
                  checked={leaveMsg}
                  onClick={() => setLeaveMsg(!leaveMsg)}
                />
              </div>
            </div>
          </div>
        </div>
        {/*end::Col*/}
      </div>
      {/*end::Card*/}
      {/*begin::Card*/}
      <div className='card my-8'>
        {/*begin::Col*/}
        <div className='card-body p-lg-8'>
          <div className='text-inverse-primary fs-3'>
            <div className='d-flex justify-content-between'>
              <p className='p-0 m-0'>
                Envoyer un message privé lorsqu'un utilisateur rejoint le serveur
              </p>
              <div className='form-check form-switch form-check-custom form-check-solid '>
                <input
                  className='form-check-input w-50px'
                  type='checkbox'
                  value=''
                  id='flexSwitchChecked'
                  checked={dmWelcomeMsg}
                  onClick={() => setDmWelcomeMsg(!dmWelcomeMsg)}
                />
              </div>
            </div>
          </div>
        </div>
        {/*end::Col*/}
      </div>
      {/*end::Card*/}
      {/*begin::Card*/}
      <div className='card my-8'>
        {/*begin::Col*/}
        <div className='card-body p-lg-8'>
          <div className='text-inverse-primary fs-3'>
            <div className='d-flex justify-content-between'>
              <p className='p-0 m-0'>Envoyer une image lorsqu'un utilisateur rejoint le serveur</p>
              <div className='form-check form-switch form-check-custom form-check-solid '>
                <input
                  className='form-check-input w-50px'
                  type='checkbox'
                  value=''
                  id='flexSwitchChecked'
                  checked={dmLeaveMsg}
                  onClick={() => setDmLeaveMsg(!dmLeaveMsg)}
                />
              </div>
            </div>
          </div>
        </div>
        {/*end::Col*/}
      </div>
      {/*end::Card*/}
    </>
  )
}

const DashboardWelcomeLeave = () => {
  const {guild, updateGuild} = useContext(GuildContext)

  return guild ? (
    <m.div initial={{opacity: 0}} animate={{opacity: 1}}>
      <EnableSidebar>
        <PageTitle breadcrumbs={[]}>Welcomes & Leaves messages</PageTitle>
        <DashboardWelcomeLeavePage />
      </EnableSidebar>
    </m.div>
  ) : (
    <></>
  )
}

export {DashboardWelcomeLeave}
