import type { Map }                  from 'mapbox-gl'

import type { MarkerClusterOptions } from './marker-cluster.options.js'

import { Marker }                    from 'mapbox-gl'

export class MarkerCluster {
  private markerElement: HTMLDivElement

  private markers: Array<Marker> = []

  private clusterThreshold: number = 6.3

  private hiddenMarkerClassName: string = 'marker-hidden'

  constructor(options: MarkerClusterOptions) {
    if (!options.baseMarkerClassName)
      throw new Error('MarkerCluster: baseMarkerClassName is required')

    this.markerElement = document.createElement('div')
    this.markerElement.className = options.baseMarkerClassName
    this.markerElement.innerHTML = `<span>${this.markers.length}</span>`
    this.markerElement.classList.add(options.clusterClassName || '')

    if (options.clusterThreshold) this.clusterThreshold = options.clusterThreshold
    if (options.hiddenMarkerClassName) this.hiddenMarkerClassName = options.hiddenMarkerClassName
  }

  addMarker(marker: Marker): void {
    this.markers.push(marker)
    this.markerElement.innerHTML = `<span>${this.markers.length}</span>`
  }

  addToMap(map: Map): void {
    const reconcileVisibility = (element: HTMLElement, reverse = false): void => {
      if (map.getZoom() < this.clusterThreshold) {
        if (reverse) element.classList.remove(this.hiddenMarkerClassName)
        else element.classList.add(this.hiddenMarkerClassName)
      } else {
        // eslint-disable-next-line no-lonely-if
        if (reverse) element.classList.add(this.hiddenMarkerClassName)
        else element.classList.remove(this.hiddenMarkerClassName)
      }
    }

    if (this.markers.length < 2)
      throw new Error('MarkerCluster: at least 2 markers should be added')

    const { lng, lat } = this.markers.reduce(
      (result, marker) => {
        marker.addTo(map)

        map.on('zoom', () => {
          reconcileVisibility(marker.getElement())
        })

        reconcileVisibility(marker.getElement())

        const lnglat = marker.getLngLat()

        if (lnglat.lng > result.maxLng || Number.isNaN(result.maxLng))
          return {
            ...result,
            maxLng: lnglat.lng,
            lng: result.minLng + (result.maxLng - result.minLng) / 2,
          }
        if (lnglat.lng < result.minLng || Number.isNaN(result.minLng))
          return {
            ...result,
            minLng: lnglat.lng,
            lng: result.minLng + (result.maxLng - result.minLng) / 2,
          }

        if (lnglat.lat > result.maxLat || Number.isNaN(result.maxLat))
          return {
            ...result,
            maxLat: lnglat.lat,
            lat: result.minLat + (result.maxLat - result.minLat) / 2,
          }
        if (lnglat.lat < result.minLat || Number.isNaN(result.minLat))
          return {
            ...result,
            minLat: lnglat.lat,
            lat: result.minLat + (result.maxLat - result.minLat) / 2,
          }

        return result
      },
      { lng: NaN, lat: NaN, maxLng: NaN, minLng: NaN, maxLat: NaN, minLat: NaN }
    )

    map.on('zoom', () => {
      reconcileVisibility(this.markerElement, true)
    })

    reconcileVisibility(this.markerElement, true)

    this.markerElement.addEventListener('click', () => {
      map.setCenter({ lng, lat })
      map.zoomTo(this.clusterThreshold)
    })

    new Marker(this.markerElement).setLngLat({ lng, lat }).addTo(map)
  }
}
