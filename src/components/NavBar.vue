<template>
  <!-- <div id="nav-bar">
    <router-link to="/products" id="products-link">
      <h2>Vue Online Shopping</h2>
    </router-link>
     <router-link to="/cart" id="cart-link">
       <p class="h3 mb-2">  
         <b-icon icon="person-circle" aria-hidden="true"></b-icon>
       </p>
    </router-link>
 
    <router-link to="/cart" id="cart-link">
       <p class="h3 mb-2">  
         <b-icon icon="cart" aria-hidden="true"></b-icon>
       </p>
    </router-link>
 
  </div> -->

  <div id="nav-bar-container">
  <b-navbar toggleable="lg" type="dark" id="nav-bar" class="mx-auto">
     
       <b-navbar-brand>
          <router-link to="/products" id="products-link">
            Vue Online Shopping
         </router-link>
      </b-navbar-brand>
      

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
   
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
        </b-nav-form>
 
        <router-link to="/user-profile" >
          <p class="h4 mx-3">  
            <b-icon icon="person-circle" variant="success" aria-hidden="true"></b-icon>
          </p>
        </router-link>
    
        <router-link to="/cart" >
          <p class="h4 mx-3">  
            <b-icon icon="cart" variant="success" aria-hidden="true"></b-icon>
          </p>
        </router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    name: 'NavBar',
}
</script>

<style lang="scss">
 
h1{
  color:$mainColor,
  
}
</style>

<style scoped>

  #nav-bar-container{
     border-bottom: 1px solid #ddd;
     background-color: aliceblue;
  }

  #nav-bar {
    height: 75px;
    width: 100%;
    max-width: 1200px;
  }

  #products-link {
    text-align: center;
    display: block;
    color: rgb(35, 101, 4);
    font-size: 22px;  
    top: 16px;
    text-decoration: none;
  }

  #products-link h1 {
      margin: 0;
  }

  #cart-link {
    position: absolute;
    right: 16px;
    top: 16px;
  }
</style>
