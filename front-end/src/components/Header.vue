<template>
    <div class="header">
        <router-link to='/'>
        <h1>
            <img src="@/assets/icon-left-font.png" alt="Groupomania logo">
        </h1>
        </router-link>

        <nav>
            <router-link to='/profile'>
                <div>Mon compte</div>
            </router-link>
            <div id="disconnect-btn">Se déconnecter</div>
        </nav>
    </div> 
</template>

<script>
export default{
name:'Header',  
}
</script>

<style scoped>
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 70px 20px 70px;
    }
    .header img{
        width: 230px;
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