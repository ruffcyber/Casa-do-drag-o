// INICIALIZAÇÃO
 
document.addEventListener("DOMContentLoaded", function () {
 
    // Mostra as unidades
    if (document.getElementById("listaUnidades")) {
        renderizarUnidades();
    }
 
    // Se existir campo de busca
    const buscaUnidade = document.getElementById("buscaUnidade");
 
    if (buscaUnidade) {
        buscaUnidade.addEventListener("input", renderizarUnidades);
    }
 
});
 
 
// ==========================================
// MOSTRAR UNIDADES
// ==========================================
 
function renderizarUnidades() {
 
    const lista = document.getElementById("listaUnidades");
 
    if (!lista) return;
 
    const busca = document
        .getElementById("buscaUnidade")
        ?.value
        .toLowerCase()
        .trim() || "";
 
    // Filtra por nome, cidade ou bairro
    const unidadesFiltradas = unidades.filter(function (unidade) {
 
        return (
            unidade.nome.toLowerCase().includes(busca) ||
            unidade.cidade.toLowerCase().includes(busca) ||
            unidade.bairro.toLowerCase().includes(busca)
        );
 
    });
 
    // Limpa a lista
    lista.innerHTML = "";
 
    // Nenhuma unidade encontrada
    if (unidadesFiltradas.length === 0) {
 
        lista.innerHTML = `
            <p class="mensagem-vazia">
                Nenhuma unidade encontrada.
            </p>
        `;
 
        return;
    }
 
    // Cria os cards
    unidadesFiltradas.forEach(function (unidade) {
 
        const ocupacao = unidade.ocupacaoAtual / unidade.capacidade * 100;
 
        let status = "";
        let classeStatus = "";
 
        if (ocupacao >= 100) {
 
            status = "Lotado";
            classeStatus = "lotado";
 
        } else if (ocupacao >= 80) {
 
            status = "Alta procura";
            classeStatus = "alta-procura";
 
        } else {
 
            status = "Disponível";
            classeStatus = "disponivel";
        }
 
 
        lista.innerHTML += `
 
            <div class="card-unidade">
 
                <div class="card-unidade-conteudo">
 
                    <span class="status ${classeStatus}">
                        ${status}
                    </span>
 
                    <h3>
                        ${unidade.nome}
                    </h3>
 
                    <p>
                        ${unidade.descricao}
                    </p>
 
                    <p>
                        📍 ${unidade.bairro} — ${unidade.cidade}
                    </p>
 
                    <p>
                        👥 Capacidade: ${unidade.capacidade} pessoas
                    </p>
 
                    <button
                        type="button"
                        onclick="selecionarUnidade(${unidade.id})">
 
                        Ver cardápio
 
                    </button>
 
                </div>
 
            </div>
 
        `;
    });
}
 
 
// ==========================================
// SELECIONAR UNIDADE
// ==========================================
 
function selecionarUnidade(id) {
 
    unidadeSelecionada = unidades.find(function (unidade) {
 
        return unidade.id === id;
 
    });
 
    if (!unidadeSelecionada) return;
 
    // Volta para "Todas" sempre que uma unidade é escolhida
    categoriaSelecionada = "Todas";
 
    // Mostra o nome da unidade no título
    const titulo = document.getElementById("nomeUnidadeCardapio");
 
    if (titulo) {
 
        titulo.textContent =
            "Cardápio — " + unidadeSelecionada.nome;
 
    }
 
    // Mostra mensagem da unidade
    const mensagem = document.getElementById("mensagemCardapio");
 
    if (mensagem) {
 
        mensagem.textContent =
            "Você escolheu a unidade " +
            unidadeSelecionada.nome +
            ". Agora é hora de descobrir a experiência.";
 
    }
 
    // Mostra categorias
    renderizarCategorias();
 
    // Mostra cardápio
    renderizarCardapio();
 
    // Leva o usuário até o cardápio
    const cardapio = document.getElementById("cardapio");
 
    if (cardapio) {
 
        cardapio.scrollIntoView({
            behavior: "smooth"
        });
 
    }
 
}
 
 
// ==========================================
// CATEGORIAS DO CARDÁPIO
// ==========================================
 
