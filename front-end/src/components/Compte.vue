<template>
<div class="Compte">
  <div class="card">
    <h1 class="card__title">Espace Perso</h1>
    <p class="card__subtitle">Me Voilà sur mon profil</p>
    <div class="form-row">
      <button @click="logout()" class="button">
        Déconnexion
      </button>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'Compte',
  
}
</script>

<style scoped>
.compte{
    display: flex;
    justify-content: center;
}
.card {
  width: 50%;
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