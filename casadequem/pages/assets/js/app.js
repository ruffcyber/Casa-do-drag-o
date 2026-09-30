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

const listaExperiencia =
    document.getElementById("ListaExperiencia");



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

if (listaUnidades) {
    mostrarUnidades();
}

// ========================================
// PESQUISA DAS UNIDADES
// ========================================

if (buscaUnidade) {
    
    buscaUnidade.addEventListener(
    "input",

    function () {

        mostrarUnidades();

    }
);
}




// ========================================
// COLOCAR UNIDADES NO SELECT DA RESERVA
// ========================================
if (selectUnidade) {

    for (let unidade of unidades) {

        const opcao =
            document.createElement("option");

        opcao.value =
            unidade.id;

        opcao.textContent =
            unidade.nome;

        selectUnidade.appendChild(opcao);
    }


    selectUnidade.addEventListener("change", function () {

        const unidadeEscolhida =
            Number(selectUnidade.value);

        listaExperiencia.innerHTML = "";

        if (selectUnidade.value === "") {

            listaExperiencia.innerHTML =
                "<p>Selecione uma unidade primeiro.</p>";

        } else {

            for (let i = 0; i < cardapios.length; i++) {

                if (
                    cardapios[i].unidadeId ===
                    unidadeEscolhida
                ) {

                    listaExperiencia.innerHTML += `
                        <div class="experiencia-reserva">

                            <label>
                                <input 
                                    type="checkbox"
                                    name="experiencias"
                                    value="${cardapios[i].id}"
                                >

                                ${cardapios[i].nome}
                            </label>

                            <input 
                                type="number"
                                min="1"
                                value="0"
                                class="quantidade-pratos"
                            >

                        </div>
                    `;
                }
            }
        }
    });

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

const hoje = new Date();

    let ano = hoje.getFullYear();
    let mes = hoje.getMonth() + 1;
    let dia = hoje.getDate();

    if (mes < 10) {
    mes = "0" + mes;
    }

    if (dia < 10) {
        dia = "0" + dia;
    }

const dataMinima = ano + "-" + mes + "-" + dia;

   if (data) {
    data.min = dataMinima;
}



const btnEtapa1 =
    document.getElementById("btnEtapa1");


// ========================================
// ABRIR RESERVA
// ========================================

if (abrirReserva)
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


if (btnEtapa1) {

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


            const checkboxesExperiencias =
                document.querySelectorAll(
                    'input[name="experiencias"]:checked'
                );


            // ========================================
            // VALIDAÇÕES
            // ========================================

            if (selectUnidade.value === "") {

                alert(
                    "Selecione uma unidade."
                );

                return;
            }


            if (checkboxesExperiencias.length === 0) {

                alert(
                    "Escolha pelo menos uma experiência."
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


            // ========================================
            // GUARDAR EXPERIÊNCIAS E QUANTIDADES
            // ========================================

            const experienciasEscolhidas = [];


            for (
                let checkbox
                of checkboxesExperiencias
            ) {

                const experienciaId =
                    Number(checkbox.value);


                const experiencia =
                    cardapios.find(
                        item =>
                            item.id === experienciaId
                    );


                const quantidadeInput =
                    checkbox
                        .closest(
                            ".experiencia-reserva"
                        )
                        .querySelector(
                            ".quantidade-pratos"
                        );


                const quantidade =
                    Number(
                        quantidadeInput.value
                    );


                // ========================================
                // VERIFICAR QUANTIDADE
                // ========================================

                if (
                    quantidadeInput.value === "" ||
                    quantidade < 1
                ) {

                    alert(
                        "Informe uma quantidade válida para cada experiência escolhida."
                    );

                    quantidadeInput.focus();

                    return;
                }


                experienciasEscolhidas.push({

                    id:
                        experiencia.id,

                    nome:
                        experiencia.nome,

                    quantidade:
                        quantidade,

                    preco:
                        experiencia.preco

                });

            }


            // ========================================
            // CRIANDO O OBJETO DA RESERVA
            // ========================================

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
                    pessoas.value,

                experiencias:
                    experienciasEscolhidas

            };


            console.log(
                "OBJETO RESERVA:",
                reserva
            );


            // ========================================
            // TRANSFORMANDO EM JSON
            // ========================================

            const reservaJSON =
                JSON.stringify(reserva);


            // ========================================
            // GUARDA NO NAVEGADOR
            // ========================================

            localStorage.setItem(
                "reservaEmAndamento",
                reservaJSON
            );


            // ========================================
            // VAI PARA ETAPA 2
            // ========================================

            etapa1.hidden = true;

            etapa2.hidden = false;

        }
    );

}
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


