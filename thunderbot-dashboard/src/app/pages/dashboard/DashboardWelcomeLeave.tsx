import {useContext} from 'react'
import {EnableSidebar, PageTitle} from '../../../_metronic/layout/core'
import {
  ListsWidget4,
  ListsWidget5,
  TablesWidget9,
  MixedWidget13,
  MixedWidget14,
  MixedWidget15,
} from '../../../_metronic/partials/widgets'
import {motion as m} from 'framer-motion'
import {GuildContext} from '../../utils/contexts/GuildContext'

const DashboardWelcomeLeavePage = () => (
  <>
    <div className='row gy-5 g-xl-10'>
      {/*begin::Col*/}
      <div className='col-xl-4'>
        <MixedWidget13
          className='card-xl-stretch mb-xl-10'
          backGroundColor='#F7D9E3'
          chartHeight='100px'
        />
      </div>
      {/*end::Col*/}

      {/*begin::Col*/}
      <div className='col-xl-4'>
        <MixedWidget14
          className='card-xl-stretch mb-xl-10'
          backGroundColor='#CBF0F4'
          chartHeight='100px'
        />
      </div>
      {/*end::Col*/}

      {/*begin::Col*/}
      <div className='col-xl-4'>
        <MixedWidget15 className='card-xl-stretch mb-xl-10' backGroundColor='#CBD4F4' />
      </div>
      {/*end::Col*/}
    </div>
    {/*end::Row*/}

    <TablesWidget9 className='mb-5 mb-xl-10' />

    {/*begin::Row*/}
    <div className='row gy-5 g-xl-10'>
      {/*begin::Col*/}
      <div className='col-xxl-6'>
        <ListsWidget5 className='card-xl-stretch mb-xl-10' />
      </div>
      {/*end::Col*/}

      {/*begin::Col*/}
      <div className='col-xxl-6'>
        <ListsWidget4 className='card-xl-stretch mb-5 mb-xl-10' items={5} />
      </div>
      {/*end::Col*/}
    </div>
  </>
)

const DashboardWelcomeLeave = () => {
  const {guild} = useContext(GuildContext)

  return guild ? (
    <m.div initial={{opacity: 0}} animate={{opacity: 1}}>
      <EnableSidebar>
        <PageTitle breadcrumbs={[]}>Welcomes & Leaves messages</PageTitle>
        <DashboardWelcomeLeavePage />
      </EnableSidebar>
    </m.div>
  ) : (
    <></>
  )
}

export {DashboardWelcomeLeave}
