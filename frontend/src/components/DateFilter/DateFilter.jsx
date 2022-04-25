import React, { createRef } from 'react'
import './DateFilter.css'

function DateFilter({ filterDates, setFilterDates }) {
	const handleDateChange = () => {
		setFilterDates({
			fromDate: fromDateRef.current.value,
			untilDate: untilDateRef.current.value,
		})
	}
	const fromDateRef = createRef()
	const untilDateRef = createRef()
	return (
		<div className='dateFilterContainer'>
			<div className='datePicker'>
				<label>Desde:</label>
				<input
					type='date'
					defaultValue={filterDates.fromDate}
					name='fromDate'
					ref={fromDateRef}
				/>
			</div>
			<div className='datePicker'>
				<label>Hasta:</label>
				<input
					type='date'
					defaultValue={filterDates.untilDate}
					name='untilDate'
					ref={untilDateRef}
				/>
			</div>
			<button className='btn btn-secondary' onClick={handleDateChange}>
				Buscar
			</button>
		</div>
	)
}

DateFilter.propTypes = {}

export default DateFilter
