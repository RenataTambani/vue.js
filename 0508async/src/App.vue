<template>
  <div id="app">
    <ul>
      <li @click="abaAtiva = 'SobreEmpresa'">Sobre</li>
      <li @click="abaAtiva = 'ServicosEmpresa'">Serviços</li>
      <li @click="abaAtiva = 'ContatoEmpresa'">Contato</li>
    </ul>
    <keep-alive>
       <component :is="abaAtiva"></component>
    </keep-alive>
   </div>
</template>

<script>


import SobreEmpresa from "./components/SobreEmpresa.vue"

export default {
  name: "app",
  components: {
   ContatoEmpresa: function() {
     return import("./components/ContatoEmpresa.vue")
   },
   ServicosEmpresa: function() {
     return import("./components/ServicosEmpresa.vue")
   },
   
   SobreEmpresa
  },
  data() {
    return {
     abaAtiva: "SobreEmpresa"
    }
  }
}
</script>

<style>
</style>

