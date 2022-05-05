<template>
 <div>
   <h1>Carrinho</h1>
    <button @click="filtroAZ"> A - Z </button>
    <button @click="filtroZA"> Z - A </button>
    <transition-group tag="ul"  mode="out-in">
      <li v-for="(produto, index) in carrinho" :key="produto.nome">
          <p>{{produto.nome}}</p>
          <p>{{produto.preco}}</p>
          <button @click="remover(index)">Remover</button>
      </li>
    </transition-group>
 </div>
</template>

<script>
export default {
  name: "PaginaCarrinho",
  data() {
    return {
      carrinho: [
        {
          nome: "Tablet",
          preco:  899,
        },
        {
          nome: "Ar-condicionado",
          preco:  1899,
        },
        {
          nome: "Notebook",
          preco:  2399,
        },
        {
          nome: "Smartphone",
          preco:  999,
        },        
      ],
    }
  },
  methods: {
    remover(index) {
      this.carrinho.splice(index, 1)
    },
    filtroAZ() {
      this.carrinho.sort()
    }, 
    filtroZA() {
      this.carrinho.sort().reverse()
    }
  }
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.2s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate3d(0, 0, 20px);
}
</style>