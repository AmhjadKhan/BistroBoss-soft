import { useEffect, useState } from "react"


const useMenu = () => {
  const [menu, setmenu] = useState([ ])
  const [loding, setloding] = useState(true)
   useEffect(() =>{
    fetch('http://localhost:5000/menu')
    .then(res => res.json())
    .then(data =>{
        setmenu(data)
        setloding(false)
    })
   },[])
   return [menu, loding]
}

export default useMenu