// ========================================
// VOLTAR PARA ETAPA 1
// ========================================

if (btnVoltar) {

    btnVoltar.addEventListener(
        "click",

        function () {

            etapa2.hidden = true;

            etapa1.hidden = false;

        }
    );

}


// ========================================
// CONTINUAR PARA ETAPA 3
// ========================================

if (btnEtapa2) {

    btnEtapa2.addEventListener(
        "click",

        function () {


            // VALIDAÇÕES

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


            // PEGA O JSON DO NAVEGADOR

            const reservaJSON =
                localStorage.getItem(
                    "reservaEmAndamento"
                );


            // TRANSFORMA JSON EM OBJETO

            const reserva =
                JSON.parse(reservaJSON);


            // ACRESCENTA OS DADOS PESSOAIS

            reserva.nome =
                nome.value;

            reserva.email =
                email.value;

            reserva.telefone =
                telefone.value;

            reserva.observacao =
                observacao.value;


            // TRANSFORMA EM JSON NOVAMENTE

            const novoJSON =
                JSON.stringify(reserva);


            // SALVA NOVAMENTE

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


            // EXPERIÊNCIAS

            const confirmacaoExperiencias =
                document.getElementById(
                    "confirmacaoExperiencias"
                );


            confirmacaoExperiencias.innerHTML =
                "Experiências:";


            let total = 0;


            for (
                let experiencia
                of reserva.experiencias
            ) {

                // CALCULA O SUBTOTAL

                const subtotal =
                    experiencia.preco *
                    experiencia.quantidade;


                // SOMA AO TOTAL

                total += subtotal;


                // MOSTRA A EXPERIÊNCIA

                confirmacaoExperiencias.innerHTML += `
                    <p>
                        ${experiencia.nome} -
                        ${experiencia.quantidade}
                        ${experiencia.quantidade === 1
                            ? "prato"
                            : "pratos"
                        }
                        ×
                        ${experiencia.preco.toLocaleString(
                            "pt-BR",
                            {
                                style: "currency",
                                currency: "BRL"
                            }
                        )}
                        =
                        ${subtotal.toLocaleString(
                            "pt-BR",
                            {
                                style: "currency",
                                currency: "BRL"
                            }
                        )}
                    </p>
                `;

            }


            // ========================================
            // TOTAL DA RESERVA
            // ========================================

            document
                .getElementById(
                    "confirmacaoTotal"
                )
                .textContent =
                    "Total: " +
                    total.toLocaleString(
                        "pt-BR",
                        {
                            style: "currency",
                            currency: "BRL"
                        }
                    );


            // DADOS DO CLIENTE

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


            // OBSERVAÇÃO

            if (reserva.observacao === "") {

                document
                    .getElementById(
                        "confirmacaoObservacao"
                    )
                    .textContent =
                        "Observações: —";

            } else {

                document
                    .getElementById(
                        "confirmacaoObservacao"
                    )
                    .textContent =
                        "Observações: " +
                        reserva.observacao;

            }


            // ABRE ETAPA 3

            etapa2.hidden = true;

            etapa3.hidden = false;

        }
    );

}


// ========================================
// ETAPA 3
// ========================================

const btnVoltar3 =
    document.getElementById("btnVoltar3");

const btnConfirmar =
    document.getElementById("btnConfirmar");


// ========================================
// VOLTAR
// ========================================

if (btnVoltar3) {

    btnVoltar3.addEventListener(
        "click",

        function () {

            etapa3.hidden = true;

            etapa2.hidden = false;

        }
    );

}


// ========================================
// CONFIRMAR RESERVA
// ========================================

