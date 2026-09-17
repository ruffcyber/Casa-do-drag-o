
//aqui as unidades desse treco, se quisrem mais só replicar o bloco e ver cidades próximas//
const unidades = [
{
id: 1,
nome: "Araçatuba - Centro",
capacidade: 24
},

{
id: 2,
nome: "Araçatuba - Shopping",
capacidade: 20
},

{
id: 3,
nome: "Birigui",
capacidade: 18
},

{
id: 4,
nome: "São José do Rio Preto",
capacidade: 22
}
];


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