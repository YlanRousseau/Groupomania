<template>
    <div class="Mur">
      <Header/>
    <Stream/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Stream from '@/components/Stream.vue'

export default {
  name: 'Mur',
  components: {
    Header,
    Stream,
  }
  
}
</script>

<style scoped>

</style>