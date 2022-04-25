import React from 'react'
import ClientsList from '../components/ClientsList/ClientsList'
import ChatsTable from '../components/ChatsTable/ChatsTable'
import './View.css'

function View() {
	return (
		<div className='viewContainer'>
			<div className='clientsListContainer'>
				<ClientsList />
			</div>
			<div className='chatsTableContainer'>
				<ChatsTable />
			</div>
		</div>
	)
}

View.propTypes = {}

export default View
