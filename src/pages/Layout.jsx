import NavBar from "../components/NavBar"
import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"

const Layout = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		fetch("http://localhost:4000/users")
			.then(r => {
				if (!r.ok) { throw new Error("failed to fetch users") }
				return r.json()
			})
			.then(data => setUsers(data))
			.catch(error => console.error(error))
	}, [])

	return (
		<>
			<header>
				<NavBar />
			</header>
			{/* renders children components */}
			<Outlet context={users} />
		</>
	)
}

export default Layout
