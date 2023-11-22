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
         {/* this is offer section  */}
         <Sectiontitle  subHeading={'Offer section'} heading={' this is offer menu item in '}></Sectiontitle>
         <Menucategory 
            items={offered}
            title={'offered'}>
         </Menucategory>
        
        {/* this is desert   */}
        <Sectiontitle  subHeading={'Desert section'} heading={' this is offer Desert item in '}></Sectiontitle>
         <Menucategory items={desert} title={'desert'}></Menucategory>
         {/* this is soup   */}
        <Sectiontitle  subHeading={'Soup section'} heading={' this is offer soup item in '}></Sectiontitle>
         <Menucategory items={soup} title={'soup'}></Menucategory>
         {/* this is salad   */}
        <Sectiontitle  subHeading={'Salad section'} heading={'This is offer salad item in '}></Sectiontitle>
         <Menucategory items={salad} title={'salad'}></Menucategory>
         {/* this is pizza  */}
        <Sectiontitle  subHeading={'Pizza section'} heading={'This is offer Pizza item in '}></Sectiontitle>
         <Menucategory items={pizza} title={'pizza'}></Menucategory>

      </div>
    </div>
  )
}

export default Menu
