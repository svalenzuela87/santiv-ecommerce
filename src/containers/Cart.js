import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import {getFirestore} from "../firebase/index";


//Creando una orden de compra y agregandola a Firesore
async function createOrder(){

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




function Cart(){
	return <>
			<button type="button" class="btn btn-info" onClick={() => createOrder()}> Carrito</button>	
	</>
}

export default Cart;