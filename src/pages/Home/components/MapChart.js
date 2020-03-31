import React, { useState, useEffect } from 'react'
import { Chart, Geom, Tooltip, Legend } from 'bizcharts'
import DataSet from '@antv/data-set'

const MAP_URL = 'https://gw.alipayobjects.com/os/basement_prod/a502afb5-d979-443c-9c40-92c0bc297dc9.json'

export const MapChart = ({ areaData }) => {
	const [chinaGeo, setChinaGeo] = useState(null)
	useEffect(() => {
		fetch(MAP_URL)
			.then(v => v.json())
			.then(v => {
				setChinaGeo(v)
			})
	}, [])
	const processGeoData = (geoData, dataValue) => {
		const { features } = geoData
		features.forEach(one => {
			const name = one && one.properties && one.properties.name
			dataValue.forEach(item => {
				if (name.includes(item.province)) {
					one.value = item.count
				}
			})
		})
		const geoDv = new DataSet.View().source(geoData, { type: 'GeoJSON' })
		return geoDv
	}

	if (!chinaGeo) {
		return '数据加载中...'
	}

	const data = processGeoData(chinaGeo, areaData)
	const scale = {
		latitude: {
			sync: true,
			nice: false
		},
		longitude: {
			sync: true,
			nice: false
		},
		value: {
			formatter: val => val || 0
		}
	}

	return [
		<div key='1' style={{ position: 'relative' }}>
			<Chart height={500} width={645} scale={scale} data={data} padding={[0, 0, 0, 90]}>
				<Geom
					type='polygon'
					position='longitude*latitude'
					style={{ lineWidth: 1, stroke: '#505050' }}
					color={['value', ['#ffffff', '#00ff33']]}
					tooltip={[
						'name*value',
						(name, value) => ({
							name,
							value: value || 0
						})
					]}>
					<Tooltip showTitle={false} />
					<Legend position='bottom-left' offsetY={-130} offsetX={-60} slidable={false} width={320} />
				</Geom>
			</Chart>
		</div>
	]
}

export default MapChart
