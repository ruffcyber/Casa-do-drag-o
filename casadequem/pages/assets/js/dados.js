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
// DADOS DO CARDÁPIO
// ========================================

const cardapios = [

    {
        id: 1,
        unidadeId: 1,
        categoria: "Clássicos",
        nome: "Experiência Casa",
        descricao: "Uma experiência clássica com pratos tradicionais.",
        preco: 89.90
    },

    {
        id: 2,
        unidadeId: 1,
        categoria: "Veganos",
        nome: "Experiência Jardim",
        descricao: "Uma experiência vegana com pratos frescos e saborosos.",
        preco: 79.90
    },

    {
        id: 3,
        unidadeId: 1,
        categoria: "Especial",
        nome: "Experiência Chef",
        descricao: "Uma experiência especial com pratos exclusivos do chef.",
        preco: 119.90
    },

    {
        id: 4,
        unidadeId: 2,
        categoria: "Clássicos",
        nome: "Experiência Casa",
        descricao: "Uma experiência clássica com pratos tradicionais.",
        preco: 94.90
    },

    {
        id: 5,
        unidadeId: 2,
        categoria: "Veganos",
        nome: "Experiência Verde",
        descricao: "Uma experiência vegana com pratos frescos e saborosos.",
        preco: 84.90
    },

    {
        id: 6,
        unidadeId: 2,
        categoria: "Especial",
        nome: "Experiência Especial",
        descricao: "Uma experiência preparada especialmente pela cozinha.",
        preco: 109.90
    },

    {
        id: 7,
        unidadeId: 3,
        categoria: "Clássicos",
        nome: "Experiência Interior",
        descricao: "Sabores tradicionais da nossa cozinha caseira.",
        preco: 79.90
    },

    {
        id: 8,
        unidadeId: 3,
        categoria: "Veganos",
        nome: "Experiência Horta",
        descricao: "Uma experiência leve com ingredientes frescos.",
        preco: 74.90
    },

    {
        id: 9,
        unidadeId: 3,
        categoria: "Especial",
        nome: "Experiência Noturna",
        descricao: "Uma experiência especial da unidade de Birigui.",
        preco: 99.90
    },

    {
        id: 10,
        unidadeId: 4,
        categoria: "Clássicos",
        nome: "Experiência Casa",
        descricao: "Nossos sabores tradicionais em Rio Preto.",
        preco: 89.90
    },

    {
        id: 11,
        unidadeId: 4,
        categoria: "Veganos",
        nome: "Experiência Verde",
        descricao: "Uma opção sem ingredientes de origem animal.",
        preco: 79.90
    },

    {
        id: 12,
        unidadeId: 4,
        categoria: "Especial",
        nome: "Experiência do Chef",
        descricao: "Uma experiência especial preparada pela nossa cozinha.",
        preco: 119.90
    }

];