import React from 'react'
import PropTypes from 'prop-types'
import { GoogleMap, Data } from '@react-google-maps/api'

const ExampleDataPropTypes = {
  styles: PropTypes.shape({
    container: PropTypes.object.isRequired,
  }).isRequired,
}

const center = {
  lat: 38.805470223177466,
  lng: -118.76220703125,
}

const onClick = (...args) => {
  console.log(
    'onClick args: ',
    args[0].latLng.lat(),
    ' : ',
    args[0].latLng.lng()
  )
}

const onMapLoad = map => {
  console.log('map.data: ', map.data)
  // map.data.loadGeoJson('/geo.json')
}

const onDataLoad = data => {
  console.log('data: ', data)
}

const dataOptions = {
  controlPosition: 'TOP_LEFT',
  controls: ['Point'],
  drawingMode: 'Point', //  "LineString" or "Polygon".
  featureFactory: geometry => {
    console.log('geometry: ', geometry)
  },
  // Type:  boolean
  // If true, the marker receives mouse and touch events. Default value is true.
  clickable: true,

  // Type:  string
  // Mouse cursor to show on hover. Only applies to point geometries.
  // cursor: 'cursor',

  // Type:  boolean
  // If true, the object can be dragged across the map and the underlying feature will have its geometry updated. Default value is false.
  draggable: true,

  // Type:  boolean
  // If true, the object can be edited by dragging control points and the underlying feature will have its geometry updated. Only applies to LineString and Polygon geometries. Default value is false.
  editable: false,

  // Type:  string
  // The fill color. All CSS3 colors are supported except for extended named colors. Only applies to polygon geometries.
  fillColor: '#F05',

  // Type:  number
  // The fill opacity between 0.0 and 1.0. Only applies to polygon geometries.
  fillOpacity: 1,

  // Type:  string|Icon|Symbol
  // Icon for the foreground. If a string is provided, it is treated as though it were an Icon with the string as url. Only applies to point geometries.
  // icon: 'icon',

  // Type:  MarkerShape
  // Defines the image map used for hit detection. Only applies to point geometries.
  // shape: 'shape',

  // Type:  string
  // The stroke color. All CSS3 colors are supported except for extended named colors. Only applies to line and polygon geometries.
  strokeColor: '#00FF55',

  // Type:  number
  // The stroke opacity between 0.0 and 1.0. Only applies to line and polygon geometries.
  strokeOpacity: 1,

  // Type:  number
  // The stroke width in pixels. Only applies to line and polygon geometries.
  strokeWeight: 2,

  // Type:  string
  // Rollover text. Only applies to point geometries.
  title: 'Title',

  // Type:  boolean
  // Whether the feature is visible. Defaults to true.
  visible: true,

  // Type:  number
  // All features are displayed on the map in order of their zIndex, with higher values displaying in front of features with lower values. Markers are always displayed in front of line-strings and polygons.
  zIndex: 2,
}

const ExampleData = ({ styles }) => (
  <div className='map'>
    <div className='map-container'>
      <GoogleMap
        id='data-example'
        mapContainerStyle={styles.container}
        zoom={5}
        center={center}
        onClick={onClick}
        onLoad={onMapLoad}
      >
        <Data onLoad={onDataLoad} options={dataOptions} />
      </GoogleMap>
    </div>
  </div>
)

ExampleData.propTypes = ExampleDataPropTypes

export default ExampleData