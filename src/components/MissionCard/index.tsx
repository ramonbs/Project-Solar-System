import './index.css'

type MissionCardProps = {
  name: string
  year: number
  country: string
  destination: string
}

const MissionCard = (missions: MissionCardProps) => {
  const { name, year, country, destination } = missions

  return (
    <div
      data-testid="mission-card"
      className="my-5 flex w-96 flex-col justify-between overflow-hidden text-ellipsis whitespace-nowrap rounded-lg border border-gray-200 p-5 text-2xl transition duration-500 ease-in-out hover:scale-110 hover:overflow-visible hover:whitespace-normal"
    >
      <p
        data-testid="mission-name"
        className="overflow-hidden text-ellipsis whitespace-nowrap text-4xl hover:overflow-visible hover:whitespace-normal "
      >
        {name}
      </p>
      <p data-testid="mission-year"> {year} </p>
      <p data-testid="mission-country"> {country} </p>
      <p data-testid="mission-destination"> {destination} </p>
    </div>
  )
}

export default MissionCard
