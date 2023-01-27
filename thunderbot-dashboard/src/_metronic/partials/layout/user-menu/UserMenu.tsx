/* eslint-disable jsx-a11y/anchor-is-valid */
import {Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../helpers'
import {Languages} from '../header-menus/Languages'
import {UserContext} from '../../../../app/utils/contexts/UserContext'
import {useContext} from 'react'

const UserMenu = () => {
  const {user} = useContext(UserContext)

  return (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px'
      data-kt-menu='true'
    >
      {/* begin::Menu item */}
      <div className='menu-item px-3'>
        <div className='menu-content d-flex align-items-center px-3'>
          {/* begin::Avatar */}
          <div className='symbol symbol-50px me-5'>
            <img alt='Logo' src={toAbsoluteUrl('/media/avatars/300-1.jpg')} />
          </div>
          {/* end::Avatar */}

          {/* begin::Username */}
          <div className='d-flex flex-column'>
            <div className='fw-bolder d-flex align-items-center fs-5'>
              {user.username + '#' + user.discriminator}
              <span className='badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2'>Pro</span>
            </div>
          </div>
          {/* end::Username */}
        </div>
      </div>
      {/* end::Menu item */}

      {/* begin::Menu separator */}
      <div className='separator my-2'></div>
      {/* end::Menu separator */}

      {/* begin::Menu item */}
      <div className='menu-item px-5'>
        <Link to={'/crafted/pages/profile'} className='menu-link px-5'>
          My Profile
        </Link>
      </div>
      {/* end::Menu item */}

      {/* begin::Menu item */}
      <div className='menu-item px-5'>
        <a href='#' className='menu-link px-5'>
          <span className='menu-text'>My Projects</span>
          <span className='menu-badge'>
            <span className='badge badge-light-danger badge-circle fw-bolder fs-7'>3</span>
          </span>
        </a>
      </div>
      {/* end::Menu item */}
      {/* begin::Menu item */}
      <div
        className='menu-item px-5'
        data-kt-menu-trigger='hover'
        data-kt-menu-placement='right-end'
      >
        <a href='#' className='menu-link px-5'>
          <span className='menu-title'>My Subscription</span>
          <span className='menu-arrow'></span>
        </a>

        {/* begin::Menu sub */}
        <div className='menu-sub menu-sub-dropdown w-175px py-4'>
          {/* begin::Menu item */}
          <div className='menu-item px-3'>
            <a href='#' className='menu-link px-5'>
              Referrals
            </a>
          </div>
          {/* end::Menu item */}

          {/* begin::Menu item */}
          <div className='menu-item px-3'>
            <a href='#' className='menu-link px-5'>
              Billing
            </a>
          </div>
          {/* end::Menu item */}

          {/* begin::Menu item */}
          <div className='menu-item px-3'>
            <a href='#' className='menu-link px-5'>
              Payments
            </a>
          </div>
          {/* end::Menu item */}

          {/* begin::Menu item */}
          <div className='menu-item px-3'>
            <a href='#' className='menu-link d-flex flex-stack px-5'>
              Statements
              <i
                className='fas fa-exclamation-circle ms-2 fs-7'
                data-bs-toggle='tooltip'
                title='View your statements'
              ></i>
            </a>
          </div>
          {/* end::Menu item */}

          {/* begin::Menu separator */}
          <div className='separator my-2'></div>
          {/* end::Menu separator */}

          {/* begin::Menu item */}
          <div className='menu-item px-3'>
            <div className='menu-content px-3'>
              <label className='form-check form-switch form-check-custom form-check-solid'>
                <input
                  className='form-check-input w-30px h-20px'
                  type='checkbox'
                  value='1'
                  checked={true}
                  name='notifications'
                  onChange={() => {}}
                />
                <span className='form-check-label text-muted fs-7'>Notifications</span>
              </label>
            </div>
          </div>
          {/* end::Menu item */}
        </div>
        {/* end::Menu sub */}
      </div>
      {/* end::Menu item */}

      {/* begin::Menu item */}
      <div className='menu-item px-5'>
        <a href='#' className='menu-link px-5'>
          My Statements
        </a>
      </div>
      {/* end::Menu item */}

      {/* begin::Menu separator */}
      <div className='separator my-2'> </div>
      {/* end::Menu separator */}

      <Languages languageMenuPlacement='right-end' />

      {/* begin::Menu item */}
      <div className='menu-item px-5 my-1'>
        <a href='#' className='menu-link px-5'>
          Account Settings
        </a>
      </div>
      {/* end::Menu item */}

      {/* begin::Menu item */}
      <div className='menu-item px-5'>
        <a className='menu-link px-5'>Sign Out</a>
      </div>
    </div>
  )
}

export {UserMenu}
