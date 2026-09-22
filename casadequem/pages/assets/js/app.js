// ========================================
// PEGANDO ELEMENTOS DO HTML
// ========================================

const listaUnidades =
    document.getElementById("listaUnidades");

const buscaUnidade =
    document.getElementById("buscaUnidade");

const selectUnidade =
    document.getElementById("reservaunidade");

const listaCardapio =
    document.getElementById("listaCardapio");

const categoriasCardapio =
    document.getElementById("categoriasCardapio");

const nomeUnidadeCardapio =
    document.getElementById("nomeUnidadeCardapio");

const mensagemCardapio =
    document.getElementById("mensagemCardapio");


// guarda qual unidade foi escolhida

let unidadeSelecionada = null;


// ========================================
// MOSTRAR UNIDADES
// ========================================

function mostrarUnidades() {

    listaUnidades.innerHTML = "";


    // pega o que a pessoa digitou na busca

    const textoBusca =
        buscaUnidade.value.toLowerCase();


    for (let unidade of unidades) {


        const nome =
            unidade.nome.toLowerCase();

        const cidade =
            unidade.cidade.toLowerCase();

        const bairro =
            unidade.bairro.toLowerCase();


        // verifica se o texto aparece
        // no nome, cidade ou bairro

        if (
            nome.includes(textoBusca) ||
            cidade.includes(textoBusca) ||
            bairro.includes(textoBusca)
        ) {


            // calcula a porcentagem de ocupação

            const ocupacao =
                unidade.ocupacaoAtual /
                unidade.capacidade *
                100;


            let status = "";

            let classeStatus = "";


            if (ocupacao >= 100) {

                status = "Lotado";

                classeStatus = "lotado";

            }

            else if (ocupacao >= 80) {

                status = "Alta procura";

                classeStatus = "alta-procura";

            }

            else {

                status = "Disponível";

                classeStatus = "disponivel";

            }


            listaUnidades.innerHTML += `

                <div class="card-unidade">

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
                        ${unidade.bairro} -
                        ${unidade.cidade}
                    </p>

                    <p>
                        Capacidade:
                        ${unidade.capacidade}
                        pessoas
                    </p>

                    <button
                        type="button"
                        onclick="selecionarUnidade(${unidade.id})"
                    >
                        Ver cardápio
                    </button>

                </div>

            `;

        }

    }

}


// mostra as unidades quando a página abre

mostrarUnidades();


// ========================================
// PESQUISA DAS UNIDADES
// ========================================

buscaUnidade.addEventListener(
    "input",

    function () {

        mostrarUnidades();

    }
);


// ========================================
// COLOCAR UNIDADES NO SELECT DA RESERVA
// ========================================

for (let unidade of unidades) {

    const opcao =
        document.createElement("option");


    opcao.value =
        unidade.id;


    opcao.textContent =
        unidade.nome;


    selectUnidade.appendChild(opcao);

}


// ========================================
// ESCOLHER UNIDADE
// ========================================

function selecionarUnidade(id) {

    unidadeSelecionada = null;


    // procura a unidade pelo id

    for (let unidade of unidades) {

        if (unidade.id === id) {

            unidadeSelecionada =
                unidade;

        }

    }


    if (unidadeSelecionada === null) {

        return;

    }


    nomeUnidadeCardapio.textContent =
        "Cardápio - " +
        unidadeSelecionada.nome;


    mensagemCardapio.textContent =
        "Você escolheu a unidade " +
        unidadeSelecionada.nome +
        ".";


    mostrarCategorias();

    mostrarCardapio("Todas");


    document
        .getElementById("cardapio")
        .scrollIntoView();

}


// ========================================
// MOSTRAR CATEGORIAS
// ========================================

function mostrarCategorias() {

    categoriasCardapio.innerHTML = "";


    const categorias = [
        "Todas",
        "Clássicos",
        "Veganos",
        "Especial"
    ];


    for (let categoria of categorias) {

        const botao =
            document.createElement("button");


        botao.type =
            "button";


        botao.textContent =
            categoria;


        botao.addEventListener(
            "click",

            function () {

                mostrarCardapio(categoria);

            }
        );


        categoriasCardapio.appendChild(
            botao
        );

    }

}


