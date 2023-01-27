import {Link, useNavigate} from 'react-router-dom'
import clsx from 'clsx'
import {useLayout} from '../../core'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {AsideMenu} from './AsideMenu'
import {AsideUserMenu} from '../../../partials'
import {useThemeMode} from '../../../partials/layout/theme-mode/ThemeModeProvider'
import {useContext} from 'react'
import {GuildContext} from '../../../../app/utils/contexts/GuildContext'
import {getIconURL, getShortName} from '../../../../app/utils/helpers'
import {useFetchGuilds} from '../../../../app/utils/hooks/useFetchGuilds'
import {PartialGuild} from '../../../../app/utils/types'

type Props = {
  mutualGuilds: PartialGuild[] | undefined
  loading: boolean
}

const AsideDefault = ({mutualGuilds, loading}: Props) => {
  const {classes} = useLayout()
  const {mode} = useThemeMode()
  const navigate = useNavigate()
  const {guild, updateGuild} = useContext(GuildContext)

  const handleClick = (guild: PartialGuild) => {
    updateGuild(guild)
    navigate(`/dashboard/${guild.id}`)
  }

  return (
    <>
      <div
        id='kt_aside'
        className={clsx('aside py-9', classes.aside.join(' '))}
        data-kt-drawer='true'
        data-kt-drawer-name='aside'
        data-kt-drawer-activate='{default: true, lg: false}'
        data-kt-drawer-overlay='true'
        data-kt-drawer-width="{default:'200px', '300px': '350px'}"
        data-kt-drawer-direction='start'
        data-kt-drawer-toggle='#kt_aside_toggle'
      >
        {/* begin::Brand */}

        <div className=' flex-column-auto px-7 mb-5' id='kt_aside_logo'>
          {/* begin::Logo */}

          <div className='dropdown dropdown-z-index'>
            {guild ? (
              <a
                href='#'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
                className='text-white d-flex align-items-center w-100 min-h-30px justify-content-between'
              >
                <div className='d-flex justify-content-center align-items-center gap-4 '>
                  {guild.icon ? (
                    <img className='icon-guild-nav w-45px h-45px' src={getIconURL(guild)}></img>
                  ) : (
                    <div className='icon-null-guild-nav w-45px h-45px'>
                      <p>{getShortName(guild)}</p>
                    </div>
                  )}
                  <p className='m-0 fs-4'>{guild?.name}</p>
                </div>
                {loading ? (
                  <span className='spinner-border spinner-border-sm ms-auto'></span>
                ) : (
                  <i className='fa-solid fa-chevron-down justify-self-end'></i>
                )}
              </a>
            ) : (
              <a
                href='#'
                role='button'
                aria-expanded='false'
                className='text-white d-flex align-items-center w-100 min-h-30px justify-content-between'
              >
                <div className='d-flex justify-content-center align-items-center gap-4 '>
                  <div className='loading-img-mutual'></div>

                  <p className='m-0 fs-4 loading-text'></p>
                </div>
                {loading ? (
                  <span className='spinner-border spinner-border-sm ms-auto'></span>
                ) : (
                  <i className='fa-solid fa-chevron-down justify-self-end'></i>
                )}
              </a>
            )}
            {guild ? (
              <div className='dropdown-menu w-100 main-black-bg mt-3'>
                <ul className='list-group px-5 overflow-auto mh-175px'>
                  <li key={guild.id} className='my-2 '>
                    <div
                      role='button'
                      className='d-flex align-items-center justify-content-between item-serv'
                      onClick={() => handleClick(guild)}
                    >
                      <div className='d-flex align-items-center gap-3 ps-3 py-3'>
                        {guild.icon ? (
                          <img
                            className='icon-guild-nav w-30px h-30px'
                            src={getIconURL(guild)}
                          ></img>
                        ) : (
                          <div className='icon-null-guild-nav w-30px h-30px'>
                            <p className='fs-9'>{getShortName(guild)}</p>
                          </div>
                        )}
                        <p className='m-0 fs-7'>{guild.name}</p>
                      </div>

                      <i className='fs-3 main-blue bi bi-check-lg pe-3'></i>
                    </div>
                  </li>
                  {mutualGuilds && !loading ? (
                    mutualGuilds.map((g) => {
                      return g.id != guild.id ? (
                        <li className='my-2' key={g.id}>
                          <div
                            role='button'
                            className='d-flex align-items-center justify-content-between item-serv'
                            onClick={() => handleClick(g)}
                          >
                            <div className='d-flex align-items-center gap-3 ps-3 py-3'>
                              {g.icon ? (
                                <img
                                  className='icon-guild-nav w-30px h-30px'
                                  src={getIconURL(g)}
                                ></img>
                              ) : (
                                <div className='icon-null-guild-nav w-30px h-30px'>
                                  <p className='fs-9'>{getShortName(g)}</p>
                                </div>
                              )}
                              <p className='m-0 fs-7'>{g.name}</p>
                            </div>
                            {g.id === guild.id ? (
                              <i className='fs-3 main-blue bi bi-check-lg pe-3'></i>
                            ) : (
                              <></>
                            )}
                          </div>
                        </li>
                      ) : (
                        <div key={'null'}></div>
                      )
                    })
                  ) : (
                    <></>
                  )}
                </ul>
                <div className='h-100 pt-2 main-black-bg d-flex flex-column'>
                  <div className='bar-separator'></div>
                  <div className='add-server w-75 pt-1 pb-2 mx-auto d-flex'>
                    <div
                      role='button'
                      className='d-flex align-items-center justify-content-between add-serv w-100'
                    >
                      <div className='d-flex align-items-center justify-content-center w-100 py-3 mr-5 main-blue-hover'>
                        <div className='icon-null-guild-nav w-20px h-20px'>
                          <i className='fa-solid fa-plus fs-8 text-white w-100 d-flex justify-content-center align-items-center h-100'></i>
                        </div>

                        <p className='m-0 fs-7 ms-3' onClick={() => navigate('/dashboard')}>
                          Ajouters un serveur
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            )}
            {/* end::Logo */}
          </div>
        </div>
        {/* end::Brand */}

        {/* begin::Aside menu */}
        <div id='kt_aside_menu' className='aside-menu flex-column-fluid ps-5 pe-3 mb-9'>
          <AsideMenu asideMenuCSSClasses={classes.asideMenu} />
        </div>
        {/* end::Aside menu */}

        {/* begin::Footer */}
        {/*         <div className='aside-footer flex-column-auto px-9' id='kt_aside_footer'>
          <AsideUserMenu />
        </div> */}
        {/* end::Footer */}
      </div>
    </>
  )
}

export {AsideDefault}
