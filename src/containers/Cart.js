import React , {useState, useEffect} from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import {getFirestore} from "../firebase/index";
import {Link,useParams} from "react-router-dom";
import '../assets/style.css';
import { useCartContext, ListProvider } from '../context/CartContext';
// import Contador from '../components/NavBar/CartIcon';

const buttonRemove = {  
  height: '47px',
  marginTop: '64px',
};


//Creando una orden de compra y agregandola a Firesore
async function createOrder(item){

	const lista = [{ id: '200', name: 'Granola 250g', stock: '20', image:'granola_250g.jpg', category:'Semillas', price:'230', decription :'', qty: '2'}];

	const buyer = {
		name :"Santiago" , 
		phone : "1234", 
		email : "saas@hasa.com"
	}

	const order= {
		buyer, 
		items: lista.map(cartItem => ({id: cartItem.id, qty: cartItem.qty})),
		date: '',
		total: ''
	}

	const price ="234";

	//UPDATE
	// const itemsToUpdate =db
	// .collection('items', firebas.firestore.FieldPath.documentId(),'in', items.map(i => i.id));
	
	const db = getFirestore();

	const orders = db.collection ("orders");
	const newOrder = {
	buyers: buyer, 
	items: order,
	date: firebase.firestore.FieldValue.serverTimestamp(),
	// date: firebase.firestone.Timestamp.fromDate(new Date()),
	total: price,
	};

	//SIN ASYNC

	// orders.add(newOrder).then(({id}) => {
	// 	console.log(id); //se guarda el id de la nueva orden
	// 	setOrderId(id); //SUCCESS
	// }).catch(err => {
	// 	setError(err); //ERROR
	// }).finally(() => {
	// 	setLoading(false);
	// });


	//CON ASYNC
	try{
		const {id} = await orders.add(newOrder);
		console.log(id);  //se guarda el id de la nueva orden
		} catch(err){
			//seteamos feedback para el usuario
			console.log("error");
		}

}


//BUSCO ITEM DENTRO DEL ARRAY DE ITEMS POR ID
const obtenerItem= (id)=> new Promise((res, rej) =>{

	//DEFINO UBICACION EN EL STORAGE DE LOS PRODUCTOS
	let items = [];
	items.push(localStorage.getItem('items'));
	items = JSON.parse(items);

	setTimeout(() => {          
		//res(items.filter(x => x.id === id)); // DEVUELVE UN ARRAY CON TODO
		res(items.find(items => items.id === id));  //DEVUELVE EL CONTENIDO DEL ARRAY
	}, 3000);   
});


function ListItems({id}){
	const {addItem,list,removeItem,cargando,noItems,count,getList,noId} = useCartContext();

		useEffect(() => {
			console.log('Mounted Cart');
			if (id !== "lista"){
				obtenerItem(id).then(res => {
					addItem(res);
				}).catch((error) => {
					console.log("Error buscando item ", error);
				}).finally(() => {
				});
		
				return ()=> {
					console.log ('Dismounted Cart');
				}
			}else{
				console.log("Obteniendo lista del carrito sin id");
				getList();
			}	
		},[]);

		//Por si cambia el id del Params apuntando al iconCart
		useEffect(() => {
			if (id === "lista")
				getList();		
		},[id]);
		

	return <>

				{ cargando  ? <div id='styleCenter'>
									<p>Obteniendo carrito...</p>
									<br/>
									<br/>
									<Link to={'/item/' + id + '/detail'}><button id='styleVolver' type="button" class="btn btn-info">Volver</button></Link>	
							</div>	: null
				} 
			

			{/* ////////////CON ID PARA VOLVER AL PRODUCTO ///////////////// */}
			{ !noItems && !cargando && !noId ? <div>
						<div id='styleCenter'> No Hay Items Para mostrar</div>
						<br/>
						<br/> 
						<Link to={'/Productos/'}><button id='styleVolver' type="button" class="btn btn-info">Ver mas productos</button></Link>
						<br/>
						<Link to={'/item/' + id + '/detail'}><button id='styleVolver' type="button" class="btn btn-info">Volver</button></Link>
						</div>		: null
				}


				{ !cargando  && noItems && !noId ?  
					<div>
						        {list.map(p =>  
								<div class="producto" id={p.id} > 
								<p style={ {margin: '75px 20px 0px 20px'}}>{p.name}</p>
								<p style={ {margin: '75px 20px 0px 20px'}}>Cantidad: {p.qty}</p>
								   <button style={buttonRemove} onClick={() => removeItem(p.name)}>Remove Item</button>	
								</div>                
								)} 
						<div>
							<br/>
							<br/>
							<button type="button" class="btn btn-info" onClick={() => createOrder({list})}> Crear orden de compra</button>	
						</div>
						<br/>
								<p>El total es de: {count}</p>	
						<br/>
						<Link to={'/Productos/lista'}><button id='styleVolver' type="button" class="btn btn-info">Ver mas productos</button></Link>
						<br/>
						<Link to={'/item/' + id + '/detail'}><button id='styleVolver' type="button" class="btn btn-info">Volver</button></Link>
					</div>
						: null
				}

				{/* ////////////SIN ID PARA VOLVER AL PRODUCTO ///////////////// */}

				{ !noItems && !cargando && noId ? <div>
						<div id='styleCenter'> No Hay Items Para mostrar</div>
						<br/>
						<br/> 
						<Link to={'/Productos/'}><button id='styleVolver' type="button" class="btn btn-info">Ver mas productos</button></Link>
						<br/>
						<Link to={'/'}><button id='styleVolver' type="button" class="btn btn-info">Volver</button></Link>
						</div>		: null
				}


				{ !cargando  && noItems && noId ?  
					<div>
						        {list.map(p =>  
								<div class="producto" id={p.id} > 
								<p style={ {margin: '75px 20px 0px 20px'}}>{p.name}</p>
								<p style={ {margin: '75px 20px 0px 20px'}}>Cantidad: {p.qty}</p>
								   <button style={buttonRemove} onClick={() => removeItem(p.name)}>Remove Item</button>	
								</div>                
								)} 
						<div>
							<br/>
							<br/>
							<button type="button" class="btn btn-info" onClick={() => createOrder({list})}> Crear orden de compra</button>	
						</div>
						<br/>
								<p>El total es de: {count}</p>	
						<br/>
						<Link to={'/Productos/'}><button id='styleVolver' type="button" class="btn btn-info">Ver mas productos</button></Link>
						<br/>
						<Link to={'/'}><button id='styleVolver' type="button" class="btn btn-info">Volver</button></Link>
					</div>
						: null
				}


	</>
		
}

function Cart(){
	const {productId} = useParams();

		//Primero verifico si hay items en el carrito seteados previamente
		var verify = localStorage.getItem("cartItems");
    
		if(verify === null){
			console.log("No existe ningun Cart")
			// var value = "noCart";
			var value = [];
		}else{
			let cartItems = [];
			cartItems.push(localStorage.getItem("cartItems"));
			var value= JSON.parse(cartItems);
		}


			return <>
				<ListProvider value= {value}>
					<ListItems id={productId}/>
				</ListProvider>
			</>
		// }
}

export default Cart;