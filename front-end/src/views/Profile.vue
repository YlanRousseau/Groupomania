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
   mounted: function(){
       console.log(this.$store.state.user);
        if (this.$store.state.user.userId == -1){
            this.$router.push('/'); 
            return;
        }
   }
}
</script>

