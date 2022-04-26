export default {
  name: "DolarHoje",
  data() {
    return {
      valorDolar: 0,
    };
  },
  methods: {
    puxarDolar() {
      fetch("https://economia.awesomeapi.com.br/last/USD-BRL");
      then((r) => r.json());
      then((r) => {
        this.valorDolar = r.USDBRL.high;
      });
    },
  },
  template: `<p>Valor do dólar: R$ {{valorDolar}}</p>`,
  created() {
    this.puxarDolar();
  },
};
