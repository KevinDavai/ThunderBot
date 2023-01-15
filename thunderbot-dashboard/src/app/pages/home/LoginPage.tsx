import {motion as m} from 'framer-motion'

export const LoginPage = () => {
  const redirect = () => {
    window.location.href = 'http://localhost:3001/api/auth/login'
  }

  return (
    <>
      <div className='container h-100 d-flex flex-row align-items-center justify-content-center '>
        <m.div initial={{opacity: 0}} animate={{opacity: 1}}>
          <a
            onClick={redirect}
            className='btn btn-flex btn-primary px-6 w-250px min-h-70px  mx-10 flex-end justify-content-center'
          >
            <i className='fa-brands fa-discord fs-1'></i>
            <span className='d-flex flex-column align-items-start ms-2'>
              <span className='fs-3 fw-bolder'>Login With Discord</span>
            </span>
          </a>
          <a
            href='#'
            className='btn btn-flex btn-secondary px-6 w-250px min-h-70px mx-10 flex-end justify-content-center'
          >
            <i className='fa-solid fa-circle-info fs-1'></i>
            <span className='d-flex flex-column align-items-start ms-2'>
              <span className='fs-3 fw-bolder'>Support Server</span>
            </span>
          </a>
        </m.div>
      </div>
    </>
  )
}
