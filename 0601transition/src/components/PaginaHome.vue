<template>
<div>
  <li @click="componenteAtivo = 'PaginaSobre'">Sobre</li>
  <li @click="componenteAtivo = 'PaginaServicos'">Serviços</li>
  <transition mode="out-in">
    <component :is="componenteAtivo"></component>
  </transition>
</div>
</template>

<script>
import PaginaServicos from "./PaginaServicos.vue"
import PaginaSobre from "./PaginaSobre.vue"

export default {
  components: {
    PaginaServicos,
    PaginaSobre
  },
  name: "PaginaHome",
  data() {
    return {
      componenteAtivo: "PaginaSobre",
    }
  }
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}
</style>