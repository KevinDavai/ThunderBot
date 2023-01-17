import './GuildMenuItem.scss'

type Props = {
  guild: {
    id: string
    name: string
    icon: string
  }
}

export const GuildMenuItem = ({guild}: Props) => (
  <>
    <div className='card card-xl-stretch guild-card mb-xl-10 theme-dark-bg-body'>
      <div className='guild-card-svg'>
        <svg
          version='1.1'
          id='Calque_1'
          xmlns='http://www.w3.org/2000/svg'
          width='100%'
          height='100%'
          x='0px'
          y='0px'
          viewBox='0 0 100% 100%'
          className='enable-background-guild-card'
        >
          <g>
            <defs>
              <clipPath id='theClippingPath'>
                <path
                  id='SVGID_1_'
                  d='M204,106v21.5c0,17.9,14.5,32.5,32.5,32.5H300V25c0-13.8-11.2-25-25-25H25C11.2,0,0,11.2,0,25v135h63.5
			c17.9,0,32.5-14.5,32.5-32.5V106H204z'
                />
              </clipPath>
            </defs>
            <g className='clip-path-svg-guild-card'>
              <image
                className='overflow-visible bg-blend'
                width='100%'
                href='https://loremflickr.com/160/160'
                clip-path='url(#theClippingPath)'
              ></image>
            </g>
          </g>
        </svg>

        <img src='https://loremflickr.com/160/160'></img>
      </div>
      <div className='d-flex align-items-center justify-content-between p-4'>
        <div className='d-flex justify-content-center flex-column p-5 gap-1'>
          <p className='fs-2 text-white'>NoName II</p>
          <p className='fs-7 text-gray-600'>Propriétaire</p>
        </div>
        <a href='#' className='btn btn-light-primary'>
          Ouvrir
        </a>
      </div>
    </div>
  </>
)
