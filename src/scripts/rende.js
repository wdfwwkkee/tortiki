


async function render() {
    const responce = await fetch('https://fakestoreapi.com/products');
    const array = await responce.json();
    console.log(array)
}


render();