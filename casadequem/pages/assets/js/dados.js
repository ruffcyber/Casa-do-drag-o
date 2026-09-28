// ========================================
// DADOS DAS UNIDADES
// ========================================

// aqui ficam as unidades desse treco
// se quiser mais depois, só adicionar outro objeto

const unidades = [

    {
        id: 1,
        nome: "Araçatuba - Centro",
        cidade: "Araçatuba",
        bairro: "Centro",
        capacidade: 24,
        ocupacaoAtual: 18,
        descricao: "Nossa casa no centro da cidade."
    },

    {
        id: 2,
        nome: "Araçatuba - Shopping",
        cidade: "Araçatuba",
        bairro: "Casa Nova",
        capacidade: 20,
        ocupacaoAtual: 20,
        descricao: "Uma experiência diferenciada dentro do shopping."
    },

    {
        id: 3,
        nome: "Birigui",
        cidade: "Birigui",
        bairro: "Centro",
        capacidade: 18,
        ocupacaoAtual: 10,
        descricao: "Nossa casa em Birigui."
    },

    {
        id: 4,
        nome: "São José do Rio Preto",
        cidade: "São José do Rio Preto",
        bairro: "Centro",
        capacidade: 22,
        ocupacaoAtual: 12,
        descricao: "Nossa casa em São José do Rio Preto."
    }

];


// ========================================
// DADOS DAS EXPERIÊNCIAS
// ========================================

// cada experiência pertence a uma unidade
// unidadeId mostra em qual unidade ela acontece
// id é usado pelo JavaScript
// codigo é o código que aparece para o cliente

