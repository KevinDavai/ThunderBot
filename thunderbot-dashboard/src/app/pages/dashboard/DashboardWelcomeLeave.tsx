import {useContext, useEffect, useState} from 'react'
import {EnableSidebar, PageTitle} from '../../../_metronic/layout/core'

import {motion as m} from 'framer-motion'
import {GuildContext} from '../../utils/contexts/GuildContext'

const DashboardWelcomeLeavePage = () => {
  const {guildConfig} = useContext(GuildContext)

  const initialConfig = {
    welcomeMsg: {
      statut: false,
    },
    leaveMsg: {
      statut: false,
    },
    dmWelcomeMsg: {
      statut: false,
    },
    welcomeImage: {
      statut: false,
    },
  }

  const [welcomeConfig, setWelcomeConfig] = useState(
    guildConfig!.plugins?.welcomePlugin || initialConfig
  )

  const updateWelcomeMsgStatut = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWelcomeConfig({
      ...welcomeConfig,
      welcomeMsg: {
        statut: e.target.checked,
      },
    })
  }

  const updateLeaveMsgStatut = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWelcomeConfig({
      ...welcomeConfig,
      leaveMsg: {
        statut: e.target.checked,
      },
    })
  }

  const updateDmWelcomeMsgStatut = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWelcomeConfig({
      ...welcomeConfig,
      dmWelcomeMsg: {
        statut: e.target.checked,
      },
    })
  }

  const updatewelcomeImageStatut = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWelcomeConfig({
      ...welcomeConfig,
      welcomeImage: {
        statut: e.target.checked,
      },
    })
  }

  console.log(welcomeConfig)
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
                  id='flexSwitchChecked'
                  checked={welcomeConfig?.welcomeMsg?.statut}
                  onChange={updateWelcomeMsgStatut}
                />
              </div>
            </div>
            {welcomeConfig?.welcomeMsg?.statut ? <div className='separator my-8'></div> : <></>}
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
                  id='flexSwitchChecked'
                  checked={welcomeConfig?.leaveMsg?.statut}
                  onChange={updateLeaveMsgStatut}
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
                  checked={welcomeConfig?.dmWelcomeMsg?.statut}
                  onChange={updateDmWelcomeMsgStatut}
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
                  checked={welcomeConfig?.welcomeImage?.statut}
                  onChange={updatewelcomeImageStatut}
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
