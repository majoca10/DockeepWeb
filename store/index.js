export const getters = {
    isAuthenticated(state) {
      return state.auth.loggedIn
    },
  
    loggedInUser(state) {
      return state.auth.user
    },

    cartTotalPrice: state => {
      let total = 0;
  
    state.cart.forEach(item => {
          total += item.total * item.cantidad;
      })
      return total
    },
    cartItemCount: state => {
      return state.cart.length;
    }
}

export const state = () => ({
  products:[],
  cart:[],
});
  
export const mutations = {
    setproducts: (state, products) => (state.products = products),
    

    addtocart: (state,product) =>{

      let productInCart = state.cart.find(item => {
        return item.id === product.id});

      if(productInCart){
        productInCart.cantidad
        
      }else{
      state.cart.push(product)
        console.log('product', product)
        window.localStorage.setItem('product', JSON.stringify(product));

      }
    },


    increase: (state,id) =>{
      let found = state.cart.findIndex(el => el.id === id)
        state.cart[found].cantidad++;
    },
    decrease: (state,id) =>{
      let found = state.cart.findIndex(el => el.id === id)
      let count = state.cart[found].cantidad;
      if(count<2){
        state.cart.splice(found,1);
      }else{
      state.cart[found].cantidad--;
      }
    },


  };