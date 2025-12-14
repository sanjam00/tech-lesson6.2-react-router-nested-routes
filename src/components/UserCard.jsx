import { Link, useOutletContext } from "react-router-dom"

function UserCard({ user }) {
  // const users = useOutletContext()
  // console.log(users)

  return (
    <article>
      <h2>{user.name}</h2>
      <Link to={`/profile/${user.id}`}>View profile</Link>
    </article>
  )
}

export default UserCard