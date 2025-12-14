import { useState, useEffect } from "react"
import UserCard from "../components/UserCard"
import { Outlet, useOutletContext } from "react-router-dom"

function Home() {
  const users = useOutletContext()

  const userList = users.map(user => {
    return <UserCard key={user.id} user={user} />
  });

  // useEffect(() => {
  //   fetch("http://localhost:4000/users")
  //     .then(r => {
  //       if (!r.ok) { throw new Error("failed to fetch users") }
  //       return r.json()
  //     })
  //     .then(data => setUsers(data))
  //     .catch(error => console.error(error))
  // }, [])

  return (
    <>
      <main>
        <h1>Home!</h1>
        <Outlet context={users} />
        {userList}
      </main>
    </>
  )
}

export default Home