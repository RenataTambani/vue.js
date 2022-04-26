import DolarHoje from "./DolarHoje.js";

export default {
  name: "AcaoHoje",
  data() {
    return {
      valorMercado: 0,
    };
  },
  components: {
    DolarHoje,
  },
  template: `<div> 
  <p>Valor da Apple: {{valorMercado}}</p>
  <dolar-hoje></dolar-hoje>
  </div>`,
  methods: {
    puxarAcao() {
      fetch(
        "https://cloud.iexapis.com/v1/stock/AAPL/quote?token=pk_44833790ab344d8ca902c7db5b273909"
      )
        .then((r) => r.json())
        .then((r) => {
          this.valorMercado = r.marketCap;
        });
    },
  },
  created() {
    this.puxarAcao();
  },
};
