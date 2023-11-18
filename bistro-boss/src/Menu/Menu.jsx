import { Helmet } from 'react-helmet-async';
import Cover from '../shared/Cover/Cover';
import coverimg from '../assets/menu/banner3.jpg'
import useMenu from '../Hooks/useMenu';
import Sectiontitle from '../Components/SectionTitle/Sectiontitle';
import Menucategory from '../shared/Menuitemca/Menucategory';


const Menu = () => {
    const [menu] = useMenu();
    const desert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
  return (
    <div>
        <Helmet>
            <title>Bistro | Menu </title>
        </Helmet>
      <div>
        <Cover img={coverimg}
        title={'menu section'}
         Secondti={'how are you check your menu sectin if you i"ll be like in this'}></Cover>
         <Sectiontitle></Sectiontitle>
         <Menucategory items={offered}></Menucategory>

      </div>
    </div>
  )
}

export default Menu
