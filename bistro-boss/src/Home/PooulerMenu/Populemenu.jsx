
import { useEffect, useState } from 'react'
import Sectiontitle from '../../Components/SectionTitle/Sectiontitle'
import MenuItem from '../../shared/Menuitemca/MenuItem'
import useMenu from '../../Hooks/useMenu'

const Populemenu = () => {
    const [menu, loding] = useMenu();
    const populerItems = menu.filter(item => item.category === 'popular')
      
    // useEffect(() =>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const populerItems = data.filter(item => item.category === 'popular')
    //         setMenu(populerItems)
    //     })
    // },[])
  return (
    <section className='mb-12 mt-10'>
      <Sectiontitle>
         
      </Sectiontitle>
      <div className='grid grid-cols-2 gap-4 border-spacing-3'>
          {
            populerItems.map(item =><MenuItem 
            key={item._id}
            item={item}
            /> )
          }
      </div>
    </section>
     
  )
}

export default Populemenu
