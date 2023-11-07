import {isEqual} from 'lodash'
import {useContext, useEffect, useRef, useState} from 'react'

type Props = {
  oldData: object
  newData: object
  saveData: () => void
}

export const SaveChanges = ({oldData, newData, saveData}: Props) => {
  // Store if data was changed and is not the same with older data
  const [isChanged, setIsChanged] = useState(false)

  // Return true if the data that was change by the user differ with the old data (before)
  const IsChanged = (oldObj: object, newOjb: object) => {
    //console.log('OLD: ' + JSON.stringify(oldObj, null, 4))
    //console.log('NEW: ' + JSON.stringify(newOjb, null, 4))

    if (isEqual(oldObj, newOjb)) {
      setIsChanged(false)
    } else setIsChanged(true)
  }

  // Run IsChanged when data was change by the user
  useEffect(() => {
    IsChanged(oldData, newData)
  }, [newData, oldData])

  const handleSaveClick = () => {
    console.log('RESET')
    saveData()
  }

  return (
    <>
      {isChanged ? (
        <>
          <div className='position-fixed bottom-20 w-75 px-6 lg:px-6'>
            {/*begin::Col*/}
            <div className='card-body p-lg-6 card bg-main-light-gray'>
              <div className='text-inverse-primary fs-3'>
                <div className='d-flex justify-content-between align-items-center'>
                  <p className='p-0 m-0'>Changements détectés ! Enregistre-les ou annule-les.</p>
                  <div className='form-check form-switch form-check-custom form-check-solid '>
                    <a href='#' className='btn btn-secondary mx-2'>
                      Annuler
                    </a>

                    <a href='#' className='btn btn-primary2 d mx-2' onClick={handleSaveClick}>
                      Valider
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/*end::Col*/}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  )
}
