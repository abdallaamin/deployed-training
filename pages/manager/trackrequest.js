import React from 'react'
import VarLayout from './VarLayout'
//import TrackListHeader from '../../components/manger components/TrackListHeader';
import VarTrackListHeader from '../../components/manger components/VarTrackListHeader';
//import EmptyTrainingRequest from '../../components/manger components/EmptyTrainingRequest';
import TrackRequestLists from '../../components/manger components/TrainingRequestLists'

const trackrequest = () => {
  return (
    <VarLayout>
      <VarTrackListHeader />
      <div style={{ width: "100%", height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '20px', paddingTop: '35px' }} >
        <TrackRequestLists />
          
      </div>
    </VarLayout >
  )
}

export default trackrequest