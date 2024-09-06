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
        tags: "líder, Troupe Grimm, ritual, sombrio"
    },
    {
        titulo: "Hornet",
        descrição: "Hornet é uma personagem importante em Hollow Knight, conhecida tanto como uma adversária formidável quanto como uma aliada crucial. Ela é a filha do Rei Pálido e da Besta Herrah, o que a torna uma figura única na trama. Com suas habilidades ágeis e seu aguçado sentido de dever, Hornet protege Hallownest e busca compreender seu próprio destino dentro do colapso do reino.",
        link: "https://hollowknight.fandom.com/pt/wiki/Hornet",
        tags: "Hornet, Rei Pálido, Herrah, adversária"
    },
    {
        titulo: "Zote, o Poderoso",
        descrição: "Zote é um dos personagens mais excêntricos de Hollow Knight. Ele é um guerreiro arrogante, mas ineficaz, que constantemente se mete em situações perigosas das quais precisa ser resgatado. Apesar de sua inabilidade, Zote se considera um grande herói e se recusa a admitir seus fracassos.",
        link: "https://hollowknight.fandom.com/pt/wiki/Zote,_o_Poderoso",
        tags: "Zote, arrogante, excêntrico, resgate"
    },
    {
        titulo: "Rei Pálido",
        descrição: "O Rei Pálido é uma figura central na história de Hollow Knight, sendo o governante de Hallownest e o responsável por muitos dos eventos que moldaram o reino. Ele é uma figura trágica, cujas decisões para proteger seu reino tiveram consequências desastrosas. Sua influência permeia todo o jogo, mesmo após sua morte.",
        link: "https://hollowknight.fandom.com/pt/wiki/Rei_P%C3%A1lido",
        tags: "Rei Pálido, governante, trágico, Hallownest"
    },
    {
        titulo: "Herrah, a Besta",
        descrição: "Herrah é uma das três Dreamers que ajudam a selar o Hollow Knight. Ela também é a mãe de Hornet, o que a conecta profundamente com a trama principal. Herrah é uma figura poderosa e respeitada, governando Deepnest com autoridade e força. Sua escolha de se tornar um Dreamer foi uma decisão difícil que mostra seu compromisso com o futuro de Hallownest.",
        link: "https://hollowknight.fandom.com/pt/wiki/Herrah,_a_Besta",
        tags: "Herrah, Dreamer, Hollow Knight, Deepnest"
    },
    {
        titulo: "Monomon, a Professora",
        descrição: "Monomon é outra das três Dreamers que selaram o Hollow Knight. Ela é uma estudiosa dedicada que passa seu tempo em busca de conhecimento sobre a infeção que assolou Hallownest. Seu sacrifício ao se tornar um Dreamer demonstra sua devoção à proteção do reino, apesar de seu desejo contínuo por entendimento.",
        link: "https://hollowknight.fandom.com/pt/wiki/Monomon,_a_Mestre",
        tags: "Monomon, Dreamer, estudiosa, sacrifício"
    },
    {
        titulo: "Lurien, o Observador",
        descrição: "Lurien é o terceiro dos Dreamers, e ele é conhecido por sua obsessão com a pureza e a perfeição. Ele observa o reino de Hallownest de sua torre alta, garantindo que o selo sobre o Hollow Knight permaneça intacto. Sua devoção ao seu papel é completa, e ele acredita firmemente que está cumprindo um dever sagrado.",
        link: "https://hollowknight.fandom.com/pt/wiki/Lurien,_o_Observador",
        tags: "Lurien, Dreamer, perfeição, devoção"
    },
    {
        titulo: 'O Cavaleiro Vazio',
        descrição: "O Cavaleiro Vazio é uma figura trágica e central na história de Hollow Knight. Criado pelo Rei Pálido como um recipiente para conter a infeção, ele falha em sua missão devido a sua conexão com o reino e seus habitantes. O Cavaleiro Vazio é um lembrete do sacrifício e das consequências das escolhas feitas em nome da proteção de Hallownest.",
        link: "https://hollowknight.fandom.com/pt/wiki/Hollow_Knight",
        tags: "Cavaleiro Vazio, sacrifício, infecção, Hallownest"
    },
    {
        titulo: 'Radiância',
        descrição: "A Radiância é a principal antagonista em Hollow Knight, representando a antiga divindade de Hallownest. Ela é a origem da infecção que corrompe o reino, sendo um ser de luz pura que ressurge para reivindicar o controle sobre as mentes dos habitantes. A Radiância é uma força implacável e vingativa, determinada a destruir tudo que se interpõe em seu caminho. Sua batalha final com o Cavaleiro é uma culminação épica de uma história de poder, sacrifício e a luta contra a corrupção. A Radiância, com sua presença opressiva e inescapável, é um símbolo do passado que não pode ser completamente apagado.",
        link: "https://hollowknight.fandom.com/pt/wiki/Radi%C3%A2ncia",
        tags: "Radiância, antagonista, divindade, infecção"
    },
    {
        titulo: "Cavaleiro das Asas de Mariposa",
        descrição: "O Cavaleiro das Asas de Mariposa é um guerreiro feroz que protege uma relíquia sagrada nas cavernas profundas de Hallownest. Embora não seja tão poderoso quanto outros chefes, sua agilidade e habilidade de invocar mariposas o tornam um adversário perigoso.",
        link: "https://hollowknight.fandom.com/pt/wiki/Mothwing_Knight",
        tags: "Cavaleiro das Asas de Mariposa, guerreiro, relíquia, mariposas"
    },
    {
        titulo: "Vasilha Quebrada",
        descrição: "A Vasilha Quebrada é um chefe trágico encontrado nas profundezas de Hallownest. Um receptáculo falho que não conseguiu conter a infeção, ele serve como um lembrete das falhas e dos sacrifícios feitos em nome do reino. A batalha contra ele é um dos momentos mais emotivos do jogo.",
        link: "https://hollowknight.fandom.com/pt/wiki/Broken_Vessel",
        tags: "Vasilha Quebrada, chefe, trágico, sacrifícios"
    },
    {
        titulo: "O Colecionador",
        descrição: "O Colecionador é uma entidade misteriosa que captura e aprisiona criaturas em frascos de vidro. Ele vagueia pela Torre do Amor, adicionando obsessivamente novas criaturas à sua coleção. O Cavaleiro o enfrenta em uma batalha frenética, onde ele deve quebrar os frascos e libertar os seres aprisionados.",
        link: "https://hollowknight.fandom.com/pt/wiki/The_Collector",
        tags: "Colecionador, frascos, Torre do Amor, criaturas"
    },
    {
        titulo: "Gorb",
        descrição: "Gorb é um dos guerreiros dos sonhos que o Cavaleiro pode enfrentar. Embora ele se veja como um ser de grande sabedoria e poder, na realidade, é um espírito excêntrico e muitas vezes hilário. A batalha contra Gorb é tanto uma prova de habilidade quanto de paciência.",
        link: "https://hollowknight.fandom.com/pt/wiki/Gorb",
        tags: "Gorb, guerreiro dos sonhos, excêntrico, sabedoria"
    },
    {
        titulo: "Lordes Louva-a-Deus",
        descrição: "Os Lordes Louva-a-Deus são os governantes da tribo Louva-a-Deus nas Ervas Fúngicas. Eles são guerreiros extremamente habilidosos e desafiam o Cavaleiro em uma luta honrada e desafiadora. Derrotá-los garante o respeito da tribo e a passagem segura pelo território deles.",
        link: "https://hollowknight.fandom.com/pt/wiki/Mantis_Lords",
        tags: "Lordes Louva-a-Deus, guerreiros, tribo, respeito"
    },
    {
        titulo: "Nosk",
        descrição: "Nosk é uma criatura sinistra encontrada nas profundezas de Hallownest, que tem a habilidade de imitar a aparência de outros seres, atraindo suas presas para emboscadas mortais. Seu design grotesco e suas habilidades de emboscada o tornam um dos chefes mais assustadores do jogo.",
        link: "https://hollowknight.fandom.com/pt/wiki/Nosk",
        tags: "Nosk, emboscada, sinistro, grotesco"
    },
    {
        titulo: "Dung Defender",
        descrição: "O Dung Defender é um dos cinco grandes cavaleiros de Hallownest, conhecido por seu grande senso de humor e seu profundo senso de lealdade ao reino. Ele habita as profundezas do esgoto de Hallownest, onde protege fervorosamente o reino mesmo em seu estado de decadência.",
        link: "https://hollowknight.fandom.com/pt/wiki/Dung_Defender",
        tags: "Dung Defender, cavaleiro, esgoto, lealdade"
    },
    {
        titulo: "O Grimmchild",
        descrição: "O Grimmchild é o companheiro do Cavaleiro durante a missão relacionada ao Troupe Grimm. Ele evolui ao longo do ritual, tornando-se mais forte conforme o Cavaleiro coleta as chamas necessárias. O Grimmchild é uma parte essencial do ritual do Troupe, e sua presença está ligada ao destino do próprio Grimm.",
        link: "https://hollowknight.fandom.com/pt/wiki/Grimmchild",
        tags: "Grimmchild, Troupe Grimm, ritual, evolução"
    },
    {
        titulo: "Traitor Lord",
        descrição: "O Traitor Lord é um chefe poderoso que uma vez liderou uma facção da tribo Mantis. Após trair as Senhoras Mantis, ele se aliou a forças obscuras e se tornou um inimigo formidável. A batalha contra o Traitor Lord é um dos desafios mais intensos do jogo.",
        link: "https://hollowknight.fandom.com/pt/wiki/Traitor_Lord",
        tags: "Traitor Lord, Mantis, traição, chefe"
    },
    {
        titulo: "White Lady",
        descrição: "A White Lady é uma figura misteriosa e importante na trama de Hollow Knight. Ela é uma criatura antiga, que compartilha uma conexão profunda com o Rei Pálido e o destino de Hallownest. Sua presença no Jardim da Rainha representa um dos últimos resquícios de vida no reino em colapso.",
        link: "https://hollowknight.fandom.com/pt/wiki/White_Lady",
        tags: "White Lady, Jardim da Rainha, Rei Pálido, antigo"
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
        titulo: "God Tamer",
        descrição: "A God Tamer é uma guerreira feroz que luta ao lado de seu companheiro bestial na arena dos Colosseum of Fools. Ela representa o ápice dos desafios de combate no coliseu e é um dos inimigos mais formidáveis que o Cavaleiro enfrenta.",
        link: "https://hollowknight.fandom.com/pt/wiki/God_Tamer",
        tags: "God Tamer, guerreira, Colosseum of Fools, companheiro"
    },
    {
        titulo: "Mestre das Almas",
        descrição: "O Mestre das Almas é um dos chefes poderosos do jogo, encontrado nas profundezas da Cidade das Lágrimas. Ele era um estudioso que buscava o poder da alma para alcançar a imortalidade, mas acabou corrompido por suas ambições.",
        link: "https://hollowknight.fandom.com/pt/wiki/Soul_Master",
        tags: "Mestre das Almas, Cidade das Lágrimas, imortalidade, corrupção"
    },
    {
        titulo: "Shade Lord",
        descrição: "O Shade Lord é uma forma poderosa e sombria que representa a corrupção e a escuridão dentro do Cavaleiro. Ele é uma das manifestações mais perigosas da infecção que assola Hallownest, e sua aparição marca um momento importante na jornada do Cavaleiro.",
        link: "https://hollowknight.fandom.com/pt/wiki/Shade_Lord",
        tags: "Shade Lord, corrupção, escuridão, infeção"
    }
    


    ]
    