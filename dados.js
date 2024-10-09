let dados = [
    {
        titulo: "Quirrel",
        descrição: "Quirrel é um explorador curioso e uma das figuras mais enigmáticas de Hallownest. Ele viaja pelo reino tentando entender sua história e os mistérios que envolvem a praga que aflige o local. Suas interações com o Cavaleiro fornecem insights valiosos sobre o passado de Hallownest e a natureza da infeção.",
        link: "https://hollowknight.fandom.com/pt/wiki/Quirrel",
        tags: "explorador, Hallownest, praga, lore"
    },
    {
        titulo: "Grimm",
        descrição: "Grimm é o líder do Troupe Grimm, um grupo itinerante que aparece em Hallownest para realizar um ritual sombrio. Ele é um personagem carismático e enigmático, com intenções que permanecem misteriosas até o final. Grimm oferece ao Cavaleiro a chance de participar de seu ritual, o que pode ter consequências profundas.",
        link: "https://hollowknight.fandom.com/pt/wiki/Grimm",
        tags: "líder, Troupe Grimm, ritual, sombrio, boss"
    },
    {
        titulo: "Hornet",
        descrição: "Hornet é uma personagem importante em Hollow Knight, conhecida tanto como uma adversária formidável quanto como uma aliada crucial. Ela é a filha do Rei Pálido e da Besta Herrah, o que a torna uma figura única na trama. Com suas habilidades ágeis e seu aguçado sentido de dever, Hornet protege Hallownest e busca compreender seu próprio destino dentro do colapso do reino.",
        link: "https://hollowknight.fandom.com/pt/wiki/Hornet",
        tags: "Hornet, Rei Pálido, Herrah, adversária, boss"
    },
    {
        titulo: "Zote, o Poderoso",
        descrição: "Zote é um dos personagens mais excêntricos de Hollow Knight. Ele é um guerreiro arrogante, mas ineficaz, que constantemente se mete em situações perigosas das quais precisa ser resgatado. Apesar de sua inabilidade, Zote se considera um grande herói e se recusa a admitir seus fracassos.",
        link: "https://hollowknight.fandom.com/pt/wiki/Zote,_o_Poderoso",
        tags: "Zote, arrogante, excêntrico, resgate, boss"
    },
    {
        titulo: "Rei Pálido",
        descrição: "O Rei Pálido é uma figura central na história de Hollow Knight, sendo o governante de Hallownest e o responsável por muitos dos eventos que moldaram o reino. Ele é uma figura trágica, cujas decisões para proteger seu reino tiveram consequências desastrosas. Sua influência permeia todo o jogo, mesmo após sua morte.",
        link: "https://hollowknight.fandom.com/pt/wiki/Rei_P%C3%A1lido",
        tags: "Rei Pálido, governante, trágico, Hallownest, palido"
    },
    {
        titulo: "Herrah, a Besta",
        descrição: "Herrah é uma das três Dreamers que ajudam a selar o Hollow Knight. Ela também é a mãe de Hornet, o que a conecta profundamente com a trama principal. Herrah é uma figura poderosa e respeitada, governando Deepnest com autoridade e força. Sua escolha de se tornar um Dreamer foi uma decisão difícil que mostra seu compromisso com o futuro de Hallownest.",
        link: "https://hollowknight.fandom.com/pt/wiki/Herrah,_a_Besta",
        tags: "Herrah, Dreamer, Hollow Knight, Deepnest, sonhadora"
    },
    {
        titulo: "Monomon, a Professora",
        descrição: "Monomon é outra das três Dreamers que selaram o Hollow Knight. Ela é uma estudiosa dedicada que passa seu tempo em busca de conhecimento sobre a infeção que assolou Hallownest. Seu sacrifício ao se tornar um Dreamer demonstra sua devoção à proteção do reino, apesar de seu desejo contínuo por entendimento.",
        link: "https://hollowknight.fandom.com/pt/wiki/Monomon,_a_Mestre",
        tags: "Monomon, Dreamer, estudiosa, sacrifício, sonhadora"
    },
    {
        titulo: "Lurien, o Observador",
        descrição: "Lurien é o terceiro dos Dreamers, e ele é conhecido por sua obsessão com a pureza e a perfeição. Ele observa o reino de Hallownest de sua torre alta, garantindo que o selo sobre o Hollow Knight permaneça intacto. Sua devoção ao seu papel é completa, e ele acredita firmemente que está cumprindo um dever sagrado.",
        link: "https://hollowknight.fandom.com/pt/wiki/Lurien,_o_Observador",
        tags: "Lurien, Dreamer, perfeição, devoção, sonhadora"
    },
    {
        titulo: 'O Cavaleiro Vazio',
        descrição: "O Cavaleiro Vazio é uma figura trágica e central na história de Hollow Knight. Criado pelo Rei Pálido como um recipiente para conter a infeção, ele falha em sua missão devido a sua conexão com o reino e seus habitantes. O Cavaleiro Vazio é um lembrete do sacrifício e das consequências das escolhas feitas em nome da proteção de Hallownest.",
        link: "https://hollowknight.fandom.com/pt/wiki/Hollow_Knight",
        tags: "Cavaleiro Vazio, sacrifício, infecção, Hallownest, boss"
    },
    {
        titulo: 'Radiância',
        descrição: "A Radiância é a principal antagonista em Hollow Knight, representando a antiga divindade de Hallownest. Ela é a origem da infecção que corrompe o reino, sendo um ser de luz pura que ressurge para reivindicar o controle sobre as mentes dos habitantes. A Radiância é uma força implacável e vingativa, determinada a destruir tudo que se interpõe em seu caminho. Sua batalha final com o Cavaleiro é uma culminação épica de uma história de poder, sacrifício e a luta contra a corrupção. A Radiância, com sua presença opressiva e inescapável, é um símbolo do passado que não pode ser completamente apagado.",
        link: "https://hollowknight.fandom.com/pt/wiki/Radi%C3%A2ncia",
        tags: "Radiância, antagonista, divindade, infecção, boss"
    },
    {
        titulo: "Receptáculo Quebrado",
        descrição: "A Receptáculo Quebrado é um chefe trágico encontrado na bacia antiga em Hallownest. Ele escapou do Abismo antes que o Rei Palido fechasse a entrada do abismo.",
        link: "https://hollowknight.fandom.com/pt/wiki/Recept%C3%A1culo_Quebrado?so=search",
        tags: "Vasilha Quebrada, chefe, trágico, sacrifícios"
    },
    {
        titulo: "O Colecionador",
        descrição: "O Colecionador é uma entidade misteriosa que captura e aprisiona criaturas em frascos de vidro. Ele vagueia pela Torre do Amor, adicionando obsessivamente novas criaturas à sua coleção. O Cavaleiro o enfrenta em uma batalha frenética, onde ele deve quebrar os frascos e libertar os seres aprisionados.",
        link: "https://hollowknight.fandom.com/pt/wiki/Colecionador?so=search",
        tags: "Colecionador, frascos, Torre do Amor, criaturas, boss"
    },
    {
        titulo: "Gorb",
        descrição: "Gorb é um dos guerreiros dos sonhos que o Cavaleiro pode enfrentar. Embora ele se veja como um ser de grande sabedoria e poder, na realidade, é um espírito excêntrico e muitas vezes hilário. A batalha contra Gorb é tanto uma prova de habilidade quanto de paciência.",
        link: "https://hollowknight.fandom.com/pt/wiki/Gorb",
        tags: "Gorb, guerreiro dos sonhos, excêntrico, sabedoria, guerreiro dos sonhos "
    },
    {
        titulo: "Lordes Louva-a-Deus",
        descrição: "Os Lordes Louva-a-Deus são os governantes da tribo Louva-a-Deus nas Ermos Fúngicos. Eles são guerreiros extremamente habilidosos e desafiam o Cavaleiro em uma luta honrada e desafiadora. Derrotá-los garante o respeito da tribo. E elas abrem a passagem para o ninho profundo.",
        link: "https://hollowknight.fandom.com/pt/wiki/Lordes_Louva-a-Deus",
        tags: "Lordes Louva-a-Deus, guerreiros, tribo, respeito, boss"
    },
    {
        titulo: "Nosk",
        descrição: "Nosk é uma criatura sinistra encontrada nas profundezas de Hallownest, que tem a habilidade de imitar a aparência de outros seres, atraindo suas presas para emboscadas mortais. Seu design grotesco e suas habilidades de emboscada o tornam um dos chefes mais assustadores do jogo.",
        link: "https://hollowknight.fandom.com/pt/wiki/Nosk",
        tags: "Nosk, emboscada, sinistro, grotesco, boss, minerio palido"
    },
    {
        titulo: "Defensor Branco",
        descrição: "O Defensor Branco é um dos cinco grandes cavaleiros de Hallownest, conhecido por seu grande senso de humor e seu profundo senso de lealdade ao reino. Ele habita as profundezas do esgoto de Hallownest, onde protege fervorosamente o tumulo de isma mesmo em seu estado de decadência.",
        link: "https://hollowknight.fandom.com/pt/wiki/Defensor_Branco",
        tags: "Defensor Branco, cavaleiro, esgoto, lealdade, boss, boss do sonho, sonho, isma, cinco grandes cavaleiros de Hallownest "
    },
    {
        titulo: "O Grimmchild",
        descrição: "O Grimmchild é o companheiro do Cavaleiro durante a missão relacionada ao Troupe Grimm. Ele evolui ao longo do ritual, tornando-se mais forte conforme o Cavaleiro coleta as chamas necessárias. O Grimmchild é uma parte essencial do ritual do Troupe, e sua presença está ligada ao destino do próprio Grimm.",
        link: "https://hollowknight.fandom.com/pt/wiki/Crian%C3%A7a_Grimm?so=search",
        tags: "Grimmchild, Troupe Grimm, ritual, evolução, grimm"
    },
    {
        titulo: "Lord Traidor",
        descrição: "O Lord Traidor é um chefe poderoso que uma vez liderou uma infecção da tribo louva-a-deus. Após trair as lordes louva-a-deus, ele se aliou a forças obscuras e se tornou um inimigo formidável. A batalha contra o Lord Traidor é um dos desafios mais intensos do jogo.",
        link: "https://hollowknight.fandom.com/pt/wiki/Lorde_Traidor",
        tags: "Lord Traidor, louva-a-deus, traição, chefe"
    },
    {
        titulo: "Dryyay",
        descrição: "A Dryya é uma figura misteriosa e importante na trama de Hollow Knight. Ela é uma criatura antiga, que compartilha uma conexão profunda com o Rei Pálido, e é uma das Os Cinco Grandes Cavaleiror e o destino de Hallownest. Sua presença no Jardim da Rainha representa um dos últimos resquícios de vida no reino em colapso.",
        link: "https://hollowknight.fandom.com/pt/wiki/Cinco_Grandes_Cavaleiros",
        tags: "Dryyay, Jardim da Rainha, Rei Pálido, antigo, dama branca, Os Cinco Grandes Cavaleiror"
    },
    {
        titulo: "Myla",
        descrição: "Myla é uma das personagens mais trágicas de Hollow Knight. Ela é uma mineradora alegre que canta enquanto trabalha, mas eventualmente sucumbe à infeção. Seu destino serve como um lembrete doloroso da disseminação implacável da infeção em Hallownest.",
        link: "https://hollowknight.fandom.com/pt/wiki/Myla",
        tags: "Myla, mineradora, infeção, tragédia"
    },
    {
        titulo: "Brumm",
        descrição: "Brumm é um dos membros do Troupe Grimm e tem um papel importante no ritual do Troupe. Ele é um personagem enigmático, cuja lealdade e motivação permanecem misteriosas. O Cavaleiro pode decidir seu destino durante o ritual, o que afeta a conclusão da missão.",
        link: "https://hollowknight.fandom.com/pt/wiki/Brumm",
        tags: "Brumm, Troupe Grimm, ritual, lealdade"
    },
    {
        titulo: "Domador de Deuses",
        descrição: "A Domador de Deuses é uma guerreira feroz que luta ao lado de seu companheiro bestial na arena dos coliseus dos tolos. Ela representa o ápice dos desafios de combate no coliseu e é um dos inimigos mais formidáveis que o Cavaleiro enfrenta.",
        link: "https://hollowknight.fandom.com/pt/wiki/Domador_de_Deuses",
        tags: "Domador de Deuses, guerreira, coliseus dos tolos, companheiro"
    },
    {
        titulo: "Mestre das Almas",
        descrição: "O Mestre das Almas é um dos chefes poderosos do jogo, encontrado nas profundezas da Cidade das Lágrimas. Ele era um estudioso que buscava o poder da alma para alcançar a imortalidade, mas acabou corrompido por suas ambições.",
        link: "https://hollowknight.fandom.com/pt/wiki/Soul_Master",
        tags: "Mestre das Almas, Cidade das Lágrimas, imortalidade, corrupção"
    },
    {
        titulo: "Receptáculo Puro",
        descrição: "O Receptáculo Puro é um chefe opcional de Hollow Knight introduzido em Deus Mestre. Ele é a forma primordial do Cavaleiro Vazio, a forma não afetada pela Infecção.",
        link: "https://hollowknight.fandom.com/pt/wiki/Recept%C3%A1culo_Puro",
        tags: "Receptáculo Puro, receptaculo, pantao, panteão, 4, cavaleiro vazio, panteão do cavalheiro, panteao do cavalheiro, panteão de hallownest, panteao de hallownest, receptaculo puro, Receptaculo Puro"
    },
    ]