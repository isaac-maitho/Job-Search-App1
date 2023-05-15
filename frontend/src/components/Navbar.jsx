import { useNavigate } from 'react-router-dom'
import { FaSearchDollar } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PropTypes  from 'prop-types'

function Navbar({title}) {

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
      </div>
      <div className='mx-auto'>
        <Link to='/jobs-available' 
           className='btn btn-ghost rounded-btn font-bold'  
           onClick={() => navigate('/jpbs-available')}>
          Jobs Available
        </Link>
      </div>
      <div className="justify-end">
        <Link to='/about' 
           className='btn btn-ghost rounded-btn'  
           onClick={() => navigate('/about')}>
          About
        </Link>
      </div>
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