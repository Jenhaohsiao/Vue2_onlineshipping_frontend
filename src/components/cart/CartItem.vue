<template>
    <div  class="product-container">
        <img class="product-image" v-bind:src="product.imageUrl" />

        <div class="details-wrap">
          <h3>{{product.name}}</h3>
          <p>${{product.price}}</p>
        </div>    

        <button class="remove-button">
            Remove From Cart
        </button>
    </div>
</template>

<script>
export default{
    name: 'CartItem',
    props:['product'],
}
</script> 


<style scoped>

  .product-container {
    align-content: 'center';
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 16px;
    width: 100%;
  }

 .product-container {
    align-content: 'center';
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 16px;
    width: 100%;
  }

   .details-wrap {
    padding: 0 16px;
    flex: 3;
  }

  .remove-button {
    flex: 1;
    margin: auto;
  }

.product-item {
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 2px 5px #888;
    display: flex;
    flex-direction: column;
    margin-bottom: 2%;
    padding: 20px;
    position: relative;
    width: 32%;
  }

  .product-name {
    margin-bottom: 0;
  }

  img {
    height: 200px;
    width: 200px;
  }

  a {
    width: 100%;
  }

  button {
    width: 100%;
  }
</style>