import React, { createContext, useEffect, useState } from 'react'
import { apiLogin, getClients } from '../api/api'

const Context = createContext()

export function ContextProvider({ children }) {
	const [user, setUser] = useState(undefined)
	const [clients, setClients] = useState([])
	useEffect(() => {
		apiLogin().then((user) => {
			setUser(user)
		})
	}, [])
	useEffect(() => {
		if (user) {
			getClients().then((clients) => {
				setClients(clients)
			})
		}
	}, [user])

	return (
		<Context.Provider value={{ user, clients }}>{children}</Context.Provider>
	)
}

export default Context
