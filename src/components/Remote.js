
export default function getFromRemote() {
  return new Promise((res, rej) => {
      console.log("Ejecutando promesa");
      setTimeout(() => {
        res([
          { id: 200, name: 'Granola 250g', stock: '20', image:'granola_250g.jpg', category:'Semillas', price:'230', decription :''},
          { id: 201, name: 'Almendras 250g', stock: '20', image:'almendras_100grs.jpg', category:'Frutos', price:'285', decription :''},
          { id: 202, name: 'Avellana Arrollada Gruesa 100g', stock: '20', image:'avena_arrollada_gruesa_100grs.jpg', category:'', price:'190', decription :''},
          { id: 203, name: 'Mix Frutos Secos 100g', stock: '20', image:'mix_frutos_secos_100grs.jpg', category:'', price:'250', decription :''},
          { id: 204, name: 'Nueces Mariposa Preomium 100g', stock: '20', image:'nueces_mariposa_blanca_premium_100grs.jpg', category:'', price:'150', decription :''}
          ]);
      }, 2000);
    });

  // console.log("Termine de crear mi promesa");
  
  // Promise.then(res => {
  //     console.log(res);
  // }, rej => {
  //     console.log("No trajo nada")
  // })

  };
  