if (btnConfirmar) {

    btnConfirmar.addEventListener(
        "click",

        function () {

            const reservaJSON =
                localStorage.getItem(
                    "reservaEmAndamento"
                );


            const reserva =
                JSON.parse(reservaJSON);


            // ========================================
            // SALVAR A RESERVA NA LISTA
            // ========================================

            let reservas =
                JSON.parse(
                    localStorage.getItem("reservas")
                ) || [];


            // CRIA UM ID PARA A RESERVA

            reserva.id = Date.now();


            // ADICIONA NA LISTA

            reservas.push(reserva);


            // SALVA A LISTA ATUALIZADA

            localStorage.setItem(
                "reservas",
                JSON.stringify(reservas)
            );


            // APAGA A RESERVA EM ANDAMENTO

            localStorage.removeItem(
                "reservaEmAndamento"
            );


            alert(
                "Reserva confirmada com sucesso para "
                + reserva.nome
                + "!"
            );


            // LIMPA OS FORMULÁRIOS

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


            // FECHA A JANELA

            overlay.hidden = true;

        }
    );

}


// ========================================
// FORMULÁRIO DE CONTATO
// ========================================

const formularioContato =
    document.getElementById(
        "contato-form"
    );


if (formularioContato) {

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

}


// ========================================
// MINHAS RESERVAS
// ========================================

const listaMinhasReservas =
    document.getElementById(
        "listaMinhasReservas"
    );


if (listaMinhasReservas) {

    const reservas =
        JSON.parse(
            localStorage.getItem("reservas")
        ) || [];


    if (reservas.length === 0) {

        listaMinhasReservas.innerHTML = `
            <p>
                Você ainda não fez nenhuma reserva!
            </p>
        `;

    } else {

        for (let reserva of reservas) {

            let total = 0;


            // CALCULA O TOTAL

            for (
                let experiencia
                of reserva.experiencias
            ) {

                total +=
                    experiencia.preco *
                    experiencia.quantidade;

            }


            // COMEÇA O CARD

            listaMinhasReservas.innerHTML += `

                <div
                    class="card-reserva"
                    data-reserva-id="${reserva.id}"
                >

                    <h2>
                        ${reserva.unidade}
                    </h2>

                    <p>
                        <strong>Data:</strong>
                        ${reserva.data}
                    </p>

                    <p>
                        <strong>Horário:</strong>
                        ${reserva.horario}
                    </p>

                    <p>
                        <strong>Pessoas:</strong>
                        ${reserva.pessoas}
                    </p>

                    <h3>
                        Experiências:
                    </h3>

            `;


            // MOSTRA AS EXPERIÊNCIAS

            for (
                let experiencia
                of reserva.experiencias
            ) {

                listaMinhasReservas.innerHTML += `

                    <p>
                        ${experiencia.nome}
                        ×
                        ${experiencia.quantidade}
                    </p>

                `;

            }


            // FINALIZA O CARD

            listaMinhasReservas.innerHTML += `

                    <p>
                        <strong>Total:</strong>
                        ${total.toLocaleString(
                            "pt-BR",
                            {
                                style: "currency",
                                currency: "BRL"
                            }
                        )}
                    </p>

                    <p>
                        <strong>Status:</strong>
                        Reserva confirmada
                    </p>

                    <button
                        type="button"
                        class="btn-cancelar"
                        data-reserva-id="${reserva.id}"
                    >
                        Cancelar reserva
                    </button>

               

            `;

        }

    }

}


// CANCELAR RESERVA


if (listaMinhasReservas) {

    listaMinhasReservas.onclick = function (event) {

        const botao =
            event.target.closest(".btn-cancelar");

        if (!botao) {
            return;
        }

        const id =
            Number(
                botao.dataset.reservaId
            );

        let reservas =
            JSON.parse(
                localStorage.getItem("reservas")
            ) || [];

        reservas =
            reservas.filter(
                function (reserva) {
                    return reserva.id !== id;
                }
            );

        localStorage.setItem(
            "reservas",
            JSON.stringify(reservas)
        );

        location.reload();
    };
}