function renderizarCategorias() {
 
    const container =
        document.getElementById("categoriasCardapio");
 
    if (!container || !unidadeSelecionada) return;
 
    // Busca apenas os cardápios da unidade escolhida
    const cardapiosDaUnidade = cardapios.filter(function (item) {
 
        return item.unidadeId === unidadeSelecionada.id;
 
    });
 
    // Pega as categorias existentes
    const categorias = [
        "Todas",
        ...new Set(
            cardapiosDaUnidade.map(function (item) {
                return item.categoria;
            })
        )
    ];
 
    container.innerHTML = "";
 
    categorias.forEach(function (categoria) {
 
        const botao = document.createElement("button");
 
        botao.type = "button";
        botao.textContent = categoria;
 
        if (categoria === categoriaSelecionada) {
            botao.classList.add("ativo");
        }
 
        botao.addEventListener("click", function () {
 
            categoriaSelecionada = categoria;
 
            renderizarCategorias();
            renderizarCardapio();
 
        });
 
        container.appendChild(botao);
 
    });
 
}
 
 
// ==========================================
// MOSTRAR CARDÁPIO
// ==========================================
 
function renderizarCardapio() {
 
    const lista = document.getElementById("listaCardapio");
 
    if (!lista || !unidadeSelecionada) return;
 
    // Busca cardápios da unidade escolhida
    let cardapiosFiltrados = cardapios.filter(function (item) {
 
        return item.unidadeId === unidadeSelecionada.id;
 
    });
 
    // Filtra pela categoria
    if (categoriaSelecionada !== "Todas") {
 
        cardapiosFiltrados = cardapiosFiltrados.filter(function (item) {
 
            return item.categoria === categoriaSelecionada;
 
        });
 
    }
 
    lista.innerHTML = "";
 
    // Caso a unidade ainda não tenha cardápio cadastrado
    if (cardapiosFiltrados.length === 0) {
 
        lista.innerHTML = `
            <p class="mensagem-vazia">
                O cardápio desta unidade ainda não foi cadastrado.
            </p>
        `;
 
        return;
    }
 
 
    // Cria os cards das experiências
    cardapiosFiltrados.forEach(function (experiencia) {
 
        lista.innerHTML += `
 
            <article class="card-cardapio">
 
                <span class="categoria">
                    ${experiencia.categoria}
                </span>
 
                <h3>
                    ${experiencia.nome}
                </h3>
 
                <p>
                    ${experiencia.descricao}
                </p>
 
                <div class="experiencia-etapas">
 
                    <span>Entrada</span>
                    <span>Prato principal</span>
                    <span>Sobremesa</span>
 
                </div>
 
                <strong>
                    R$ ${experiencia.preco.toFixed(2).replace(".", ",")}
                </strong>
 
                <p class="sem-spoiler">
                    O menu é uma surpresa.
                    Você escolhe a experiência,
                    a cozinha prepara o resto.
                </p>
 
            </article>
 
        `;
 
    });
 
}
 
 
 
 
 
// Etapas de reserva da Mari, n sei se era isso //
const etapa1 = document.getElementById("reserva-etapa1");
const etapa2 = document.getElementById("reserva-etapa2");
const etapa3 = document.getElementById("reserva-etapa3");
const unidade = document.getElementById("reservaunidade");
const data = document.getElementById("reservadata");
const btnEtapa1 = document.getElementById("btnEtapa1");
 
 
//pra abrir a página e esconder as outras duas (aqui eu pedi ajuda, verificar se tá certo)//
etapa1.style.display = "block";
etapa2.style.display = "none";
etapa3.style.display = "none";
 
 
//botão da primeira etapa da reserva Mariana (KKRYING) com horário e gente qnt de gente//
btnEtapa1.addEventListener("click", function () {
const horario = document.querySelector(
'input[name="horario"]:checked'
);
const pessoas = document.querySelector(
'input[name="pessoas"]:checked'
);
 
if (unidade.value === "") {
alert("Selecione uma unidade.");
return;
}
if (data.value === "") {
alert("Selecione uma data.");
return;
}
if (horario === null) {
alert("Selecione um horário.");
return;
}
if (pessoas === null) {
alert("Selecione o número de pessoas.");
return;
}
 
 
//criando objeto e tranformando em json, tbm tive ajuda então revisar se tá certo//
const reserva = {
unidade: unidade.value,
data: data.value,
horario: horario.value,
pessoas: pessoas.value
};
const reservaJSON = JSON.stringify(reserva);
 
 
//ajuda tbm pq aparentemente assim salva no navegador, conferir!!//
localStorage.setItem(
"reservaEmAndamento",
reservaJSON
);
 
 
//cacete ein Mari, aqui sua etapa dois, aqui pega os campos e os botões tbm, ou deveria//
etapa1.style.display = "none";
etapa2.style.display = "block";
});
const nome = etapa2.querySelector(
'input[name="nome"]'
);
const email = etapa2.querySelector(
'input[name="email"]'
);
const telefone = etapa2.querySelector(
'input[name="telefone"]'
);
const observacao = etapa2.querySelector(
'textarea[name="mensagem"]'
);
const btnVoltar = etapa2.querySelector("#btnVoltar");
const btnEtapa2 = etapa2.querySelector("#btnEtapa2");
 
