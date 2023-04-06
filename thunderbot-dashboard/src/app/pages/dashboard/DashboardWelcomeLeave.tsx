import {useContext, useEffect, useState} from 'react'
import {EnableSidebar, PageTitle} from '../../../_metronic/layout/core'

import {motion as m} from 'framer-motion'
import {GuildContext} from '../../utils/contexts/GuildContext'

const DashboardWelcomeLeavePage = () => {
  const {guildConfig} = useContext(GuildContext)
  const [welcomeMsg, setWelcomeMsg] = useState(false)
  const [leaveMsg, setLeaveMsg] = useState(false)
  const [dmWelcomeMsg, setDmWelcomeMsg] = useState(false)
  const [imageJoinMsg, setImageJoinMsg] = useState(false)

  useEffect(() => {
    const initConfig = async () => {
      if (guildConfig?.modulesStates?.welcomeMsg)
        setWelcomeMsg(guildConfig.modulesStates.welcomeMsg)
      if (guildConfig?.modulesStates?.leaveMsg) setWelcomeMsg(guildConfig.modulesStates.leaveMsg)
      if (guildConfig?.modulesStates?.dmWelcomeMsg)
        setWelcomeMsg(guildConfig.modulesStates.dmWelcomeMsg)
      if (guildConfig?.modulesStates?.imageJoinMsg)
        setWelcomeMsg(guildConfig.modulesStates.imageJoinMsg)
    }

    if (!guildConfig) return
    console.log('INIT CONFIG WELCOME PAGE')
    initConfig()
  }, [guildConfig])

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
                  checked={imageJoinMsg}
                  onClick={() => setImageJoinMsg(!imageJoinMsg)}
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
  const {guild} = useContext(GuildContext)

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
