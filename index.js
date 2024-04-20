// Criar a aplicação Vue
const app = Vue.createApp({
    // Dados da aplicação
    data() {
        return {
            heroi: { vida: 100 },
            vilao: { vida: 100 },
            logAcoes: []
        }
    },
    // Métodos da aplicação
    methods: {
        atacar(isHeroi) {
            if (isHeroi) {
                this.logAcoes.push("Herói atacou");
                this.vilao.vida -= 10; // Reduzir a vida do vilão (valor arbitrário)
            } else {
                this.logAcoes.push("Vilão atacou");
                this.heroi.vida -= 10; // Reduzir a vida do herói (valor arbitrário)
            }
            this.acaoVilao();
        },
        defender(isHeroi) {
            if (isHeroi) {
                this.logAcoes.push("Herói defendeu");
            } else {
                this.logAcoes.push("Vilão defendeu");
            }
        },
        usarPocao(isHeroi) {
            if (isHeroi) {
                this.logAcoes.push("Herói usou poção");
                this.heroi.vida += 20; // Aumentar vida do herói (valor arbitrário)
            } else {
                this.logAcoes.push("Vilão usou poção");
                this.vilao.vida += 20; // Aumentar vida do vilão (valor arbitrário)
            }
            this.acaoVilao();
        },
        correr(isHeroi) {
            if (isHeroi) {
                this.logAcoes.push("Herói correu");
            } else {
                this.logAcoes.push("Vilão correu");
            }
        },
        acaoVilao() {
            const acoes = ['defender', 'usarPocao', 'correr'];
            const acaoAleatoria = acoes[Math.floor(Math.random() * acoes.length)];
            if (acaoAleatoria === 'atacar') {
                this.atacar(false);
            } else if (acaoAleatoria === 'defender') {
                this.defender(false);
            } else if (acaoAleatoria === 'usarPocao') {
                this.usarPocao(false);
            } else {
                this.correr(false);
            }
        }
    },
    // Método mounted para iniciar ação do vilão
    mounted() {
        this.acaoVilao(true);
    },
    acaoHeroi() {
        this.atacar(true);
    },
    perderVida(personagem) {
        personagem.vida -= 10; // Reduz 10 pontos de vida ao ser atacado
        if (personagem.vida <= 0) {
            personagem.vida = 0; // Garante que a vida não seja negativa
            this.logAcoes.push(`${personagem === this.heroi ? 'Herói' : 'Vilão'} foi derrotado`);
        }
    }
});

// Montar a aplicação Vue no elemento #app
app.mount("#app");