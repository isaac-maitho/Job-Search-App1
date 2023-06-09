import { useNavigate } from 'react-router-dom'
import { FaSearchDollar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes  from 'prop-types'
import useLogout from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

function Navbar({title}) {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  
  const handleClick = () =>{
    logout()
  }

  const navigate = useNavigate()
  return (
    <nav className='navbar mb-12 shadow-lg background-neutral text-neutral-content'>
      <div className="container mx-auto">
        <Link to='/' 
           className='text-lg font-bold align-middle' 
           onClick={() => navigate('/')}>
          <FaSearchDollar className='inline text-3xl pr-2' />
          {title}
        </Link>

        <Link to='/jobs-available' 
           className='btn btn-ghost rounded-btn font-bold'  
           onClick={() => navigate('/jobs-available')}>
          Jobs Available
        </Link>
        {user && (
          <div>
          <span>{user.email}</span>
          <button className='btn btn-ghost rounded-btn' onClick={handleClick}>Log Out</button>
        </div>
        )}
      </div>
    
      <div className="justify-end">
        <Link to='/about' 
           className='btn btn-ghost rounded-btn'  
           onClick={() => navigate('/about')}>
          About
        </Link>
      </div>
      {!user && (
      <div className="justify-end">
        <Link to='/login' 
           className='btn btn-ghost rounded-btn'  
           onClick={() => navigate('/login')}>
          Login
        </Link>
        <Link to='/signup' 
           className='btn btn-ghost rounded-btn'  
           onClick={() => navigate('/signup')}>
          Signup
        </Link>
      </div>
      )}
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Job Search App', 
}

Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar