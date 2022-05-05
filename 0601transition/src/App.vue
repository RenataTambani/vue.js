<template>
  <div id="app"> 
    <body>
      <button @click="modalAtivo = !modalAtivo">Cadastre-se</button><pagina-home></pagina-home>
      <transition name="modal">
        <div class="modal-wrapper" v-show="modalAtivo" @click="cliqueFora">
          <div class="modal">
            <h2>Cadastre-se:</h2>
            <label for="email">Email: </label>
            <input type="email"/>
            <label for="password">Senha:</label>
            <input type="password"/>
            <button class="fechar" @click="modalAtivo = !modalAtivo">X</button>
          </div>
        </div>
      </transition>
      <div>
        <button @click="estoque++">Adicionar estoque</button>
        <button @click="estoque = 0" >Deletar estoque</button>
        <transition name="animaEstoque" mode="out-in">
          <p v-if="estoque >= 5" key="disponivel"> {{estoque}}Itens em estoque</p>
          <p v-else-if="estoque >= 1 && estoque < 5" key="acabando">Itens quase acabando</p>
          <p v-else key="esgotado">Produto fora de estoque</p>
        </transition>
        <pagina-carrinho></pagina-carrinho>
      </div>
    </body>    
  </div>
</template>

<script>

import PaginaHome from "./components/PaginaHome.vue"
import PaginaCarrinho from "./components/PaginaCarrinho.vue"



export default {
  data() {
    return {
     modalAtivo: false,
     estoque: 0
     }
  },
  components: {
    PaginaHome,
    PaginaCarrinho,
    
  },
  methods: {
    // cliqueFora(event) {
    //   console.log(event.currentTarget)
    //   console.log(event.target)
    // }
    cliqueFora({currentTarget, target}) {
     if(currentTarget === target) this.modalAtivo = false
     }
  }
}
</script>

<style>
.animaEstoque-enter-active,
.animaEstoque-leave-active {
  transition: opacity 0.3s ease;
}

.animaEstoque-enter,
.animaEstoque-leave-to {
  opacity: 0;
}


.v-enter-active,
.v-leave-active {
  transition: opacity 2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}


@keyframes slide {
  from {
    transform:  translate3d(0, -40px, 0);
  }
  to {
    transform:  translate3d(0, 0px, 0);
  }
}


body {
  margin: 0px auto;
  padding: 0px;
  width: 800px;
  height: 1200px;
  background: rgba(0, 0, 0.2, 0.2);
}

.modal {
  display: flex;
  flex-direction: column;
  padding: 20px 20px 80px 20px;
  margin: 20px auto;
  width: 300px;
  height: 150px;
  background: gainsboro;
  box-shadow: 3px 3px 3px #000000;
  z-index: 10;
  position: relative;
  
}
.modal-enter-to {
  animation: slide 1s;
}
.modal-leave-to .modal {
  animation: slide 0.5s;

}

.fechar {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 0px;
  right: 0px;
  margin: 20px auto;
  position: absolute;
  }
</style>
