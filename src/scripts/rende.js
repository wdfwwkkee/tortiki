


async function render() {
    const responce = await fetch('https://my-json-server.typicode.com/wdfwwkkee/tortiki/db');
    const array = await responce.json();
    console.log(array)
}


render();