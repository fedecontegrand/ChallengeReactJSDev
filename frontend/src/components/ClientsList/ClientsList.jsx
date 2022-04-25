import React, { useContext, useEffect, useState } from 'react'
import Context from '../../Context/Context'
import Spinner from '../Spinner/Spinner'
import './ClientList.css'

const fakeClientsToCompleteTable = [
	{ name: 'Random Client 1', id: 'Random Client 1' },
	{ name: 'Random Client 2', id: 'Random Client 2' },
	{ name: 'Random Client 3', id: 'Random Client 3' },
	{ name: 'Random Client 4', id: 'Random Client 4' },
	{ name: 'Random Client 5', id: 'Random Client 5' },
]

function ClientsList() {
	const { clients } = useContext(Context)
	const [activeClient, setActiveClient] = useState()

	useEffect(() => {
		if (clients.length) {
			setActiveClient(clients[0].name)
		}
	}, [clients])

	const allData = [...clients, ...fakeClientsToCompleteTable]

	return (
		<div className='clientsTable'>
			<h4>Cliente</h4>
			{clients.length ? (
				allData.map((client) => (
					<div
						key={client.id}
						className={`clientRow ${
							client.name === activeClient ? 'active' : 'noActive'
						}`}
						onClick={() => setActiveClient(client.name)}
					>
						{client.name}
					</div>
				))
			) : (
				<Spinner />
			)}
		</div>
	)
}

ClientsList.propTypes = {}

export default ClientsList
