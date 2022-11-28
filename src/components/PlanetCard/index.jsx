import React from 'react'

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name" className="my-5 text-center text-5xl">
          {planetName}
        </p>
        <img
          className="w-64 transition duration-500 ease-in-out hover:scale-110"
          src={planetImage}
          alt={planetName}
        />
      </div>
    )
  }
}

export default PlanetCard
