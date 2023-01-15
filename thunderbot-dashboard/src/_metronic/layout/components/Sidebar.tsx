import clsx from 'clsx'
import {KTSVG} from '../../helpers'
import {useLayout} from '../core'
import {BestSellers, Orders, Stats, Tasks} from '../../partials'

const Sidebar = () => {
  const {classes} = useLayout()
  const sidebarCSSClass = classes.sidebar

  return (
    <div
      id='kt_sidebar'
      className={clsx('sidebar', sidebarCSSClass.join(' '), 'd-none')}
      data-kt-drawer='true'
      data-kt-drawer-name='sidebar'
      data-kt-drawer-activate='{default: true, xxl: false}'
      data-kt-drawer-overlay='true'
      data-kt-drawer-width="{default:'300px', 'lg': '400px'}"
      data-kt-drawer-direction='end'
      data-kt-drawer-toggle='#kt_sidebar_toggler'
    >
      {/* begin::Sidebar Content */}
      <div className='d-flex flex-column sidebar-body px-5 py-10' id='kt_sidebar_body'>
        {/* begin::Sidebar Nav */}
        <ul className='sidebar-nav nav nav-tabs mb-10' id='kt_sidebar_tabs' role='tablist'>
          <li className='nav-item'>
            <a
              className='nav-link'
              data-bs-toggle='tab'
              data-kt-countup-tabs='true'
              href='#kt_sidebar_tab_1'
            >
              <KTSVG path='/media/icons/duotune/abstract/abs038.svg' />
            </a>
          </li>

          <li className='nav-item'>
            <a
              className='nav-link'
              data-bs-toggle='tab'
              data-kt-countup-tabs='true'
              href='#kt_sidebar_tab_2'
            >
              <KTSVG path='/media/icons/duotune/abstract/abs042.svg' />
            </a>
          </li>

          <li className='nav-item'>
            <a
              className='nav-link active'
              data-bs-toggle='tab'
              data-kt-countup-tabs='true'
              href='#kt_sidebar_tab_3'
            >
              <KTSVG path='/media/icons/duotune/abstract/abs036.svg' />
            </a>
          </li>

          <li className='nav-item'>
            <a
              className='nav-link'
              data-bs-toggle='tab'
              data-kt-countup-tabs='true'
              href='#kt_sidebar_tab_4'
            >
              <KTSVG path='/media/icons/duotune/coding/cod001.svg' />
            </a>
          </li>

          <li className='nav-item'>
            <a
              className='nav-link'
              data-bs-toggle='tab'
              data-kt-countup-tabs='true'
              href='#kt_sidebar_tab_5'
            >
              <KTSVG path='/media/icons/duotune/abstract/abs026.svg' />
            </a>
          </li>
        </ul>
        {/* end::Sidebar Nav */}
      </div>
      {/* end::Sidebar Content */}

      {/* begin::Sidebar Content */}
      <div id='kt_sidebar_content'>
        <div
          className='hover-scroll-y'
          data-kt-scroll='true'
          data-kt-scroll-height='auto'
          data-kt-scroll-offset='0px'
          data-kt-scroll-dependencies='#kt_sidebar_tabs'
          data-kt-scroll-wrappers='#kt_sidebar_content, #kt_sidebar_body'
        >
          {/* begin::Tab content */}
          <div className='tab-content px-5 px-xxl-10'>
            {/* begin::Tab pane */}
            <div className='tab-pane fade' id='kt_sidebar_tab_1' role='tabpanel'>
              <Stats category='tasks' />
              <Tasks />
            </div>
            {/* end::Tab pane */}

            {/* begin::Tab pane */}
            <div className='tab-pane fade' id='kt_sidebar_tab_2' role='tabpanel'>
              <Stats category='orders' />
              <Orders />
            </div>
            {/* end::Tab pane */}

            {/* begin::Tab pane */}
            <div className='tab-pane fade show active' id='kt_sidebar_tab_3' role='tabpanel'>
              <Stats category='tickets' />
              <BestSellers />
            </div>
            {/* end::Tab pane */}

            {/* begin::Tab pane */}
            <div className='tab-pane fade' id='kt_sidebar_tab_4' role='tabpanel'>
              <Stats category='notifcations' />
              <Tasks />
            </div>
            {/* end::Tab pane */}

            {/* begin::Tab pane */}
            <div className='tab-pane fade' id='kt_sidebar_tab_5' role='tabpanel'>
              <Stats category='mail' />
              <Tasks />
            </div>
            {/* end::Tab pane */}
          </div>
          {/* end::Tab content */}
        </div>
      </div>
      {/* end::Sidebar Content */}
    </div>
  )
}

export {Sidebar}
