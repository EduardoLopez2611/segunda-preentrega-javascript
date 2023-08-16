let nombre=prompt("ingrese su nombre y apellido")
if (nombre !=""){
    alert(`su nombre es ${nombre}`)
// }else{
//     alert("es necesario que confirme su nombre para continuar.")
//     nombre=prompt("ingrese su nombre y apellido")
//     alert(`su nombre es ${nombre}`)
// }
let edad = parseFloat (prompt("ingrese su edad"))
if (edad < 18){
    alert(`debes ser mayor de edad para continuar.`)
}else{
    alert(`eres mayor de edad, puedes continuar`)
    function saludar(){
        alert(`Hola ${nombre}, le damos la bienvenida a nuestra página.`)
    }
    saludar()
    const producto =[
        {id: 1, nombreProducto: "remeras", precio: 5000},
        {id: 2, nombreProducto: "zapatillas", precio: 12000},
        {id: 3, nombreProducto: "pantalones", precio: 8000},
        {id: 4, nombreProducto: "medias", precio: 1000},
        {id: 5, nombreProducto: "camisetas de futbol", precio: 7200},
        {id: 6, nombreProducto: "shorts", precio: 3000},
        {id: 7, nombreProducto: "bermudas", precio: 3700},
        {id: 8, nombreProducto: "pijamas", precio: 2000},
        ];
        // for (const productos of producto){
        //     console.log(productos.nombreProducto);
        //     console.log(productos.precio);
        // }
        let precio= parseInt(prompt("ingrese la cantidad de dinero mínimo a gastar."));
    let filtrados= producto.filter((item)=>item.precio > precio);
    
    filtrados.forEach(item=>{
        alert(`
        ID:${item.id}
        nombre:${item.nombreProducto}
        $${item.precio}
        `)
    })
    let buscador=prompt("ingrese el producto que desea encontrar")
    let productos
    for (const item of producto) {
        if (item.nombreProducto===buscador) {
            productos=item
        }
    }
    
    if(productos){
        let mensaje=`
        ID:${productos.id}
        nombre:${productos.nombreProducto}
        $${productos.precio}
        `;
        alert(mensaje);
    }else{
        alert("El producto no se encuentra disponible o usó caracteres inválidos. Intente nuevamente")
        buscador=prompt("ingrese el producto que desea encontrar")
        if(productos){
            let mensaje=`
            ID:${productos.id}
            nombre:${productos.nombreProducto}
            $${productos.precio}
            `;
            alert(mensaje);
    }``
    // let rebajaProductos= producto.map(item =>{
    //     return{
    //         id: item.id,
    //         nombre: item.nombreProducto,
    //         precio: item.precio * 0.21,
    //     };
    // });
} 
}
}else{
    alert("es necesario que confirme su nombre para continuar.")
    nombre=prompt("ingrese su nombre y apellido")
    alert(`su nombre es ${nombre}`)
    let edad = parseFloat (prompt("ingrese su edad"))
if (edad < 18){
    alert(`debes ser mayor de edad para continuar.`)
}else{
    alert(`eres mayor de edad, puedes continuar`)
    function saludar(){
        alert(`Hola ${nombre}, le damos la bienvenida a nuestra página.`)
    }
    saludar()
    const producto =[
        {id: 1, nombreProducto: "remeras", precio: 5000},
        {id: 2, nombreProducto: "zapatillas", precio: 12000},
        {id: 3, nombreProducto: "pantalones", precio: 8000},
        {id: 4, nombreProducto: "medias", precio: 1000},
        {id: 5, nombreProducto: "camisetas de futbol", precio: 7200},
        {id: 6, nombreProducto: "shorts", precio: 3000},
        {id: 7, nombreProducto: "bermudas", precio: 3700},
        {id: 8, nombreProducto: "pijamas", precio: 2000},
        ];
        let precio= parseInt(prompt("ingrese la cantidad de dinero mínimo a gastar."));
    let filtrados= producto.filter((item)=>item.precio > precio);
    
    filtrados.forEach(item=>{
        alert(`
        ID:${item.id}
        nombre:${item.nombreProducto}
        $${item.precio}
        `)
    })
    let buscador=prompt("ingrese el producto que desea encontrar")
    let productos
    for (const item of producto) {
        if (item.nombreProducto===buscador) {
            productos=item
        }
    }
    
    if(productos){
        let mensaje=`
        ID:${productos.id}
        nombre:${productos.nombreProducto}
        $${productos.precio}
        `;
        alert(mensaje);
    }else{
        alert("El producto no se encuentra disponible o usó caracteres inválidos. Intente nuevamente")
        buscador=prompt("ingrese el producto que desea encontrar")
        if(productos){
            let mensaje=`
            ID:${productos.id}
            nombre:${productos.nombreProducto}
            $${productos.precio}
            `;
            alert(mensaje);
    }``
} 
}
}