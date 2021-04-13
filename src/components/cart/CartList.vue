<template>
 <div >
    <h1>Shopping Cart</h1>
    <CartItem v-for="product in cartItems"
      :key="product.id"
        :product = "product" />
     <h3 id="total-price"> Total: ${{totalPrice}}</h3>

     <button id="checkout-button">
          Proceed to Checkout
      </button>
   
</div>
   
</template>

<script>
import CartItem from './CartItem';

export default{
    name:'CartList',
    props:['cartItems'],
    components:{
        CartItem,
    }, 
    computed:{

      totalPrice(){
        return this.cartItems.reduce(
          (sum,item) => sum + Number(item.price),
          0,
        );
      }

    }
}
</script>


<style scoped>
  .grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
  }

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

   
</style>
