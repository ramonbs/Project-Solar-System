import React from 'react'
import PropTypes from 'prop-types'

class Title extends React.Component {
  render() {
    const { headline } = this.props
    return <h2 className="my-5 text-6xl">{headline}</h2>
  }
}

Title.propTypes = {
  headline: PropTypes.string
}

export default Title
