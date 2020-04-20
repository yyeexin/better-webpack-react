import React, { useState, useEffect } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const BASE_URL = 'https://corona.lmao.ninja/v2'

const GolbalStyles = createGlobalStyle`
.App {
    width: 1200px;
    margin: auto;
    text-align: center;
  }
  
  .history-group {
    display: flex;
    justify-content: center;
    width: 1200px;
    margin: auto;
  }
  
  table,
  th,
  td {
    border: 1px solid #ccc;
    border-collapse: collapse;
  }
  
  th,
  td {
    padding: 5px;
    text-align: left;
  }
  
  .global-stats > table {
    margin: auto;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
`

function Stat({ number, color }) {
	return <span style={{ color: color, fontWeight: 'bold' }}>{number}</span>
}

function GlobalStats({ stats }) {
	const { cases, deaths, recovered, active, updated } = stats

	return (
		<div className='global-stats'>
			<small>Updated on {new Date(updated).toLocaleString()}</small>
			<table>
				<tbody>
					<tr>
						<td>
							Cases: <Stat number={cases} color='red' />
						</td>
						<td>
							Deaths: <Stat number={deaths} color='gray' />
						</td>
						<td>
							Recovered: <Stat number={recovered} color='green' />
						</td>
						<td>
							Active: <Stat number={active} color='orange' />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

function SelectDataKey({ onChange }) {
	return (
		<>
			<label htmlFor='key-select'>Select a key for sorting: </label>
			<select id='key-select' onChange={onChange}>
				<option value='cases'>Cases</option>
				<option value='todayCases'>Today Cases</option>
				<option value='deaths'>Death</option>
				<option value='recovered'>Recovered</option>
				<option value='active'>Active</option>
			</select>
		</>
	)
}

function App() {
	const [globalStats, setGlobalStats] = useState({})
	const [countries, setCountries] = useState([])
	const [key, setKey] = useState('cases')

	useEffect(() => {
		const fetchGlobalStats = async () => {
			const response = await fetch(`${BASE_URL}/all`)
			const data = await response.json()
			setGlobalStats(data)
		}

		fetchGlobalStats()
		const intervalId = setInterval(fetchGlobalStats, 5000)

		return () => clearInterval(intervalId)
	}, [])

	useEffect(() => {
		const fetchCountries = async () => {
			const response = await fetch(`${BASE_URL}/countries?sort=${key}`)
			const data = await response.json()
			console.log(data)
			setCountries(data.slice(0, 10))
		}

		fetchCountries()
	}, [key])

	return (
		<>
			<GolbalStyles />
			<div className='App'>
				<h1>COVID-19</h1>
				<GlobalStats stats={globalStats} />
				<SelectDataKey onChange={e => setKey(e.target.value)} />
			</div>
		</>
	)
}

export default App
