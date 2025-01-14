import { useQuery } from '@tanstack/react-query'
import { getUsers } from '../apis/userApi'
import { User } from '../../models/user.ts'
import { Link } from 'react-router-dom'

function AllProfiles() {
  const { data, isLoading, isError } = useQuery<User[]>({
    queryKey: ['getUsers'],
    queryFn: () => getUsers(),
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error...</p>
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {data?.map((user) => (
        <div
          key={user.id}
          className="flex flex-col items-center border- border-solid rounded-lg bg-slate-300"
        >
          <Link to={`/profiles/${user.username}`}>
            <img
              src={`../../images/avatars/${user.image}`}
              alt="user profile"
            ></img>
          </Link>
          <div>
            <h3>
              <strong>{user.username}</strong>
            </h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default AllProfiles