const cardapios = [

    // ========================================
    // ARAÇATUBA - CENTRO
    // ========================================

    {
        id: 1,
        codigo: "EXP-AC-01",
        unidadeId: 1,
        categoria: "Clássicos",
        nome: "Entre Estranhos",
        descricao: "Uma grande mesa, boa comida e pessoas que você só vai conhecer quando chegar.",
        formato: "Mesa compartilhada",
        duracao: "2 horas",
        preco: 89.90
    },

    {
        id: 2,
        codigo: "EXP-AC-02",
        unidadeId: 1,
        categoria: "Veganos",
        nome: "Entre Hortas",
        descricao: "Sabores frescos em uma experiência criada para compartilhar comida e novas histórias.",
        formato: "Mesa compartilhada",
        duracao: "2 horas",
        preco: 79.90
    },

    {
        id: 3,
        codigo: "EXP-AC-03",
        unidadeId: 1,
        categoria: "Especial",
        nome: "Às Cegas",
        descricao: "Uma experiência surpresa em que os sabores são revelados somente durante a noite.",
        formato: "Mesa compartilhada",
        duracao: "2h30",
        preco: 119.90
    },

    {
        id: 4,
        codigo: "EXP-AC-04",
        unidadeId: 1,
        categoria: "Clássicos",
        nome: "Memórias de Casa",
        descricao: "Receitas afetivas e histórias que convidam cada pessoa a lembrar de sua própria casa.",
        formato: "Mesa compartilhada",
        duracao: "2 horas",
        preco: 84.90
    },

    {
        id: 5,
        codigo: "EXP-AC-05",
        unidadeId: 1,
        categoria: "Especial",
        nome: "Primeiro Encontro",
        descricao: "Uma noite criada para quem quer sair da rotina e conhecer pessoas sem saber quem estará à mesa.",
        formato: "Mesa compartilhada",
        duracao: "2 horas",
        preco: 99.90
    },

    {
        id: 6,
        codigo: "EXP-AC-06",
        unidadeId: 1,
        categoria: "Veganos",
        nome: "Da Terra",
        descricao: "Uma experiência com ingredientes vegetais, sabores brasileiros e pratos servidos para compartilhar.",
        formato: "Mesa compartilhada",
        duracao: "1h30",
        preco: 82.90
    },


    // ========================================
    // ARAÇATUBA - SHOPPING
    // ========================================

    {
        id: 7,
        codigo: "EXP-AS-01",
        unidadeId: 2,
        categoria: "Clássicos",
        nome: "Mesa Aberta",
        descricao: "Uma mesa sem lugares marcados, criada para transformar desconhecidos em companhia durante a refeição.",
        formato: "Mesa compartilhada",
        duracao: "2 horas",
        preco: 94.90
    },

    {
        id: 8,
        codigo: "EXP-AS-02",
        unidadeId: 2,
        categoria: "Veganos",
        nome: "Verde Compartilhado",
        descricao: "Uma sequência de pratos vegetais servidos no centro da mesa para todos experimentarem juntos.",
        formato: "Mesa compartilhada",
        duracao: "2 horas",
        preco: 84.90
    },

    {
        id: 9,
        codigo: "EXP-AS-03",
        unidadeId: 2,
        categoria: "Especial",
        nome: "Sem Roteiro",
        descricao: "Você escolhe participar. O restante da experiência só é descoberto depois que todos se sentam.",
        formato: "Mesa compartilhada",
        duracao: "2h30",
        preco: 124.90
    },

    {
        id: 10,
        codigo: "EXP-AS-04",
        unidadeId: 2,
        categoria: "Clássicos",
        nome: "Todo Mundo à Mesa",
        descricao: "Pratos servidos no centro da mesa e uma experiência pensada para incentivar conversa e troca.",
        formato: "Mesa compartilhada",
        duracao: "2 horas",
        preco: 89.90
    },

    {
        id: 11,
        codigo: "EXP-AS-05",
        unidadeId: 2,
        categoria: "Especial",
        nome: "Depois das Oito",
        descricao: "Uma experiência noturna com menu surpresa e pequenas provocações ao longo da noite.",
        formato: "Mesa compartilhada",
        duracao: "2h30",
        preco: 109.90
    },

    {
        id: 12,
        codigo: "EXP-AS-06",
        unidadeId: 2,
        categoria: "Veganos",
        nome: "Novos Sabores",
        descricao: "Uma experiência vegetal para experimentar combinações que talvez você não escolheria sozinho.",
        formato: "Mesa compartilhada",
        duracao: "1h30",
        preco: 86.90
    },


    // ========================================
    // BIRIGUI
    // ========================================

    {
        id: 13,
        codigo: "EXP-BI-01",
        unidadeId: 3,
        categoria: "Clássicos",
        nome: "Histórias de Interior",
        descricao: "Sabores conhecidos apresentados em uma mesa onde cada pessoa chega carregando uma história diferente.",
        formato: "Mesa compartilhada",
        duracao: "2 horas",
        preco: 79.90
    },

    {
        id: 14,
        codigo: "EXP-BI-02",
        unidadeId: 3,
        categoria: "Veganos",
        nome: "Horta entre Estranhos",
        descricao: "Ingredientes frescos e uma mesa compartilhada para quem está disposto a conhecer novos sabores e pessoas.",
        formato: "Mesa compartilhada",
        duracao: "2 horas",
        preco: 74.90
    },

    {
        id: 15,
        codigo: "EXP-BI-03",
        unidadeId: 3,
        categoria: "Especial",
        nome: "Depois que a Luz Apaga",
        descricao: "Uma experiência sensorial em que parte da refeição acontece com menos luz e mais atenção aos outros sentidos.",
        formato: "Mesa compartilhada",
        duracao: "2 horas",
        preco: 99.90
    },

    {
        id: 16,
        codigo: "EXP-BI-04",
        unidadeId: 3,
        categoria: "Clássicos",
        nome: "Domingo na Casa",
        descricao: "Comida no centro da mesa, clima de domingo e lugares disponíveis para quem ainda vai chegar.",
        formato: "Mesa compartilhada",
        duracao: "2 horas",
        preco: 82.90
    },

    {
        id: 17,
        codigo: "EXP-BI-05",
        unidadeId: 3,
        categoria: "Especial",
        nome: "Uma Mesa, Seis Histórias",
        descricao: "Uma experiência para pequenos grupos em que conversa, comida e descoberta fazem parte da mesma noite.",
        formato: "Mesa compartilhada",
        duracao: "2h30",
        preco: 104.90
    },

    {
        id: 18,
        codigo: "EXP-BI-06",
        unidadeId: 3,
        categoria: "Veganos",
        nome: "Colheita",
        descricao: "Uma experiência vegetal inspirada em ingredientes da estação e pratos feitos para dividir.",
        formato: "Mesa compartilhada",
        duracao: "1h30",
        preco: 76.90
    },


    // ========================================
    // SÃO JOSÉ DO RIO PRETO
    // ========================================

    {
        id: 19,
        codigo: "EXP-RP-01",
        unidadeId: 4,
        categoria: "Clássicos",
        nome: "Lugar Vago",
        descricao: "Você reserva seu lugar, mas não escolhe quem estará ao lado. O encontro faz parte da experiência.",
        formato: "Mesa compartilhada",
        duracao: "2 horas",
        preco: 89.90
    },

    {
        id: 20,
        codigo: "EXP-RP-02",
        unidadeId: 4,
        categoria: "Veganos",
        nome: "Mesa Verde",
        descricao: "Uma experiência vegetal em que todos compartilham pratos, sabores e descobertas.",
        formato: "Mesa compartilhada",
        duracao: "2 horas",
        preco: 79.90
    },

    {
        id: 21,
        codigo: "EXP-RP-03",
        unidadeId: 4,
        categoria: "Especial",
        nome: "Não Pergunte o Menu",
        descricao: "A única escolha é participar. Os pratos e a ordem da experiência são revelados durante a noite.",
        formato: "Mesa compartilhada",
        duracao: "2h30",
        preco: 119.90
    },

    {
        id: 22,
        codigo: "EXP-RP-04",
        unidadeId: 4,
        categoria: "Clássicos",
        nome: "De Onde Você Vem?",
        descricao: "Sabores afetivos e pequenas histórias transformam a mesa em um encontro entre diferentes lugares.",
        formato: "Mesa compartilhada",
        duracao: "2 horas",
        preco: 92.90
    },

    {
        id: 23,
        codigo: "EXP-RP-05",
        unidadeId: 4,
        categoria: "Especial",
        nome: "Mesa em Cena",
        descricao: "Uma experiência inspirada no teatro, em que público, ambiente e refeição fazem parte da mesma história.",
        formato: "Mesa compartilhada",
        duracao: "2h30",
        preco: 129.90
    },

    {
        id: 24,
        codigo: "EXP-RP-06",
        unidadeId: 4,
        categoria: "Veganos",
        nome: "Descoberta",
        descricao: "Pratos vegetais chegam à mesa sem uma ordem óbvia. A proposta é provar antes de decidir.",
        formato: "Mesa compartilhada",
        duracao: "1h30",
        preco: 84.90
    }

];