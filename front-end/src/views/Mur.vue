<template>
    <section class="Mur">
      <Header/>
 <h2>Exprimez-vous ! Partagez !</h2>
        <section class="pipi">
          <div class="form-group">
                <label for="title">Titre du message :</label>
                <input type="text" id="title" name="title" class="form-control" required v-model="inputPost.title"/>
              </div>
          <form id="form-signup" >
              <div class="form-group">
                <label for="link">Lien du Post :</label>
                <input type="text" id="messageUrl" name="messageUrl" class="form-control"  required v-model="inputPost.messageUrl"/>
              </div>
              <div class="form-group">
                <label for="content">Message :</label>
                <textarea type="text" id="message" name="message" rows="10" class="form-control" required v-model="inputPost.message" ></textarea>
              </div>
            </form>              
             <button class="btn-danger" v-on:click="sendPost()" >Envoyer</button> 
             </section>

        </section>


</template>

<script>
import Header from '@/components/Header.vue'
import axios from 'axios';
import router from "../router";


export default {
  name: 'Mur',
  components: {
    Header,
  },
  data() {
      return{
        inputPost:{
          title: "",
          messageUrl: "",
          message:"",
        },
        userId: "",
    }
  },
  mounted() {
        this.userId = JSON.parse(localStorage.getItem("userId"));
        console.log(this.userId)
    },

    methods: {
      sendPost: function(){
  
            axios.post ("http://localhost:3000/api/post/new",{
                title: this.inputPost.title,
                messageUrl: this.inputPost.messageUrl,
                message : this.inputPost.message,
                userId: this.userId, 
                headers: {
                    'Authorization': 'Bearer' + localStorage.getItem("token"),
                    'Content-Type': 'application/json'
            }
            })
                .then(() => {
                  window.location.reload(); 
                })
                .then(() =>{
                  router.push({ path : '/mur'});
                })
                .catch(error => console.log(error))
        }
    }
}
 
</script>

<style scoped>

.pipi{
    display: flex;
    margin: auto;
    flex-direction: column;
    justify-content: center;
    width: 33%;
}
.parametres {
    margin-top: 0;
    margin-bottom: 25px;
}
a {
    cursor: pointer;
}
textarea {
    height: auto;
    resize:none;
}
@media screen and (max-width: 768px) {
	section {
    flex-direction: column;
    margin-top: 25px;
}
}

</style>