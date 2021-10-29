import React from 'react'
import PropTypes from 'prop-types'

class Pokemon extends React.Component {
    render() {
        const { pokemon: { name, type, averageWeight, image} } = this.props;

        return (
        <section className='pokemon-section'>
            <h4>{name}</h4>
            <ul>
                <li>{type}</li>
                <li>{`averageWeight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</li>
            </ul>
            <img src={image} alt={name}/>
        </section>
        );
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeight: PropTypes.shape({
          measurementUnit: PropTypes.string,
          value: PropTypes.number,
        }),
        image: PropTypes.string,
      }).isRequired,
}

export default Pokemon