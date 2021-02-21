import {mount as cartMount} from 'cart/CartShow';
import {mount as productMount} from 'products/ProductsIndex';


console.log('Container!');

cartMount(document.querySelector('#dev-cart'))
productMount(document.querySelector('#dev-products'))