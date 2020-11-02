import React, {useState,useContext,useEffect} from 'react';

export const ListContext = React.createContext();

export const useProductContext = () => useContext(ListContext);

export function ListProvider({value,children}) {
  const [list, setList] = useState(value || []);
  const [cargando, setCargando] = useState(true);
  const [noItems, setnoItem] = useState(true);
  const [noId, setnoId] = useState(false);
  const [count, setCount] = useState(0);


  //Aregar item
  function addItem(item){
      const l = [...list, item];
      setList(l);
      getCount(l)
      setCargando (false);
  }
  

  //Remover item
  function removeItem(item) {
    const u = list.filter(u => u.name !== item);
    setList(u);
    localStorage.setItem("cartItems",JSON.stringify(u));

    
    if (u == "") {
				console.log("Carro vacio")
				setnoItem(false);
      }else{
        getCount(u);
      }
      
  }

  //Contador de productos
  function getCount(lista){
    
    var count=lista.reduce(function(sum, current) {
      return sum + current.qty;
    }, 0);

    //console.log("El contador esta en: " + count)
    setCount(count);
  }


  //Mostrar lista desde el CartIcon
  function getList(){
    setnoId(true);
    let items = [];

    // if (value == "noCart"){
    if (!value.length) {  
      setnoItem(false);
      // setList([]);
    }else{
        items.push(localStorage.getItem('cartItems'));
        items = JSON.parse(items);
    }

    if (items == "") {
      console.log("Carro vacio")
      setnoItem(false);
    }else{
      getCount(items);
    }
    setCargando (false);
  }

  //Seteo en la variable del browser la lista una vez cargada
  useEffect(() => {
    localStorage.setItem("cartItems",JSON.stringify(list));
  },[list]);


  return <ListContext.Provider value={{removeItem, addItem, cargando, list, noItems,count, getList, noId }}>
    {children}
  </ListContext.Provider>
}