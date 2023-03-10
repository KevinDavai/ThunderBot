import {UserContext} from '../../../../app/utils/contexts/UserContext'
import {getAvatarURL} from '../../../../app/utils/helpers'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Search, ThemeModeSwitcher, UserMenu} from '../../../partials'
import {useContext} from 'react'

const Topbar = () => {
  const {user} = useContext(UserContext)

  return (
    <div className='d-flex align-items-center flex-shrink-0'>
      {/* Search */}
      {/* <Search
        className='w-lg-250px'
        mobileToggleBtnClass='btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline w-40px h-40px'
      /> */}

      {/* begin::Activities */}
      <div className='d-flex align-items-center ms-3 ms-lg-4'>
        {/* begin::Drawer toggle */}
        <div className='btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline w-40px h-40px position-relative'>
          <KTSVG path='/media/icons/duotune/general/gen007.svg' className='svg-icon-1' />
          <span className='bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink'></span>
        </div>
        {/* end::Drawer toggle */}
      </div>
      {/* end::Activities */}

      {/* CHAT */}
      {/* <div className='d-flex align-items-center ms-3 ms-lg-4'> */}
      {/* begin::Drawer wrapper */}
      {/* <div
          className='btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline w-40px h-40px position-relative'
          id='kt_drawer_chat_toggle'
        >
          <KTSVG path='/media/icons/duotune/communication/com003.svg' className='svg-icon-1' />

          <span className='bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink'></span>
        </div> */}
      {/* end::Drawer wrapper */}
      {/* </div> */}

      {/* begin::Sidebar Toggler */}
      {/* <button
        className='btn btn-icon btn-active-icon-primary w-40px h-40px  ms-2 me-n2 '
        id='kt_sidebar_toggler'
      >
        <KTSVG path='/media/icons/duotune/coding/cod001.svg' className='svg-icon-2x' />
      </button> */}
      {/* end::Sidebar Toggler */}

      {/* begin::Theme mode */}
      {/* <div className={'d-flex align-items-center ms-3 ms-lg-4'}>
        <ThemeModeSwitcher toggleBtnClass='btn-color-gray-700 btn-active-color-primary btn-outline w-40px h-40px' />
      </div> */}
      {/* end::Theme mode */}

      {/* begin::User button */}
      {
        <div className='btn btn-icon btn-color-gray-700 btn-active-color-primary  w-40px h-40px position-relative ms-3 ms-lg-4'>
          <div
            className='symbol symbol-circle symbol-40px '
            data-kt-menu-trigger='click'
            data-kt-menu-overflow='false'
            data-kt-menu-placement='top-end'
          >
            <img src={getAvatarURL(user)} alt='avatar' />
            <UserMenu />
          </div>
        </div>
      }
      {/* end::Theme mode */}
    </div>
  )
}

export {Topbar}
