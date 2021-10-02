<template>
    <main class="container">    
        <div class="row justify-content-center">
            <div class="col-10">
                <div class="col-12">
                    <h1 class="my-2 btn btn-block btn-info font-weight-bold" style="cursor:default">Vous consultez vote compte</h1>
                </div>
                <section id="filPrincipal" class="row">
                    <div class="col-12">
                         
                        <div class="card bg-light my-3 class=center-block" style="float:none;">
                            <div class="card-header">
                                <div class="row justify-content-around">
                                </div>
                            </div>
                            <div class="card-body mx-auto">
                                <button class="button" ><span>SUPPRIMER VOTRE COMPTE</span></button>
                            </div>
                        </div> 
                    </div>  
                </section>
            </div>
        </div>
    </main>
</template>


<script>
export default{
name:'Compte',  
}

</script>

<style scoped>
p{
    font-size: 13px;
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
  }

</style>
