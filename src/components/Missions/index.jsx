import MissionCard from 'components/MissionCard'
import Title from 'components/Title'
import React from 'react'
import Missions from '../../data/missions'

class Mission extends React.Component {
  render() {
    return (
      <div
        data-testid="missions"
        className="m-5 flex flex-col rounded-lg border border-gray-200 p-5"
      >
        <div className="flex justify-center text-5xl">
          <Title headline="Missões" />
        </div>
        <div className="grid grid-cols-5 justify-items-center">
          {Missions.map((mission, index) => (
            <MissionCard key={index} {...mission} />
          ))}
        </div>
      </div>
    )
  }
}

export default Mission