// ========================================
// MOSTRAR CARDÁPIO
// ========================================

function mostrarCardapio(categoriaEscolhida) {

    listaCardapio.innerHTML = "";


    for (let item of cardapios) {


        if (
            item.unidadeId ===
            unidadeSelecionada.id
        ) {


            if (
                categoriaEscolhida === "Todas" ||
                item.categoria === categoriaEscolhida
            ) {


                listaCardapio.innerHTML += `

                    <article class="card-cardapio">

                        <span class="categoria">
                            ${item.categoria}
                        </span>

                        <h3>
                            ${item.nome}
                        </h3>

                        <p>
                            ${item.descricao}
                        </p>

                        <strong>
                            R$ ${item.preco.toFixed(2).replace(".", ",")}
                        </strong>

                    </article>

                `;

            }

        }

    }

}


// ========================================
// RESERVA
// ========================================


// PEGAR

const overlay =
    document.getElementById("reservaOverlay");

const abrirReserva =
    document.getElementById("abrirReserva");

const botoesFechar =
    document.querySelectorAll(".btn-fechar");


const etapa1 =
    document.getElementById("reserva-etapa1");

const etapa2 =
    document.getElementById("reserva-etapa2");

const etapa3 =
    document.getElementById("reserva-etapa3");


const data =
    document.getElementById("reservadata");

const btnEtapa1 =
    document.getElementById("btnEtapa1");


// ========================================
// ABRIR RESERVA
// ========================================

abrirReserva.addEventListener(
    "click",

    function () {

        overlay.hidden = false;

        etapa1.hidden = false;

        etapa2.hidden = true;

        etapa3.hidden = true;

    }
);


// ========================================
// FECHAR RESERVA
// ========================================

for (let botao of botoesFechar) {

    botao.addEventListener(
        "click",

        function () {

            overlay.hidden = true;

        }
    );

}


// ========================================
// ETAPA 1
// ========================================

btnEtapa1.addEventListener(
    "click",

    function () {


        const horario =
            document.querySelector(
                'input[name="horario"]:checked'
            );


        const pessoas =
            document.querySelector(
                'input[name="pessoas"]:checked'
            );


        // VALIDAÇÕES

        if (selectUnidade.value === "") {

            alert(
                "Selecione uma unidade."
            );

            return;

        }


        if (data.value === "") {

            alert(
                "Selecione uma data."
            );

            return;

        }


        if (horario === null) {

            alert(
                "Selecione um horário."
            );

            return;

        }


        if (pessoas === null) {

            alert(
                "Selecione o número de pessoas."
            );

            return;

        }


        // criando o objeto da reserva

        const reserva = {

            unidade:
                selectUnidade
                    .options[
                        selectUnidade.selectedIndex
                    ]
                    .text,

            data:
                data.value,

            horario:
                horario.value,

            pessoas:
                pessoas.value

        };


        // transformando em JOHNSON

        const reservaJSON =
            JSON.stringify(reserva);


        // guarda no navegador

        localStorage.setItem(
            "reservaEmAndamento",
            reservaJSON
        );


        // vai para etapa 2

        etapa1.hidden = true;

        etapa2.hidden = false;

    }
);


// ========================================
// ETAPA 2
// ========================================


// PEGAR

const nome =
    document.getElementById("nomeReserva");

const email =
    document.getElementById("emailReserva");

const telefone =
    document.getElementById("telefoneReserva");

const observacao =
    document.getElementById("mensagemReserva");

const btnVoltar =
    document.getElementById("btnVoltar");

const btnEtapa2 =
    document.getElementById("btnEtapa2");


// VOLTAR

btnVoltar.addEventListener(
    "click",

    function () {

        etapa2.hidden = true;

        etapa1.hidden = false;

    }
);


// CONTINUAR

