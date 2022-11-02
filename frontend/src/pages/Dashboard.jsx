import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user, navigate, dispatch])

  return (
    <>
      <section className='heading'>
        <h2>Your Name: {user && user.name}</h2>
        <h2>Your Email: {user && user.email}</h2>
        {
          user?.image &&
              <>
                <h2>Your Image</h2>
              <img src={user.image} />
              </>
        }

      </section>


    </>
  )
}

export default Dashboard
