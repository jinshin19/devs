import { Link } from 'react-router-dom'
import imagePlaceHolder from '../assets/image-placeholder.png'
import { DevTypes } from '../types/types'

const Devs = ( { dev_id, firstname, middlename, lastname }: DevTypes ) => {

  return (
    <Link to={`/read/${dev_id}`} className="devs">
        <div className="image-wrapper">
            <img src={ imagePlaceHolder} alt="" />
        </div>
        <div className="content-wrapper">
            <p> {`${firstname} ${middlename} ${lastname}`} </p>
        </div>
    </Link>
  )

}

export default Devs