import axios from 'axios'

const baseUrl = 'https://admindev.inceptia.ai'
const accessToken = localStorage.getItem('accessToken')
const headers = { authorization: `JWT ${accessToken}` }
const userData = {
	email: 'reactdev@iniceptia.ai',
	password: '4eSBbHqiCTPdBCTj',
}

export const apiLogin = async () => {
	const url = baseUrl + '/api/v1/login/'
	try {
		const user = await axios.post(url, userData)
		localStorage.setItem('accessToken', user.data.token)
		return user.data
	} catch (error) {
		console.log(error.response)
	}
}

export const getClients = async () => {
	const url = baseUrl + '/api/v1/clients/'
	try {
		const clients = await axios.get(url, { headers })
		return clients.data
	} catch (error) {
		console.log(error.response)
	}
}

export const getBotChats = async (
	botId,
	fromDate = '2021-03-01',
	untilDate = '2022-03-25',
	page
) => {
	const clientParam = `?client=${botId}`
	const fromDateParam = `&local_updated__date__gte=${fromDate}`
	const untilDateParam = `&local_updated__date__lte=${untilDate}`
	const pageParam = `&page=${page}`
	let url =
		baseUrl +
		'/api/v1/inbound-case/' +
		clientParam +
		fromDateParam +
		untilDateParam +
		pageParam
	try {
		const botChats = await axios.get(url, { headers })
		return botChats.data
	} catch (error) {
		console.log(error.response)
	}
}
