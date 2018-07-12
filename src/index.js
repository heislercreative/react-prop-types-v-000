import React from 'react'
import PropTypes from 'prop-types'

class Order extends React.Component {
  const { cone, size, scoops, orderInfo}

  render () {
    return (
      <div className="order">
        <ul>
          <li>{cone ? 'Cone' : 'Cup'}</li>
          <li>{size}</li>
          <li>{scoops.length} scoops: {scoops.join(', ')}</li>
          <li>Ordered by {orderInfo.customerName} at {orderInfo.orderedAt}.</li>
        </ul>
      </div>
    )
  }
}

Order.defaultProps = {
  cone: true,
  size: 'regular'
}

Order.propTypes = {
  cone: PropTypes.bool,
  size: PropTypes.string,
  scoops: PropTypes.arrayOf(PropTypes.string).isRequired,
  orderInfo: PropTypes.shape({
    customerName: PropTypes.string.isRequired,
    orderedAt: PropTypes.number.isRequired
  }).isRequired
}