btnEtapa2.addEventListener(
    "click",

    function () {


        if (nome.value === "") {

            alert(
                "Digite seu nome."
            );

            return;

        }


        if (email.value === "") {

            alert(
                "Digite seu e-mail."
            );

            return;

        }


        if (telefone.value === "") {

            alert(
                "Digite seu telefone."
            );

            return;

        }


        // pega o JSON do navegador

        const reservaJSON =
            localStorage.getItem(
                "reservaEmAndamento"
            );


        // transforma JOHNSON de volta
        // em objeto JavaScript

        const reserva =
            JSON.parse(reservaJSON);


        // acrescenta os dados pessoais

        reserva.nome =
            nome.value;

        reserva.email =
            email.value;

        reserva.telefone =
            telefone.value;

        reserva.observacao =
            observacao.value;


        // transforma em JSON novamente

        const novoJSON =
            JSON.stringify(reserva);


        // salva novamente

        localStorage.setItem(
            "reservaEmAndamento",
            novoJSON
        );


        // ========================================
        // RESUMO DA RESERVA
        // ========================================

        document
            .getElementById(
                "confirmacaoUnidade"
            )
            .textContent =
                "Unidade: " +
                reserva.unidade;


        document
            .getElementById(
                "confirmacaoData"
            )
            .textContent =
                "Data: " +
                reserva.data;


        document
            .getElementById(
                "confirmacaoHorario"
            )
            .textContent =
                "Horário: " +
                reserva.horario;


        document
            .getElementById(
                "confirmacaoPessoas"
            )
            .textContent =
                "Número de pessoas: " +
                reserva.pessoas;


        document
            .getElementById(
                "confirmacaoNome"
            )
            .textContent =
                "Nome: " +
                reserva.nome;


        document
            .getElementById(
                "confirmacaoEmail"
            )
            .textContent =
                "E-mail: " +
                reserva.email;


        document
            .getElementById(
                "confirmacaoTelefone"
            )
            .textContent =
                "Telefone: " +
                reserva.telefone;


        // se observação estiver vazia
        // mostra um tracinho

        if (reserva.observacao === "") {

            document
                .getElementById(
                    "confirmacaoObservacao"
                )
                .textContent =
                    "Observações: —";

        }

        else {

            document
                .getElementById(
                    "confirmacaoObservacao"
                )
                .textContent =
                    "Observações: " +
                    reserva.observacao;

        }


        // abre etapa 3

        etapa2.hidden = true;

        etapa3.hidden = false;

    }
);


// ========================================
// ETAPA 3
// ========================================

const btnVoltar3 =
    document.getElementById("btnVoltar3");

const btnConfirmar =
    document.getElementById("btnConfirmar");


// VOLTAR

btnVoltar3.addEventListener(
    "click",

    function () {

        etapa3.hidden = true;

        etapa2.hidden = false;

    }
);


// ========================================
// CONFIRMAR RESERVA
// ========================================

btnConfirmar.addEventListener(
    "click",

    function () {


        const reservaJSON =
            localStorage.getItem(
                "reservaEmAndamento"
            );


        const reserva =
            JSON.parse(reservaJSON);


        // por enquanto ainda salva uma reserva
        // depois vamos transformar isso numa lista

        localStorage.setItem(
            "reservaConfirmada",
            reservaJSON
        );


        localStorage.removeItem(
            "reservaEmAndamento"
        );


        alert(
            "Reserva confirmada com sucesso para "
            + reserva.nome
            + "!"
        );


        // limpa os formulários

        document
            .getElementById(
                "formreserva-etapa1"
            )
            .reset();


        document
            .getElementById(
                "formreserva-etapa2"
            )
            .reset();


        // fecha a janela

        overlay.hidden = true;

    }
);


// ========================================
// FORMULÁRIO DE CONTATO
// ========================================

const formularioContato =
    document.getElementById(
        "contato-form"
    );


formularioContato.addEventListener(
    "submit",

    function (evento) {

        evento.preventDefault();


        alert(
            "Mensagem enviada com sucesso!"
        );


        formularioContato.reset();

    }
);