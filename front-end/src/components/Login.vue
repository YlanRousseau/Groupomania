<template>
  <div class="card">
     <img class='imgroupo' src="@/assets/icon-above-font.svg" alt="Groupomania Logo">
    <h1 class="card__title" v-if="mode == 'login'">Connexion</h1>
    <h1 class="card__title" v-else>Inscription</h1>
    <p class="card__subtitle" v-if="mode == 'login'">Tu n'as pas encore de compte ? <span class="card__action" @click="switchToCreateAccount()">Créer un compte</span></p>
    <p class="card__subtitle" v-else>Tu as déjà un compte ? <span class="card__action" @click="switchToLogin()">Se connecter</span></p>
    <div class="form-row">
      <input v-model="email" class="form-row__input" type="text" placeholder="Adresse mail"/>
    </div>
    <div class="form-row" v-if="mode == 'create'">
      <input v-model="prenom" class="form-row__input" type="text" placeholder="Prénom"/>
      <input v-model="nom" class="form-row__input" type="text" placeholder="Nom"/>
    </div>
    <div class="form-row">
      <input v-model="password" v-on:keydown="invalid = false" class="form-row__input" type="password" placeholder="Mot de passe"/>
    </div>
    <div class="form-row" v-if="mode == 'login' && status == 'error_login'">
      Adresse mail et/ou mot de passe invalide
    </div>
    <div class="form-row" v-if="mode == 'create' && status == 'error_create'">
      Adresse mail déjà utilisée
    </div>
    <div class="form-row">
      <button @click="login()" class="button" :class="{'button--disabled' : !validatedFields}" v-if="mode == 'login'">
        <span>Connexion</span>
      </button>
      <button @click="createAccount()" class="button" :class="{'button--disabled' : !validatedFields}" v-else>
        <span>Créer mon compte</span>
      </button>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'
import router from "../router";
const axios = require('axios');

export default {
  name: 'Login',
  data : function(){
      return{
          mode :'login',
          email : '',
          prenom:'',
          nom: '',
          password: '',
          invalid: false,
     }
  },
  computed: {
      validatedFields: function(){
          if(this.mode == 'create'){
              if (this.email != '' && this.prenom != '' && this.nom != '' && this.password != ''){
                  return true;
              }else{
                  return false;
              }
          }else{
              if(this.email != '' && this.password != ''){
                  return true;
              }else{
                  return false;
              }
          }
      },
      ...mapState(['status'])
  },

methods : {
    switchToCreateAccount: function(){
        this.mode = 'create';
    },
    switchToLogin : function (){
        this.mode = 'login';
    },
    login: function(){
       axios.post("http://localhost:3000/api/auth/login", { 
                email :     this.email,
                password:   this.password,
             })
            .then(function (res) {
                localStorage.setItem("token",   res.data.token)
                localStorage.setItem("userId",  res.data.userId)
                localStorage.setItem("userName",res.data.userName)
                window.alert('connexion réussie, redirection vers la page principale');
                router.push({ path : '/Mur'});
            })
            .catch((error) => {
                console.log(error);
            })         
        },
      
      createAccount : function(){  
      
        axios.post("http://localhost:3000/api/auth/signup", { 
                    nom : this.nom, 
                    prenom : this.prenom,
                    email : this.email,
                    password : this.password,
                })
                .then(() => {
                    alert('inscription réussie, redirection vers le module de connexion');
                    router.push({ path : '/'});
                    location.reload();
                })
                .catch((error)=>{
                    console.log(error)});
            } 
        }
    }

</script>

<style scoped>

  .form-row {
    display: flex;
    margin: 16px 0px;
    gap:16px;
    flex-wrap: wrap;
  }
  .form-row__input {
    padding:8px;
    border: none;
    border-radius: 8px;
    background:#f2f2f2;
    font-weight: 500;
    font-size: 16px;
    flex:1;
    min-width: 100px;
    color: black;
  }
  .form-row__input::placeholder {
    color:#aaaaaa;
    text-align: center;
  }
  .imgroupo{
      width: 300px;
  }
  img {
  max-width: 100%;
  border-radius: 8px;
}
.card {
  max-width: 100%;
  width: 540px;
  background: rgb(255, 255, 255);
  border-radius: 16px;
  padding:32px;
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
    background: #2196F3;
    color:white;
    border-radius: 8px;
    font-weight: 800;
    font-size: 15px;
    border: none;
    width: 100%;
    padding: 16px;
    transition: .4s background-color;
  }
  .card__action {
    color:#2884d0;
    text-decoration: underline;
  }
  .card__action:hover {
    cursor:pointer;
  }
  .button:hover {
    cursor:pointer;
    background: #1976D2;
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