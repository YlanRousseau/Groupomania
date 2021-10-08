<template>
    <div class="navhead">
        <router-link to='/mur'>
        <h1>
            <img src="@/assets/icon-above-font.svg" alt="Groupomania logo">
        </h1>
        </router-link>

        <nav>
            <router-link to='/profile'><div> Votre compte</div></router-link>
            <div @click="logout()" > Deconnexion</div>
        </nav>
    </div> 

</template>

<script>
import router from "../router";

export default{
name:'Header',  
methods :{
    logout : function(){
      localStorage.clear();
      router.push({ path : "/" });
    },
  }
}
  
</script>

<style scoped>
    .navhead{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 2%;
    }
    .navhead img{
        width: 170px;
        height: auto;
    }
    nav{
        display: flex;
    }
    nav div{
        margin-left: 30px;
        font-weight: bold;
        cursor: pointer;
        transition-duration: .2s;
        color:black;
        text-decoration: none;
    }
    .fas{
        font-size: 1.5rem;
    }
    nav div:hover{
        color: red;
    }
    h1{
        margin: -40px -15px;
    }
    @media (max-width: 670px) {
        .header{
            flex-direction: column;
            padding: 30px 20px 20px 20px;
        }
    }
</style>