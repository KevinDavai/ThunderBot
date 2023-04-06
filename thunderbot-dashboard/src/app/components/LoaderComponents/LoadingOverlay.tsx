import './LoadingOverlay.scss'
export const LoadingOverlay = ({className}: any) => (
  <>
    <div
      className={`app-preloader w-100 h-100 d-flex justify-content-center align-items-center ${className}`}
    >
      <div className='loader relative inline-block'></div>
    </div>
  </>
)
