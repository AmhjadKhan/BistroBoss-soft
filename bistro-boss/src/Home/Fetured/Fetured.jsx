import Sectiontitle from "../../Components/SectionTitle/Sectiontitle"
import './Feture.css'

import fetured from '../../assets/home/featured.jpg'

const Fetured = () => {
  return (
    <div className="fetured-item font-bold text-gray-700">
        <Sectiontitle>
            SubHeading="Checkout"
            heading="From our menu"
        </Sectiontitle>
        <div className="md:flex bg-fixed justify-center items-center">
            <div>
                <img src={fetured} alt="" />
            </div>
            <div className="md:ml-12 justify-start">
                <p>January 20, 2024</p>
                <p className="uppercase">Where can i get some</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab laborum rerum magni officiis amet autem quia? Nobis minus debitis nisi nulla officia qui! Alias, repudiandae quidem quam reprehenderit suscipit corrupti iste consequuntur, maiores, necessitatibus officiis nemo quaerat. Recusandae quisquam nisi enim hic! Delectus ipsum fugiat accusamus f z zacere, quam harum alias.</p>
                <button className="btn btn-outline border-0 border-b-2 py-4">Order Now</button>
            </div>
        </div>
    </div>
  )
}

export default Fetured