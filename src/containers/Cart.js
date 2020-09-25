import React , {useState, useEffect} from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import {getFirestore} from "../firebase/index";
import {Link,useParams} from "react-router-dom";
import '../assets/style.css';
import { useCartContext, ListProvider } from '../context/CartContext';


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
	const {addItem,list,removeItem,cargando} = useCartContext();
	const [item, setItem] = useState([]);



		useEffect(() => {
			console.log('Mounted Cart');
			obtenerItem(id).then(res => {
				setItem(res);
				addItem(res);
			}).catch((error) => {
				console.log("Error buscando item ", error);
			}).finally(() => {
				
			  });
	
			return ()=> {
				console.log ('Dismounted Cart');
			}
		},[]);



	return <>

			{ cargando && <div id='styleCenter'>
									<p>Obteniendo carrito...</p>
									<br/>
									<br/>
									<Link to={'/item/' + id + '/detail'}><button id='styleVolver' type="button" class="btn btn-info">Volver</button></Link>	
							</div>	
				} 

				<br/>
				<br/>

				{ !cargando &&  
					<div>
							<button onClick={() => removeItem(item)}>Remove Item</button>						
							<ul>{list.map(i => <li>{i.name}</li>)}</ul>
						<br/>
						<br/>
						<button type="button" class="btn btn-info" onClick={() => createOrder({item})}> Crear orden de compra</button>	
						<br/>
						<Link to={'/item/' + id + '/detail'}><button id='styleVolver' type="button" class="btn btn-info">Volver</button></Link>	
					</div>
				}
	</>
}

function Cart(){
	const {productId} = useParams();

			return <>
				<ListProvider>
					<ListItems id={productId}/>
				</ListProvider>
			</>
}

export default Cart;