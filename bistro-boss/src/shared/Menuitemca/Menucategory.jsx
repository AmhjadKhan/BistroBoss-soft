import { Link } from 'react-router-dom'
import Cover from '../Cover/Cover'
import MenuItem from './MenuItem'

const Menucategory = ({items, title, coverimg}) => {
  return (
    <div>
        {title && <Cover img={coverimg} title={'our menu'}></Cover>}
        <div className='grid grid-cols-2 gap-4 border-spacing-3'>
          {
            items.map(item =><MenuItem 
            key={item._id}
            item={item}
            title={title}
            /> )
          }
      </div>
      <Link to={`/order/${title}`}>
          <button className='btn btn-primary mt-5 mb-10'>Order Now</button>
      </Link>
    </div>
  )
}

export default Menucategory