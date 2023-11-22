import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import orderba from "../../assets/shop/banner2.jpg";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
import Foodcard from "../../shared/OrderCard/Foodcard";
import { useParams } from "react-router-dom";

const Order = () => {
  const Categoryes = ['desert', 'pizza', 'salad','soup','offered']
  const { category } = useParams();
  console.log(category)
  const initialIndex = Categoryes.indexOf(category);
  console.log(initialIndex)

  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

    const desert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const offered = menu.filter(item => item.category === 'offered')
  return (
    <div>
      <Helmet>
        <title>Bistro | Order </title>
      </Helmet>
      <div>
        <Cover
          img={orderba}
          title={"Order section"}
          Secondti={
            'how are you check your Order sectin if you i"ll be like in this'
          }
        ></Cover>

<Tabs defaultIndex={1} onSelect={(index) => setTabIndex(index)}  >
    <TabList className="mt-6">
      <Tab>Dessert</Tab>
      <Tab>pizza</Tab>
      <Tab>Salad</Tab>
      <Tab>Soup</Tab>
      <Tab>Offered</Tab>

    </TabList>
    
    {/* desert  */}
    <TabPanel>
    <div className="grid md:grid-cols-3 gap-8">
      {
        desert.map(item => <div key={item._id} className="flex flex-col h-full">
        <Foodcard item={item} />
      </div>)
      }
      </div>
    </TabPanel>
    {/* pizza  */}
    <TabPanel>
    <div className="grid md:grid-cols-3 gap-8">
      {
        pizza.map(item => <div key={item._id} className="flex flex-col h-full">
        <Foodcard item={item} />
      </div>)
      }
      </div>
    </TabPanel>
    {/* salad  */}
    <TabPanel>
    <div className="grid md:grid-cols-3 gap-8">
      {
        salad.map(item => <div key={item._id} className="flex flex-col h-full">
        <Foodcard item={item} />
      </div>)
      }
      </div>
    </TabPanel>
    {/* soup  */}
    <TabPanel>
    <div className="grid md:grid-cols-3 gap-8">
      {
        soup.map(item => <div key={item._id} className="flex flex-col h-full">
        <Foodcard item={item} />
      </div>)
      }
      </div>
    </TabPanel>
    {/* offerd  */}
    <TabPanel>
    <div className="grid md:grid-cols-3 gap-8">
      {
        offered.map(item => <div key={item._id} className="flex flex-col h-full">
        <Foodcard item={item} />
      </div>)
      }
      </div>
    </TabPanel>
  </Tabs>
        
      </div>
    </div>
  );
};

export default Order;
