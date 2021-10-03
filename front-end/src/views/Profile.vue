<template>
    <div class="Profile">
    <Header/>
    <Compte/>
    </div>

</template>

<script>
import Header from '@/components/Header.vue'
import Compte from '@/components/Compte.vue'

export default {
   name: 'Profile',

   components:{
       Header,
       Compte,
   },
}
</script>

<style scoped>
.Profile{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
</style>