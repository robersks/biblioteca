const enviar = async()=>{
    let res = await(await fetch ("http://localhost:5046/libros")).json();
    console.log(res)
};
enviar();
