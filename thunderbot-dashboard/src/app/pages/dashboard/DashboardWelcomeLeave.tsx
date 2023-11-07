import {useContext, useEffect, useRef, useState} from 'react'
import {EnableSidebar, PageTitle} from '../../../_metronic/layout/core'

import {motion as m} from 'framer-motion'
import {GuildContext} from '../../utils/contexts/GuildContext'
import {useOutletContext} from 'react-router-dom'

const DashboardWelcomeLeavePage = () => {
  const {guildConfig} = useContext(GuildContext)

  const {setOldData, setNewData} = useOutletContext() as any // <-- access context value

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

  useEffect(() => {
    setOldData(welcomeConfig)
  }, [])

  useEffect(() => {
    setNewData(welcomeConfig)
  }, [welcomeConfig])

  const updateWelcomeMsgStatut = (bool: boolean) => {
    setWelcomeConfig({
      ...welcomeConfig,
      welcomeMsg: {
        statut: bool,
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

  return (
    <>
      {/*begin::Card*/}
      <div className='card'>
        <div
          className='card-header border-0 cursor-pointer d-flex justify-content-between'
          data-bs-toggle='collapse'
          data-bs-target='#kt_account_deactivate'
          aria-expanded='false'
          aria-controls='kt_account_deactivate'
          onClick={() => updateWelcomeMsgStatut(!welcomeConfig.welcomeMsg?.statut)}
        >
          <div className='card-title m-0'>
            <h4 className='fw-bolder m-0'>
              Envoyer un message lorsqu’un membre rejoint le serveur
            </h4>
          </div>
          <div className='form-check form-switch form-check-custom form-check-solid '>
            <input
              className='form-check-input w-50px'
              type='checkbox'
              id='flexSwitchChecked'
              checked={welcomeConfig?.welcomeMsg?.statut}
            />
          </div>
        </div>
        <div id='kt_account_deactivate' className='collapse'>
          <div className='px-9'>
            <div className='separator my-4'></div>
          </div>

          <div className='card-body px-9 py-5'>
            <div className='col-lg-4 col-sm-4'>
              <label className='form-label required ps-1 pb-2'>
                Salon des Messages de Bienvenue
              </label>
              <div className='form-control form-control-lg bg-main-light-gray'></div>
            </div>
          </div>
          <div className='px-9'>
            <div className='separator my-4'></div>
          </div>
        </div>
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
