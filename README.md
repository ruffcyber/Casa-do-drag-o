=========================================================================================================================================
=========================================================================================================================================
=========================================================================================================================================

Oi gays e guys, qq o JS tá fazendo até agora em resumo, se funciona já são outros 500:

abre página → mostra etapa 1 → usuário preenche  → valida com if 
→ cria objeto reserva → JSON.stringify() → salva no localStorage 
→ ETAPA 2 → valida dados pessoais → JSON.parse() 
→ acrescenta nome/email/telefone/observação → JSON.stringify() → salva novamente
→ preenche confirmação → ETAPA 3 → confirmar

Sugiro deixar o CSS pro finalzão pq a gente tem que deixar redondinho HTML e JS primeiro, ver se os Jhonson tão funcionando mesmo e daí sim a gente perde tempo deixando bonitinho.

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!Primeiro funcionar e DEPOIS personalizar.!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

====================================================================================================================


✓ Etapa 1: coloquei name="horario" e name="pessoas" nos radios pq o JS precisava p saber qual opção q foi selecionada.
✓ Etapa 3: tirei a repetição de nome, e-mail, telefone e observações (etapa 2 e 3, sorry Mari), mas agr mostra os dados preenchidos nas etapas anteriores p pessoa conferir antes de confirmar (big brain time tá) e tbm tirei os IDs repetidos dessa etapa pq ID é único.

------------------------------------------------------------------------------------------------------------------------

Coisinhas pra gente olhar depois no HTML/CSS:
Conferir os links do menu: “Nossa história” tá indo pro #sobre mas a section se chama #historia os botões de reserva tão indo p #reservas mas n existe uma section com esse ID, temos #reserva-etapa1. 
Depois podemos estilizar as etapas 1, 2 e 3 juntas: agora q a estrutura da etapa 3 mudou vale ver de fazer o CSS dela só dps q todo mundo concordar com esse HTML.
Tem umas coisinhas pequenas para a revisão final: corrigir “reifeições/mês”, “comida caseirade verdade”
E depois vale olhar o responsivo: N precisa mexer nisso agr enquanto a reserva ainda tá sendo fechada


=========================================================================================================================================
=========================================================================================================================================
=========================================================================================================================================
========== E USEM O GIT DESKTOP, deem commit, não percam o trabalho de vocês! O real oficial vai ser aqui, vai valer o exforço ==========
=========================================================================================================================================
=========================================================================================================================================
=========================================================================================================================================
                                                            Bj na bunda