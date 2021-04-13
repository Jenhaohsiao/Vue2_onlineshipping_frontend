<template>
 <div id="page-wrap"> 
      <CartList :cartItems="cartItems"/>

   </div>
   
</template>

<script>
import {cartItems} from '../fake-data';
import CartList from '../components/cart/CartList';

export default {
    name: 'CartPage',
       components:{
      CartList,
    },
    data(){
      return {
        cartItems,
      };
    }, 
};
</script>

<style scoped>
  h1 {
    border-bottom: 1px solid black;
    margin: 0;
    margin-top: 16px;
    padding: 16px;
  }

  #total-price {
    padding: 16px;
    text-align: right;
  }

  #checkout-button {
    width: 100%;
  }

  .product-container {
    align-content: 'center';
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 16px;
    width: 100%;
  }

  .product-image {
    flex: 1;
    height: 100px;
    max-width: 100px;
  }

  .details-wrap {
    padding: 0 16px;
    flex: 3;
  }

  .remove-button {
    flex: 1;
    margin: auto;
  }
</style>