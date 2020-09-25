import React, {useState,useContext} from 'react';

export const ListContext = React.createContext();


export const useCartContext = () => useContext(ListContext);

export function ListProvider({value,children, count }) {
  const [list, setList] = useState(value || []);
  const [cargando, setCargando] = useState(true);

  function addItem(item){
    const l = [...list, item];
    setList(l);
    setCargando (false);
  }
  
  function removeItem(item) {
    const u = list.filter(u => u.id !== item.id);
    console.log("Removió este item: " + item.name)
    setList(u);
  }

  return <ListContext.Provider value={{removeItem, addItem, cargando, list }}>
    {children}
  </ListContext.Provider>
}