<template>
  <div id="app">
    <ModalPrincipal>
      <template v-slot:login>
        Email:<input placeholder="Seu email">
        <button> Login </button>
      </template>
      <template v-slot:cadastro>
        Seu nome: <input placeholder="Seu nome">
        <button> Cadastre-se </button>
      </template>
      <template v-slot:default={usuario}> {{usuario.name}} {{usuario.senha}}
      </template>
    </ModalPrincipal>
  </div> 
</template>


<script>

import ModalPrincipal from "./components/ModalPrincipal.vue"

export default {
  name: "app",
  components: {
    ModalPrincipal
  },
  data() {
    return {
      
    }
  }
  }

</script>

<style>

</style>
