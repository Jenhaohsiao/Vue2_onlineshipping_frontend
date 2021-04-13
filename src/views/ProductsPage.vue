<template>
 <div id="page-wrap">
    <div class="grid-wrap">
       <ProductsGrid :products="products"/>
    </div>
  </div>
</template>

<script>
import {products} from '../fake-data';
import ProductsGrid from '../components/product/ProductsGrid';
export default {
    name: 'ProductsPage',
    components:{
      ProductsGrid,
    },
    data(){
      return {
        products
      };
    }
};
</script> 
