import 'reflect-metadata'
import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'
import React from 'react'
import { render } from 'react-dom'
import './common/utils/sentry.ts'
import 'leaflet-arrowheads'
import 'leaflet-control-geocoder/dist/Control.Geocoder'
import 'leaflet-control-geocoder/dist/Control.Geocoder.css'

// FIX LEAFLET MARKERS
import L from 'leaflet'
// @ts-ignore
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
// @ts-ignore
import markerIcon from 'leaflet/dist/images/marker-icon.png'
// @ts-ignore
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
})
// END FIX LEAFLET MARKERS

import 'leaflet/dist/leaflet.css'
import 'react-leaflet-markercluster/dist/styles.min.css'
import './markers.css'

import './boot'

import { App } from './screens'


render(
  <App />,
  document.getElementById('root')
)
