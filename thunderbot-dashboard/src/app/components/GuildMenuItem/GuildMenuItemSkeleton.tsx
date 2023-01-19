import {motion as m} from 'framer-motion'

export const GuildMenuItemSkeleton = () => {
  return (
    <>
      <m.div initial={{opacity: 0}} animate={{opacity: 1}}>
        <div className='card card-xl-stretch guild-card mb-xl-10 theme-dark-bg-body mx-4'>
          <div className='guild-card-svg'>
            <svg
              version='1.1'
              id='Calque_1'
              xmlns='http://www.w3.org/2000/svg'
              width='100%'
              height='100%'
              x='0px'
              y='0px'
              className='enable-background-guild-card'
            >
              <g>
                <defs>
                  <clipPath id='theClippingPath'>
                    <path
                      fill='pink'
                      id='SVGID_1_'
                      d='M204,106v21.5c0,17.9,14.5,32.5,32.5,32.5H300V25c0-13.8-11.2-25-25-25H25C11.2,0,0,11.2,0,25v135h63.5
c17.9,0,32.5-14.5,32.5-32.5V106H204z'
                    />
                  </clipPath>
                </defs>
                <g className='clip-path-svg-guild-card'></g>
              </g>
            </svg>

            <div className='loading-img'></div>
          </div>
          <div className='d-flex justify-content-between py-8'>
            <div className='d-flex justify-content-center flex-column gap-1 px-6 align-self-center'>
              <p className='pb-2 loading-text mb-2'>sdf</p>
              <p className='loading-subtext'>sdf</p>
            </div>

            <div className='btn-loading-skeleton me-6 align-self-start w-80px h-40px loading-btn'></div>
          </div>
        </div>
      </m.div>
    </>
  )
}
