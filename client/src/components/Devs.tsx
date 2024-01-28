import { Link } from 'react-router-dom'
import imagePlaceHolder from '../assets/image-placeholder.png'

const Devs = () => {

  return (
    <Link to="/" className="devs">
        <div className="image-wrapper">
            <img src={ imagePlaceHolder} alt="" />
        </div>
        <div className="content-wrapper">
            <p> Joshua Philip Unilongo</p>
        </div>
    </Link>
  )

}

export default Devs