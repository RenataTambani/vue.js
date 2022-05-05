<template>
  <div class="modal">
    <h1>Esse é o modal</h1>
    <slot name="login"></slot>
    <slot name="cadastro"></slot>
    <slot :usuario="usuario"></slot>
  </div>
</template>

<script>
export default {
  name: "ModalPrincipal",
  data() {
    return {
      usuario: {
        name: "Renata",
        senha: "123456"
      }, 
      
    }
  }
}
</script>

<style>

</style>