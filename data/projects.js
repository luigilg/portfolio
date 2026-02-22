import bantadsDesc from './descriptions/bantads.md?raw';
import nutriplanDesc from './descriptions/nutriplan.md?raw';

export const projects = [
    { 
        id: 'minidrinks', 
        title: 'MINIDRINKS', 
        description: "MiniDrinks é uma empresa brasileira especializada em mini garrafas de bebidas e kits para preparo de destilados prontos. Junto com meu amigo na Vzion (nosso pequeno negócio de videomaking), gravamos e editamos alguns vídeos para a MiniDrinks em 2021. Abaixo está a animação da logo e motions de vídeos postados em formato Reels e Youtube.",
        categories: ['animation', 'videos'], 
        hasPage: true, 
        preview: { src: '/projects/MiniDrinks/LogoAnim.mp4', type: 'video', speed: 1, start: 0 },
        media: [
            { type: 'video', src: '/projects/MiniDrinks/LogoAnim.mp4', caption: 'Animação de Logo', cols: 2 },
            { type: 'video', src: '/projects/MiniDrinks/Reels.mp4', caption: 'Reels - Minikits', cols: 2 },
            { type: 'video', src: '/projects/MiniDrinks/Youtube.mp4', caption: 'Youtube - MiniGarrafas', cols: 2, controls: true, autoplay: true, muted: true },
        ] 
    },
    { 
        id: 'procubo', 
        title: 'PROCUBO', 
        color: '#26b87dff',
        categories: ['animation'], 
        description: "Para a ProCubo, criei 3 animações de logo diferentes. Para cada uma dessas, fiz uma versão secundária com uma tela de código antes da animação. Como o intuito do projeto era aulas de programação de forma profissional, incluí elementos que representassem o mundo da programação.",
        hasPage: true, 
        preview: { src: '/projects/ProCubo/S3.mp4', type: 'video', speed: 1, start: 0 },
        media: [
            { type: 'video', src: '/projects/ProCubo/S1.mp4', cols: 1, caption: 'Animação 1 (sem código)' },
            { type: 'video', src: '/projects/ProCubo/C1.mp4', cols: 1, caption: 'Animação 1 (com código)' },
            { type: 'video', src: '/projects/ProCubo/S2.mp4', cols: 1, caption: 'Animação 2 (sem código)' },
            { type: 'video', src: '/projects/ProCubo/C2.mp4', cols: 1, caption: 'Animação 2 (com código)' },
            { type: 'video', src: '/projects/ProCubo/S3.mp4', cols: 1, caption: 'Animação 3 (sem código)' },
            { type: 'video', src: '/projects/ProCubo/C3.mp4', cols: 1, caption: 'Animação 3 (com código)' },
        ]
    },
    { 
        id: 'conversu', 
        title: 'CONVERSU', 
        color: '#f74400',
        categories: ['animation', 'videos'], 
        description: "Desde 2022 faço vídeos promocionais e animações para a Conversu, uma empresa brasileira de atendimento com IA para empresas.",
        hasPage: true, 
        preview: { src: '/projects/Conversu/LogoAnim.mp4', type: 'video', speed: 1, start: 1 },
        media: [
            { type: 'video', src: '/projects/Conversu/Promo.mp4', cols: 2, caption: 'Vídeo Promocional - Youtube', controls: true, autoplay: true, muted: true },
            { type: 'video', src: '/projects/Conversu/LogoAnim.mp4', cols: 1, caption: 'Animação de Logo' },
            { type: 'video', src: '/projects/Conversu/AiChat.mp4', cols: 1, caption: 'Chat de IA - usado no site da Conversu', controls: true, autoplay: true, muted: true },
            { type: 'video', src: '/projects/Conversu/app.mp4', cols: 1, caption: 'Promo App - Reels', controls: true, autoplay: true, muted: true },
            { type: 'video', src: '/projects/Conversu/ReelsPromo.mp4', cols: 1, caption: 'Promocional - Reels', controls: true, autoplay: true, muted: true },
            { type: 'video', src: '/projects/Conversu/ReelsAtendimento.mp4', cols: 2, caption: 'Atendimento - Reels', controls: true, autoplay: true, muted: true },
        ]
    },
    { 
        id: 'baya', 
        title: 'BAYA', 
        color: '#ff6453',
        categories: ['animation', 'videos'], 
        description: "A BAYA Creative Learning é uma empresa educacional focada em aprendizagem criativa, que utiliza Design Thinking e metodologias ativas para desenvolver habilidades do século XXI em alunos, como colaboração, criatividade e pensamento crítico.",
        hasPage: true, 
        preview: { src: '/projects/Baya/Shapesmorph.mp4', type: 'video', speed: 1, start: 0.5 },
        media: [
            { type: 'video', src: '/projects/Baya/Shapesmorph.mp4', cols: 2, caption: "Morph de Shapes" },
            { type: 'video', src: '/projects/Baya/jornada.mp4', cols: 2, caption: "Jornada de Baya" },
            { type: 'video', src: '/projects/Baya/Lowerthird.mp4', cols: 1, caption: "Lowerthird" },
            { type: 'video', src: '/projects/Baya/Shapes.mp4', cols: 1, caption: "Shapes" },
        ]
    },
    { 
        id: 'vzion', 
        title: 'VZION', 
        categories: ['animation', 'videos', 'design'], 
        description: "A Vzion (se lê vision, do inglês) foi um pequeno negócio de videomaking que criei com meu amigo, Raphael Chung. Fizemos vídeos promocionais e animações para clientes variados (MiniDrinks | EngePro | Ejeq | Bruna Gazolla | Futegol | CoemJR | Estação Central). Criei a ideia e o design da logo e, nos trabalhos que fizemos, eu era repsonsável pela parte do motion (animações). Tudo que foi criado com a Vzion está incluso aqui no meu site, nos trabalhos que já fiz.",
        hasPage: true, 
        preview: { src: '/projects/Vzion/LogoAnim.mp4', type: 'video', speed: 1.4, start: 0 },
        previews: {
            design: { src: '/projects/Vzion/logo.jpg', type: 'image', speed: 1, start: 0 } 
        },
        media: [
            { type: 'image', src: '/projects/Vzion/logo_full.jpg', cols: 1, caption: 'Logo completa' },
            { type: 'image', src: '/projects/Vzion/logo_eye.jpg', cols: 1, caption: '"Olho" da logo' },
            { type: 'video', src: '/projects/Vzion/LogoAnim.mp4', cols: 1, caption: 'Animação de logo' },
            { type: 'video', src: '/projects/Vzion/Pilot.mp4', cols: 1, caption: 'Vídeo que criamos para divulgar nosso perfil' },
        ]
    },
    { 
        id: 'girartist', 
        title: 'GIRARTIST (me)', 
        color: '#A23DD4',
        categories: ['animation', 'design', 'videos'], 
        hasPage: true, 
        preview: { src: '/projects/LG-Girartist/anim2.mp4', type: 'video', speed: 1.0, start: 0 },
        previews: {
            design: { src: '/projects/LG-Girartist/logo4.png', type: 'image', transparent: true } 
        },
        media: [
            { type: 'image', src: '/projects/LG-Girartist/logo1.png', cols: 1, caption: 'Logo 1.0 (2019)' },
            { type: 'image', src: '/projects/LG-Girartist/logo2.png', cols: 1, caption: 'Logo 2.0 (2021)' },
            { type: 'image', src: '/projects/LG-Girartist/logo3.png', cols: 1, caption: 'Logo 3.0 (2023)' },
            { type: 'image', src: '/projects/LG-Girartist/logo4.png', cols: 1, caption: 'Logo 4.0 (2025)' },
            { type: 'video', src: '/projects/LG-Girartist/anim1.mp4', cols: 1, caption: 'Animação da logo (2019)' },
            { type: 'video', src: '/projects/LG-Girartist/anim2.mp4', cols: 1, caption: 'Animação da logo (2021)' },
            { type: 'video', src: '/projects/LG-Girartist/fiverrPromo.mp4', cols: 2, caption: 'Vídeo promocional para anúncio de freelance no Fiverr', controls: true, autoplay: false, muted: false },

        ]
    },
    { 
        id: 'kinetic-typography', 
        title: 'KINETIC TYPOGRAPHY', 
        link: {url: 'https://www.behance.net/gallery/115180035/Kinetic-Typography-RGB', label: 'BEHANCE'},
        categories: ['animation'], 
        hasPage: true, 
        preview: { src: '/projects/KineticTypo/OpenYourEyes.mp4', type: 'video', speed: 1, start: 0 },
        media: [
            { type: 'video', src: '/projects/KineticTypo/EscapeReality.mp4', cols: 2 },
            { type: 'video', src: '/projects/KineticTypo/HIDEAWAY.mp4', cols: 2 },
            { type: 'video', src: '/projects/KineticTypo/OpenYourEyes.mp4', cols: 2 },
        ]
    },
    { 
        id: 'elastic-type', 
        title: 'ELASTIC TYPE', 
        categories: ['animation'], 
        hasPage: true, 
        preview: { src: '/projects/ElasticTypo/1.mp4', type: 'video', speed: 1.6, start: 0 },
        media: [
            { type: 'video', src: '/projects/ElasticTypo/1.mp4', cols: 2 },
            { type: 'video', src: '/projects/ElasticTypo/2.mp4', cols: 2 },
            { type: 'video', src: '/projects/ElasticTypo/3.mp4', cols: 2 },
        ]
    },
    { 
        id: 'futegol', 
        title: 'FUTEGOL', 
        color: '#298333',
        categories: ['animation', 'videos'], 
        hasPage: true, 
        preview: { src: '/projects/Futegol/LogoAnim.mp4', type: 'video', speed: 1.3, start: 0 },
        media: [
            { type: 'video', src: '/projects/Futegol/LogoAnim.mp4', cols: 2, caption: 'Animação de logo' },
            { type: 'video', src: '/projects/Futegol/Promo.mp4', cols: 2, caption: 'Vídeo promocional' },
        ]
    },
    { 
        id: 'abelino', 
        title: 'ABELINO', 
        color: '#ffb305',
        categories: ['animation', 'videos', 'design'], 
        hasPage: true, 
        preview: { src: '/projects/Abelino/LogoAnim.mp4', type: 'video', speed: 1, start: 0.3 },
        previews: { 
            design: { src: '/projects/Abelino/Logo.jpg', type: 'image', speed: 1, start: 0 } 
        },
        media: [
            { type: 'image', src: '/projects/Abelino/Logo.jpg', cols: 2, caption: 'Criei essa logo para o vereador no ano anterior à campanha eleitoral' },
            { type: 'video', src: '/projects/Abelino/LogoAnim.mp4', cols: 2, caption: 'Animação da logo' },
            { type: 'video', src: '/projects/Abelino/PrestacaoContas.mp4', cols: 2, caption: 'Vídeo de prestação de contas' },
            { type: 'video', src: '/projects/Abelino/PrestacaoNumeros.mp4', cols: 2, caption: 'Vídeo de prestação de contas em números' },
            { type: 'image', src: '/projects/Abelino/NovembroAzul.jpg', cols: 2, caption: 'Um post dentre dezenas que criei enquanto trabalhei com o vereador' },
        ]
    },
    { 
        id: 'trilhas-do-saber', 
        title: 'TRILHAS DO SABER', 
        categories: ['animation'], 
        hasPage: false, 
        preview: { src: '/projects/ANIMAÇÕES/TrilhasDoSaber.mp4', type: 'video', speed: 1, start: 0.3 } 
    },
    { 
        id: 'coemjr', 
        title: 'COEMJR', 
        categories: ['animation'], 
        hasPage: true, 
        preview: { src: '/projects/CoemJR/1.mp4', type: 'video', speed: 1, start: 0.3 },
        media: [
            { type: 'video', src: '/projects/CoemJR/1.mp4', cols: 2 },
            { type: 'video', src: '/projects/CoemJR/2.mp4', cols: 2 },
        ]
    },
    { 
        id: 'estacao-central', 
        title: 'ESTAÇÃO CENTRAL', 
        categories: ['animation'], 
        hasPage: false, 
        preview: { src: '/projects/ANIMAÇÕES/EstacaoCentral.mp4', type: 'video', speed: 1.15, start: 0 } 
    },
    { 
        id: 'engepro', 
        title: 'ENGEPRO', 
        color: '#000094',
        categories: ['animation', 'videos'], 
        hasPage: true, 
        preview: { src: '/projects/Engepro/logoAnim.mp4', type: 'video', speed: 1.3, start: 0 },
        media: [
            { type: 'video', src: '/projects/Engepro/logoAnim.mp4', cols: 2, caption: 'Animação de logo',  },
            { type: 'video', src: '/projects/Engepro/impactar.mp4', cols: 2, caption: 'Vídeo promocional', controls: true, autoplay: true, muted: true},
            { type: 'video', src: '/projects/Engepro/psExpresso.mp4', cols: 2, caption: 'Vídeo promocial de processo seletivo',  },
        ]
    },
    { 
        id: 'ejeq', 
        title: 'EJEQ', 
        categories: ['videos'], 
        hasPage: false, 
        preview: { src: '/projects/ANIMAÇÕES/Ejeq-Cel.mp4', type: 'video', speed: 1.1, start: 0.2 },
    },
    { 
        id: 'escola-junior', 
        title: 'ESCOLA JÚNIOR', 
        color: '#c70039',
        categories: ['animation'], 
        hasPage: true, 
        preview: { src: '/projects/EscolaJunior/Loop.mp4', type: 'video', speed: 1, start: 0 },
        media: [
            { type: 'video', src: '/projects/EscolaJunior/Loop.mp4', cols: 2, caption: 'Animação de logo' },
            { type: 'video', src: '/projects/EscolaJunior/Short.mp4', cols: 1, caption: 'Animação de logo (versão mais curta)' },
            { type: 'video', src: '/projects/EscolaJunior/Shorter.mp4', cols: 1, caption: 'Animação de logo (versão mais curta ainda)' },
        ]
    },
    { 
        id: 'portfolio', 
        title: 'LUIGI GIRARDI' ,
        hasPage: false, 
        preview: { src: '/projects/DESIGNS/portfolio.png', type: 'image', speed: 1, start: 0 },
        categories: ['design', 'dev'],
    },
    { 
        id: 'nutriplan', 
        title: 'NUTRIPLAN', 
        color: '#8a5acd',
        description: nutriplanDesc,
        isMarkdown: true,
        categories: ['design', 'dev'], 
        link: {url: 'https://github.com/tcc-nutricao/nutriplan', label: 'GITHUB'},
        hasPage: true, 
        preview: { src: '/projects/Nutriplan/logo.png', type: 'video', speed: 1, start: 0 },
        media: [
            { type: 'image', src: '/projects/Nutriplan/logo.png', cols: 2, caption: 'Logo' },
            { type: 'image', src: '/projects/Nutriplan/1.png', cols: 1, caption: 'Página de Login' },
            { type: 'image', src: '/projects/Nutriplan/2.png', cols: 1, caption: 'Página de Cadastro' },
            { type: 'image', src: '/projects/Nutriplan/3.png', cols: 1, caption: 'Página de cadastro de dados pessoais' },
            { type: 'image', src: '/projects/Nutriplan/4.png', cols: 1, caption: 'Página de cadastro de dados pessoais' },
            { type: 'image', src: '/projects/Nutriplan/5.png', cols: 2, caption: 'Página de Diário Alimentar' },
            { type: 'image', src: '/projects/Nutriplan/6.png', cols: 2, caption: 'Página de progresso pessoal' },
            { type: 'image', src: '/projects/Nutriplan/7.png', cols: 2, caption: 'Página de receitas' },
            { type: 'image', src: '/projects/Nutriplan/8.png', cols: 2, caption: 'Página de grupos' },
            { type: 'image', src: '/projects/Nutriplan/9.png', cols: 2, caption: 'Página de pacientes' },
            { type: 'image', src: '/projects/Nutriplan/10.png', cols: 2, caption: 'Menu colapsado' },
        ]
    },
    { 
        id: 'gasto', 
        title: 'GAS.TO', 
        color: '#ebaf16',
        description: 'Gas.to é um aplicativo desenvolvido em React Native usando Expo para auxiliar no controle de consumo de combustível do seu carro, tanto na cidade quanto na estrada. Com ele, você pode calcular os gastos de uma viagem, dividir as despesas com outras pessoas e monitorar a eficiência do seu veículo. Fiz esse app pensando no uso para pessoas com carros que não fazem o cálculo de gasto de combustível automaticamente no painel do veículo.',
        categories: ['design', 'dev'], 
        link: {url: 'https://github.com/luigilg/Gas.to', label: 'GITHUB'},
        hasPage: true, 
        preview: { src: '/projects/Gasto/logo.png', type: 'image', speed: 1, start: 0 },
        media: [
            { type: 'image', src: '/projects/Gasto/logo.png', cols: 1, caption: 'Logo' },
            { type: 'image', src: '/projects/Gasto/1.png', cols: 1, caption: 'Página inicial. Nela são mostrados os consumos, urbano e de estrada. É possível visualizar o valor do litro e dia do registro.' },
            { type: 'image', src: '/projects/Gasto/2.png', cols: 1, caption: 'Página de nova medição. Caso não tenha o consumo já medido, para realizar uma medição ideal, deve-se primordialmente encher o tanque do carro e anotar a quilometragem nesse ponto. Então, depois de andar com o carro, deve-se encher o tanque novamente, anotando a quilometragem e quantos litros foram abastecidos. Também deve ser anotado o valor do litro abastecido.' },
            { type: 'image', src: '/projects/Gasto/3.png', cols: 1, caption: 'Página de cálculo de gasto de combustível para viagem. É possível incluir ida e volta ao cálculo, e também é possível dividir o valor da viagem equivalentemente entre até 5 pessoas. Informa-se a quantidade de pessoas a dividir o valor de consumo (podendo ser x pessoas na ida e y pessoas na volta). Depois é informada a distância da viagem, do ponto de saída e de destino. Pode-se usar o valor do litro que já foi salvo em uma medição antiga, ou informar um valor de litro diferente. O consumo já vem diretamente da última medição feita para o consumo de combustível na estrada. Por fim, é informado o valor total de gasto e o valor por pessoa (mostrando ida e volta caso tenha).' },
        ]
    },
    { 
        id: 'bantads', 
        title: 'BANTADS', 
        color: '#f98316',
        description: bantadsDesc,
        isMarkdown: true,
        link: {url: 'https://github.com/duddanelly/trabalho-DAC', label: 'GITHUB'},
        categories: ['design', 'dev'], 
        hasPage: true, 
        preview: { src: '/projects/Bantads/logo.png', type: 'image', speed: 1, start: 0 },
        media: [
            { type: 'image', src: '/projects/Bantads/logo.png', cols: 2, caption: 'Logo' },
            { type: 'image', src: '/projects/Bantads/3.png', cols: 2, caption: 'Página de Cadastro' },
            { type: 'image', src: '/projects/Bantads/2.png', cols: 2, caption: 'Página de Login' },
            { type: 'image', src: '/projects/Bantads/1.png', cols: 2, caption: 'Página Inicial (Dashboard)' },
            { type: 'image', src: '/projects/Bantads/4.png', cols: 2, caption: 'Página de Extrato do Cliente'},
            { type: 'image', src: '/projects/Bantads/9.png', cols: 2, caption: 'Página Inicial do Administrador'},
            { type: 'image', src: '/projects/Bantads/10.png', cols: 2, caption: 'Página de gerentes do administrador' },
            { type: 'image', src: '/projects/Bantads/5.png', cols: 2, caption: 'Página Inicial do Gerente'},
            { type: 'image', src: '/projects/Bantads/6.png', cols: 2, caption: 'Página de Clientes do Gerente'},
            { type: 'image', src: '/projects/Bantads/7.png', cols: 2, caption: 'Página de dados do cliente'},
            { type: 'image', src: '/projects/Bantads/8.png', cols: 2, caption: 'Página de melhores clientes'},
        ]
    },
    { 
        id: 'wallpapers', 
        title: 'WALLPAPERS', 
        categories: ['animation', 'design'], 
        hasPage: true, 
        preview: { src: '/projects/Wallpapers/Redhex.mp4', type: 'video', speed: 1, start: 0 },
        previews: {
            design: { src: '/projects/Wallpapers/AttackingDominance.jpg', type: 'image', speed: 1, start: 0 } 
        },
        media: [
            { type: 'video', src: '/projects/Wallpapers/Redhex.mp4', cols: 2, caption: '' },
            { type: 'video', src: '/projects/Wallpapers/TANLINES.mp4', cols: 2, caption: '' },
            { type: 'video', src: '/projects/Wallpapers/BEVEL.mp4', cols: 2, caption: '' },
            { type: 'image', src: '/projects/Wallpapers/AttackingDominance.jpg', cols: 2, caption: 'Nesse wallpaper usei um efeito chamado pixel sorting' },
            { type: 'image', src: '/projects/Wallpapers/ConvergingForces.jpg', cols: 2, caption: 'Nesse wallpaper usei um efeito chamado pixel sorting' },
            { type: 'image', src: '/projects/Wallpapers/GravityBlue.png', cols: 1, caption: 'Feito para iPhone 12' },
            { type: 'image', src: '/projects/Wallpapers/GravityBlue-H.png', cols: 1, caption: 'Feito para iPhone 12' },
            { type: 'image', src: '/projects/Wallpapers/OFF-BLUE.png', cols: 1, caption: 'Feito para iPhone 12' },
            { type: 'image', src: '/projects/Wallpapers/OFF-HOLO.png', cols: 1, caption: 'Feito para iPhone 12' },
            { type: 'image', src: '/projects/Wallpapers/OFF-WHITE-H.png', cols: 1, caption: 'Feito para iPhone 12' },
            { type: 'image', src: '/projects/Wallpapers/OFF-WHITE.png', cols: 1, caption: 'Feito para iPhone 12' },
            { type: 'image', src: '/projects/Wallpapers/GravityGreen.png', cols: 1, caption: 'Feito para iPhone 12' },
        ]
    },
    { 
        id: 'psangelina', 
        title: 'HOSPITAL ANGELINA C.', 
        categories: ['animation', 'videos'], 
        hasPage: false, 
        preview: { src: '/projects/ANIMAÇÕES/PS-Angelina-Caron.mp4', type: 'video', speed: 1, start: 0 } 
    },
    { 
        id: 'kutassy-eng', 
        title: 'KUTASSY ENG', 
        categories: ['animation'], 
        hasPage: false, 
        preview: { src: '/projects/ANIMAÇÕES/Kutassy.mp4', type: 'video', speed: 1, start: 0 } 
    },
    { 
        id: 'emjel', 
        title: 'EMJEL', 
        color: '#005dac',
        categories: ['animation'], 
        hasPage: true, 
        preview: { src: '/projects/Emjel/Main.mp4', type: 'video', speed: 1, start: 0 },
        media: [
            { type: 'video', src: '/projects/Emjel/Main.mp4', cols: 2 },
            { type: 'video', src: '/projects/Emjel/id2.mp4', cols: 2 },
            { type: 'video', src: '/projects/Emjel/id3.mp4', cols: 2 },
        ]
    },
    { 
        id: 'bruna-gazolla', 
        title: 'BRUNA GAZOLLA', 
        color: '#cc27a5',
        categories: ['animation', 'videos'], 
        hasPage: true, 
        preview: { src: '/projects/BrunaGaz/Intro.mp4', type: 'video', speed: 1, start: 0 },
        media: [
            { type: 'video', src: '/projects/BrunaGaz/Reels.mp4', cols: 2, caption: 'Criei todos os efeitos desse Reels com base na ideia da Bruna: uma versão vilã de si mesma fazê-la desaparecer com poderes mágicos. Usei unicamente Adobe After Effects com alguns plugins.' },
            { type: 'video', src: '/projects/BrunaGaz/arrecadação2min.mp4', cols: 2, caption: 'Nesse vídeo de arrecadação dela, criei a intro e todos os conteúdos animados presentes no vídeo.' },
        ]
    },
    { 
        id: 'dehall', 
        title: 'DEHALL', 
        categories: ['animation'], 
        hasPage: false, 
        preview: { src: '/projects/ANIMAÇÕES/dehall.mp4', type: 'video', speed: 1, start: 0 } 
    },
    { 
        id: 'arassaem', 
        title: 'ARASSAEM', 
        categories: ['animation'], 
        hasPage: false, 
        preview: { src: '/projects/ANIMAÇÕES/Arassaem.mp4', type: 'video', speed: 1, start: 0 } 
    },
    { 
        id: 'chung-responde', 
        title: 'CHUNG RESPONDE', 
        categories: ['animation'], 
        hasPage: false, 
        preview: { src: '/projects/ANIMAÇÕES/ChungRespondeDemo.mp4', type: 'video', speed: 1, start: 1.6 } 
    },
    { 
        id: 'lune', 
        title: 'LUNE', 
        categories: ['animation'], 
        hasPage: false, 
        preview: { src: '/projects/ANIMAÇÕES/Lune.mp4', type: 'video', speed: 1.3, start: 0.4 } 
    },
    { 
        id: 'hc-paint', 
        title: 'HC PAINT', 
        categories: ['animation'], 
        hasPage: false, 
        preview: { src: '/projects/ANIMAÇÕES/HC-Paint.mp4', type: 'video', speed: 1.2, start: 0 } 
    },
    { 
        id: 'law-arquitetura', 
        title: 'LAW ARQUITETURA', 
        categories: ['animation'], 
        hasPage: false, 
        preview: { src: '/projects/ANIMAÇÕES/SL-Arq.mp4', type: 'video', speed: 1, start: 0 } 
    },
    {
        id: 'alinepiva',
        title: 'ALINE PIVA',
        color: '#d79e8a',
        categories: ['design'],
        hasPage: true,
        preview: { src: '/projects/AlinePiva/LOGO T3 - AP.png', type: 'image', transparent: true },
        media: [
            { type: 'image', src: '/projects/AlinePiva/LOGO T3 - AP.png', cols: 2 },
            { type: 'image', src: '/projects/AlinePiva/LOGO 2 - HORIZONTAL.jpg', cols: 2 },
            { type: 'image', src: '/projects/AlinePiva/CARTÃO VISITA - FRENTE.png', cols: 1 },
            { type: 'image', src: '/projects/AlinePiva/CARTAO VISITA - VERSO.png', cols: 1 },
            { type: 'image', src: '/projects/AlinePiva/MOCKUP 1.jpg', cols: 1 },
            { type: 'image', src: '/projects/AlinePiva/MOCKUP 2.jpg', cols: 1 },
        ]
    },
    {
        id: 'squirrel',
        title: 'SQUIRREL',
        color: '#d95d39',
        categories: ['design'],
        hasPage: true,
        preview: { src: '/projects/Squirrel/horizontal1.jpg', type: 'image' },
        media: [
            { type: 'image', src: '/projects/Squirrel/horizontal1.jpg', cols: 1 },
            { type: 'image', src: '/projects/Squirrel/horizontal2_slogan.jpg', cols: 1 },
            { type: 'image', src: '/projects/Squirrel/vertical1_slogan.jpg', cols: 1 },
            { type: 'image', src: '/projects/Squirrel/vertical2.jpg', cols: 1 },
        ]
    },
    {
        id: 'damanda',
        title: 'DAMANDA DOCES',
        color: '#973335',
        categories: ['design'],
        hasPage: true,
        preview: { src: '/projects/Damanda/Damanda.jpg', type: 'image', speed: 1, start: 0 },
        media: [
            { type: 'image', src: '/projects/Damanda/Damanda.jpg', cols: 1 },
            { type: 'image', src: '/projects/Damanda/Damanda Natal.jpg', cols: 1 },
            { type: 'image', src: '/projects/Damanda/Damanda D.png', cols: 2 },
        ]
    },
    {
        id: 'kvpalestra',
        title: 'KV PALESTRA',
        categories: ['design'],
        hasPage: false,
        preview: { src: '/projects/DESIGNS/Formato POST.jpg', type: 'image', speed: 1, start: 0 },
    },
    {
        id: 'sp',
        title: 'SP FISIOTERAPIA',
        categories: ['design'],
        hasPage: false,
        preview: { src: '/projects/DESIGNS/SP.jpg', type: 'image', speed: 1, start: 0 },
    },
    {
        id: 'rotina',
        title: 'ROTINA',
        description: 'Rotina é um web app de organização de rotina diária, que divide os dias da semana em blocos de 10 minutos, podendo atribuir atividades customizadas em cada bloco. Desenvolvi com HTML, CSS e JavaScript puros, usei um arquivo em nuvem para guardar rotinas e publiquei usando Netlify. Criei esse app para praticar e aprender mais sobre desenvolvimento web, mas principalmente por necessidade de um sistema para organizar cada momento da minha rotina. Esse web app está disponível para uso, basta acessar o link no topo direito da página!',
        color: '#000000',
        link: {url: 'https://rotina10.netlify.app/', label: 'ACESSE!'},
        categories: ['dev'],
        hasPage: true,
        preview: { src: '/projects/Rotina/1.PNG', type: 'image', speed: 1, start: 0 },
        media: [
            { type: 'image', src: '/projects/Rotina/1.PNG', cols: 1, caption: 'Visão padrão do site. Na visão aparecem os blocos de 10 minutos do dia, indo das 05:00 até 23:50. Podem ser selecionados e customizados os dias da semana de segunda a sábado.' },
            { type: 'image', src: '/projects/Rotina/5.PNG', cols: 1, caption: 'Aqui é possível ver a visualização de blocos durante o dia, mostrando um círculo de fundo cheio nos blocos de horários que já passaram, apenas o contorno do círculo nos blocos que ainda acontecerão, e o bloco atual destacado com um brilho.' },
            { type: 'image', src: '/projects/Rotina/2.PNG', cols: 1, caption: 'Essa é a barra do topo, que mostra o nome do app e o nome do usuário carregado. À direita, é mostrada a atividade do bloco de horário atual da rotina.' },
            { type: 'image', src: '/projects/Rotina/3.PNG', cols: 1, caption: "Essa é a barra de input do nome de 'usuário' ou rotina, para salvar ou carregar os dados da rotina na nuvem, mas de forma simples e aberta, sem nenhuma autenticação. É informado apenas o nome da rotina (ou 'usuário') a ser carregada e, caso exista rotina com o texto informado, ela é carregada." },
            { type: 'image', src: '/projects/Rotina/4.PNG', cols: 1, caption: 'Nessa tela é possível ver que os blocos das 20h estão selecionados (contém um contorno branco com brilho). É possível selecionar vários blocos e, para facilitar a seleção múltipla, pode-se clicar no horário à esquerda, que todos os 6 blocos dessa hora são selecionados.' },
            { type: 'image', src: '/projects/Rotina/6.PNG', cols: 1, caption: "Após selecionar blocos e clicar em 'Atribuir', abre-se um modal para escolher a atividade (dentre as atividades criadas pelo usuário) para os blocos selecionados. É possível clicar em 'Nova Atividade' para abrir o modal de gerenciamento de atividades." },
            { type: 'image', src: '/projects/Rotina/7.PNG', cols: 1, caption: "Esse é o modal de gerenciamento de atividades, que permite criar, editar, excluir e reposicionar atividades. É possível atribuir um nome, uma cor e um emoji para uma atividade." },
            { type: 'image', src: '/projects/Rotina/8.PNG', cols: 1, caption: 'Aqui é mostrado o modal de cópia de blocos de um dia, para o dia atual. Pode-se selecionar qualquer dia da semana para copiar e substituir todos os blocos de atividade.' },
        ]
    },
    {
        id: 'mmtads',
        title: 'MM TADS',
        description: 'Sistema de gerenciamento de manutenções de equipamentos, que foi criado para uma matéria da faculdade. Nesse sistema é possível, como cliente, criar uma conta para solicitar manutenções de equipamentos diversos, aprovar ou rejeitar orçamentos de conserto, acompanhar o status e confirmar pagamento de manutenções. Já como funcionário, é possível visualizar as solicitações de manutenções; criar orçamentos de conserto; aprovar ou rejeitar manutenções; redirecionar manutenções para outro funcionário; acompanhar o status; gerenciar categorias de equipamentos; gerenciar funcionários; emitir relatórios de manutenções por data ou por categoria. Fui responsável por toda a parte de design do sistema, e atuei em grande parte desenvolvimento do front-end e back-end.',
        color: '#2b83c9',
        link: {url: 'https://github.com/PAFONTINHAS/Trabalho-Pratico-WEB-II', label: 'GITHUB'},
        categories: ['dev'],
        hasPage: true,
        preview: { src: '/projects/MMTads/logo.png', type: 'image', speed: 1, start: 0 },
        media: [
            { type: 'image', src: '/projects/MMTads/logo.png', cols: 2, caption: 'Logo do sistema' },
            { type: 'image', src: '/projects/MMTads/1.png', cols: 2, caption: 'Página de Login' },
            { type: 'image', src: '/projects/MMTads/2.png', cols: 2, caption: 'Página de Autocadastro' },
            { type: 'image', src: '/projects/MMTads/3.png', cols: 2, caption: '(CLIENTE) Página Inicial' },
            { type: 'image', src: '/projects/MMTads/4.png', cols: 2, caption: '(CLIENTE) Detalhes de uma solicitação' },
            { type: 'image', src: '/projects/MMTads/5.png', cols: 2, caption: '(CLIENTE) Página de solicitação de manutenções' },
            { type: 'image', src: '/projects/MMTads/6.png', cols: 2, caption: '(FUNCIONÁRIO) Página Inicial: mostra apenas as solicitações em aberto' },
            { type: 'image', src: '/projects/MMTads/7.png', cols: 2, caption: '(FUNCIONÁRIO) Página de Solicitações: mostra todas as solicitações' },
            { type: 'image', src: '/projects/MMTads/8.png', cols: 2, caption: '(FUNCIONÁRIO) Detalhes de uma solicitação. Nesse caso, um valor de orçamento é informado.' },
            { type: 'image', src: '/projects/MMTads/9.png', cols: 2, caption: '(FUNCIONÁRIO) Página de Administração' },
            { type: 'image', src: '/projects/MMTads/10.png', cols: 2, caption: '(FUNCIONÁRIO) Página de Gerenciamento de Funcionários' },
            { type: 'image', src: '/projects/MMTads/11.png', cols: 2, caption: '(FUNCIONÁRIO) Página de Relatórios' },
        ]
    },
    {
        id: 'mercado',
        title: 'SUPERMERCADO',
        description: 'Esse é um sistema web extremamente simples de gerenciamento de funcionários e departamentos de um mercado, que foi criado para uma matéria da faculdade. Nesse sistema é possível gerenciar (CRUD: criar, listar, editar e apagar) departamentos e funcionários de um mercado. Foi feito com com HTML, CSS e JavaScript puro, com o uso do nodemon para facilitar a atualização da página e o uso de um banco de dados local com MySQL.',
        color: '#945b9a',
        categories: ['dev'],
        hasPage: true,
        preview: { src: '/projects/Supermercado/logo.png', type: 'image', transparent: true },
        media: [
            { type: 'image', src: '/projects/Supermercado/1.png', cols: 2, caption: 'Página de Funcionários' },
            { type: 'image', src: '/projects/Supermercado/2.png', cols: 2, caption: 'Página de Departamentos' },
            { type: 'image', src: '/projects/Supermercado/3.png', cols: 2, caption: 'Página de Cadastro de Funcionário' },
            { type: 'image', src: '/projects/Supermercado/4.png', cols: 2, caption: 'Página de Edição de Funcionário' },
            { type: 'image', src: '/projects/Supermercado/5.png', cols: 2, caption: 'Página de Detalhes do Funcionário' },
            { type: 'image', src: '/projects/Supermercado/6.png', cols: 2, caption: 'Modal padrão de confirmação de remoção' },
        ]
    },
    
];
