import faker from 'faker';

const mount = (element) => {
    const cartItems = `<div> you have ${faker.random.number()} items in your cart </div>`;
    element.innerHTML = cartItems;
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-cart')
    if(el){
        mount(el)
    }
}

export { mount }