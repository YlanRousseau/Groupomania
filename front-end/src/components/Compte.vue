<template>
<div class="Compte">
  <div class="card">
    <h1 class="card__title">Espace Perso</h1>
    <p> Bonjour, {{ this.userAccount.userName}} {{ this.userAccount.userFirstName}} sur cette page tu peux supprimer ton compte ! </p>
    <div class="form-row">
      <button  @click="deleteAccount()" class="button">
        Supprimer Compte
      </button>
    </div>
  </div>
  </div>
</template>

<script>
import router from "../router";
const axios = require('axios');

export default {
  name: 'Compte',
  
  data() {
    return {
      userAccount:{
        userId: localStorage.getItem('userId'), 
        userName: localStorage.getItem('userName'),
        userFirstName :  localStorage.getItem('userFirstName'),
      }
    }
  },
   methods: {
    deleteAccount(){
      axios.delete(`http://localhost:3000/api/auth/${ this.userAccount.userId }`,
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer` + localStorage.getItem("token"),
            }
          }
      )
      .then(localStorage.clear())
      .then(router.push({ path : '/'}));
    }
  }
  
}
</script>

<style scoped>
.compte{
    display: flex;
    justify-content: center;
}
.card {
  max-width: 100%;
  background: rgb(255, 255, 255);
  border-radius: 16px;
  padding: 35px;
  margin-top: 2%;
  box-shadow: rgb(82 82 82) 1px 7px 24px 5px;
  text-align: center;
}
.card__title {
  text-align:center;
  font-weight: 800;
  margin: 0;
}
.card__subtitle {
  text-align: center;
  color:#666;
  font-weight: 500;
}
.button {
    background: red;
    color:white;
    border-radius: 8px;
    font-weight: 800;
    font-size: 15px;
    border: none;
    width: 100%;
    padding: 16px;
    transition: .4s background-color;
  }
  
  .button--disabled {
    background:#cecece;
    color:#ececec
  }
  .button--disabled:hover {
    cursor:not-allowed;
    background:#cecece;
  }
</style>>