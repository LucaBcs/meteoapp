import React from "react"
import PlacesAutocomplete, { geocodeByPlaceId, getLatLng } from 'react-places-autocomplete'

class Gmaps extends React.Component {
  constructor(props) {
    super(props)
    this.state = { address: "" }
    this.onChange = (address) => this.setState({ address })
  }

    
    
    
    handleSelect = (address, placeId) => {
    this.setState({ address, placeId })
        
    geocodeByPlaceId(placeId)
      .then(results => getLatLng(results[0]))
      .then(latLng => this.props.cityChange(latLng))
      .catch(error => console.error('Error', error))
  }


  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    return (
      <div>
        <PlacesAutocomplete className="inputCity"   inputProps={inputProps}  onSelect={this.handleSelect} />
      </div>
    )
  }
}

export default Gmaps