//botão pa votla//
btnVoltar.addEventListener("click", function () {
etapa2.style.display = "none";
etapa1.style.display = "block";
});
 
 
//pq nada é simples, botão da confirmação com validação de nome, email e telefone//
//para a Mari do futuro: o alert vai retornar mensagem se tiver com o campo vazio//
btnEtapa2.addEventListener("click", function () {
if (nome.value === "") {
alert("Digite seu nome.");
return;
}
if (email.value === "") {
alert("Digite seu e-mail.");
return;
}
if (telefone.value === "") {
alert("Digite seu telefone.");
return;
}
 
 
//pega o q jogamos no navegador e transforma jonhson de volta em JavaScript (ajudinha pra revisão)//
const reservaJSON = localStorage.getItem(
"reservaEmAndamento"
);
const reserva = JSON.parse(reservaJSON);
 
// acrescimo dos dados pessoais//
reserva.nome = nome.value;
reserva.email = email.value;
reserva.telefone = telefone.value;
reserva.observacao = observacao.value;
 
 
//ai fala q tem q pra funcionar tem q jogar pra johnson de novo igual lá em cima e salvar de novo os trem//
const novoJSON = JSON.stringify(reserva);
localStorage.setItem(
"reservaEmAndamento",
novoJSON
);
 
 
//Mariana saiba que são 02:24 da manhã e estou agr na sua etapa três//
document.getElementById("confirmacaoUnidade").textContent = "Unidade: " + reserva.unidade;
document.getElementById("confirmacaoData").textContent = "Data: " + reserva.data;
document.getElementById("confirmacaoHorario").textContent = "Horário: " + reserva.horario;
document.getElementById("confirmacaoPessoas").textContent = "Número de pessoas: " + reserva.pessoas;
document.getElementById("confirmacaoNome").textContent = "Nome: " + reserva.nome;
document.getElementById("confirmacaoEmail").textContent = "E-mail: " + reserva.email;
document.getElementById("confirmacaoTelefone").textContent = "Telefone: " + reserva.telefone;
document.getElementById("confirmacaoObservacao").textContent = "Observações: " + reserva.observacao;
 
 
//aqui deveria abre pra etapa 3//
etapa2.style.display = "none";
etapa3.style.display = "block";
});
 
 
//formulário né como bem diz de contato, e também com o prevent pra impedir a pag de att e tbm o macete p limpar o form//
const formularioContato = document.getElementById("contato-form");
 
formularioContato.addEventListener("submit",
function (evento) {evento.preventDefault();
alert("Mensagem enviada com sucesso!");
formularioContato.reset();
}
);
 
//botões da etapa 3 e eu perdi o controle da minha vida pq são 03:09//
const btnVoltar3 = document.getElementById("btnVoltar3");
const btnConfirmar = document.getElementById("btnConfirmar");
 
 
//em tese, se a criatura colocou o nome errado ainda dá pra voltar//
btnVoltar3.addEventListener("click", function () {
etapa3.style.display = "none";
etapa2.style.display = "block";
});
 
 
//finalmente confirmar essa reserva meu deus//
btnConfirmar.addEventListener("click", function () {
const reservaJSON = localStorage.getItem("reservaEmAndamento");
const reserva = JSON.parse(reservaJSON);
localStorage.setItem(
"reservaConfirmada",
reservaJSON
);
localStorage.removeItem(
"reservaEmAndamento"
);
alert("Reserva confirmada com sucesso para " + reserva.nome + "!");
});