import Title from 'components/Title'
import React from 'react'
import Planets from '../../data/planet'
import PlanetCard from '../PlanetCard'

class SolarSystem extends React.Component {
  render() {
    return (
      <>
        <div
          className="my-5 flex w-full justify-center text-6xl"
          data-testid="solar-system"
        >
          <Title headline="Planetas" />
        </div>

        <div>
          <ul className="my-10 flex justify-around">
            {Planets.map((planet, index) => (
              <PlanetCard
                key={index}
                planetName={planet.name}
                planetImage={planet.image}
              />
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default SolarSystem
