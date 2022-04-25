import React, { useContext, useEffect, useState } from 'react'
import { getBotChats } from '../../api/api'
import Context from '../../Context/Context'
import DateFilter from '../DateFilter/DateFilter'
import Spinner from '../Spinner/Spinner'
import './ChatsTable.css'

const columns = [
	'Gestionado',
	'ID Caso',
	'Telefono',
	'DNI',
	'Grupo',
	'Orden',
	'Llamada',
	'Estado',
]

const setColorOfStateColumn = (value) => {
	if (value.includes('Cortó')) return 'yellow'
	if (value.includes('Transferido') || value.includes('Mail Enviado'))
		return 'green'
	if (value.includes('Indefinido')) return 'grey'
	if (value.includes('Cliente no encontrado en DB')) return 'red'
}

function ChatsTable() {
	const { clients } = useContext(Context)
	const [page, setPage] = useState(1)
	const [chats, setChats] = useState({})
	const [filterDates, setFilterDates] = useState({
		fromDate: '2021-03-01',
		untilDate: '2022-03-25',
	})
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		if (clients.length) {
			setLoading(true)
			getBotChats(
				clients[0].id,
				filterDates.fromDate,
				filterDates.untilDate,
				page
			).then((botChats) => {
				setChats(botChats)
				setLoading(false)
			})
		}
	}, [clients, page, filterDates])

	return (
		<div className='chatsTable'>
			<DateFilter filterDates={filterDates} setFilterDates={setFilterDates} />
			<div className='tableContainer'>
				{loading && <Spinner />}
				<div className='table table-bordered'>
					<table className='table table-striped table-hover'>
						<thead className='thead-dark'>
							<tr>
								{columns.map((column) => (
									<th key={column}>{column}</th>
								))}
							</tr>
						</thead>
						<tbody>
							{chats.results &&
								chats.results.map(
									({
										id,
										last_updated,
										case_uuid,
										phone,
										extra_metadata,
										case_duration,
										case_result,
									}) => (
										<tr key={id}>
											<td className='callCol'>
												<ion-icon name='calendar-outline'></ion-icon>
												{last_updated}
											</td>
											<td>{case_uuid}</td>
											<td>{phone}</td>
											<td>{extra_metadata.dni}</td>
											<td>{extra_metadata.grupo}</td>
											<td>{extra_metadata.orden}</td>
											<td className='callCol'>
												<ion-icon name='call'></ion-icon> {case_duration}
											</td>
											<td
												className={`resultCol ${setColorOfStateColumn(
													case_result.name
												)}`}
											>
												{case_result.name}
											</td>
										</tr>
									)
								)}
						</tbody>
					</table>

					{chats.results && (
						<div className='buttonBar'>
							<button
								className='btn btn-dark'
								onClick={() => setPage((page) => page - 1)}
								disabled={!chats.previous}
							>
								{'<'}
							</button>
							<strong>{page}</strong>
							<button
								className='btn btn-dark'
								onClick={() => setPage((page) => page + 1)}
								disabled={!chats.next}
							>
								{'>'}
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default ChatsTable
