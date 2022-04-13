/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const urlBase = "https://platzi-avo.vercel.app"
const appNode = document.querySelector('#app')

const formatPrice = (price)=>{
   const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: "currency",
        currency: "USD",
    }).format(price)


    return newPrice
}


//
window
.fetch(`${urlBase}/api/avo`)
.then(response=> response.json())
.then((responseJson)=>{
    const todosLosItems = []
    responseJson.data.forEach(item => {
        //imagen
       const image = document.createElement('img');
        image.src = `${urlBase}${item.image}`
        image.className = 'avocado-image'
       //titulo
       const title = document.createElement('h2');
       title.textContent = item.name
       title.className = 'avocado-title'
       //precio
       const price = document.createElement('div');
        price.textContent = formatPrice(item.price)
        price.className = 'avocado-price'
       const container = document.createElement('div')
       container.className= 'avocado-container'
        
       container.append(image, title, price)
        todosLosItems.push(container)

        appNode.append(...todosLosItems)

    });
})