<template>
    <div class="navhead">
        <router-link to='/mur'>
        <h1>
            <img src="@/assets/icon-above-font.svg" alt="Groupomania logo">
        </h1>
        </router-link>

        <nav>
            <router-link to='/profile'><div> Profile</div></router-link>
        </nav>
    </div> 

</template>

<script>
export default{
name:'Header',  
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
        color: red;
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