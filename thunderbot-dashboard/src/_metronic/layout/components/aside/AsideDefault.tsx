import {Link} from 'react-router-dom'
import clsx from 'clsx'
import {useLayout} from '../../core'
import {toAbsoluteUrl} from '../../../helpers'
import {AsideMenu} from './AsideMenu'
import {AsideUserMenu} from '../../../partials'
import {useThemeMode} from '../../../partials/layout/theme-mode/ThemeModeProvider'
import {useContext} from 'react'
import {GuildContext} from '../../../../app/utils/contexts/GuildContext'

const AsideDefault = () => {
  const {classes} = useLayout()
  const {mode} = useThemeMode()
  const {guild} = useContext(GuildContext)

  return (
    <div
      id='kt_aside'
      className={clsx('aside py-9', classes.aside.join(' '))}
      data-kt-drawer='true'
      data-kt-drawer-name='aside'
      data-kt-drawer-activate='{default: true, lg: false}'
      data-kt-drawer-overlay='true'
      data-kt-drawer-width="{default:'100%', '100%': '100%'}"
      data-kt-drawer-direction='start'
      data-kt-drawer-toggle='#kt_aside_toggle'
    >
      {/* begin::Brand */}
      <div className=' flex-column-auto px-9 mb-9' id='kt_aside_logo'>
        {/* begin::Logo */}

        <a
          href='#'
          className='text-white d-flex align-items-center w-100 justify-content-between'
          data-kt-menu-trigger={'click'}
          data-kt-menu-attach='parent'
          data-kt-menu-placement={'bottom'}
        >
          <div className='d-flex justify-content-center align-items-center gap-6 '>
            <img className='rounded-circle min-w-40px min-h-40px'></img>
            <p className='m-0 fs-4'>{guild?.name}</p>
          </div>
          <i className='fa-solid fa-chevron-down justify-self-end'></i>
        </a>
        <div
          className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-title-gray-700 menu-icon-muted menu-active-bg menu-state-primary fw-semibold py-4 fs-base w-250px mt-5'
          data-kt-menu='true'
        >
          <div className='menu-item px-3 my-0'>
            <a href='#' className={clsx('menu-link px-3 py-2')}>
              <span className='menu-icon' data-kt-element='icon'></span>
              <span className='menu-title'>Light</span>
            </a>
          </div>
        </div>
        {/* end::Logo */}
      </div>
      {/* end::Brand */}

      {/* begin::Aside menu */}
      <div id='kt_aside_menu' className='aside-menu flex-column-fluid ps-5 pe-3 mb-9'>
        <AsideMenu asideMenuCSSClasses={classes.asideMenu} />
      </div>
      {/* end::Aside menu */}

      {/* begin::Footer */}
      <div className='aside-footer flex-column-auto px-9' id='kt_aside_footer'>
        <AsideUserMenu />
      </div>
      {/* end::Footer */}
    </div>
  )
}

export {AsideDefault}
