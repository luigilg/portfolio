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
            { type: 'video', src: '/projects/Conversu/ReelsAtendimento.mp4', cols: 1, caption: 'Atendimento - Reels', controls: true, autoplay: true, muted: true },
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
        description: "A Vzion (se lê vision, do inglês) foi um pequeno negócio de videomaking que criei com meu amigo, Raphael Chung. Fizemos vídeos promocionais e animações para clientes variados (MiniDrinks | EngePro | Ejeq | Bruna Gazolla | Futegol | CoemJR | Estação Central). Tudo que foi criado com a Vzion está incluso aqui no meu site, nos trabalhos que já fiz.",
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
        preview: { src: '/projects/CoemJr/1.mp4', type: 'video', speed: 1, start: 0.3 },
        media: [
            { type: 'video', src: '/projects/CoemJr/1.mp4', cols: 2 },
            { type: 'video', src: '/projects/CoemJr/2.mp4', cols: 2 },
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
        preview: { src: '/projects/Engepro/LogoAnim.mp4', type: 'video', speed: 1.3, start: 0 },
        media: [
            { type: 'video', src: '/projects/Engepro/LogoAnim.mp4', cols: 2, caption: 'Animação de logo',  },
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
        id: 'nutriplan', 
        title: 'NUTRIPLAN', 
        color: '#8a5acd',
        categories: ['design', 'dev'], 
        hasPage: true, 
        preview: { src: '/projects/Nutriplan/logo.png', type: 'video', speed: 1, start: 0 },
        media: [
            { type: 'image', src: '/projects/Nutriplan/logo.png', cols: 2, caption: 'Logo' },
            { type: 'image', src: '/projects/Nutriplan/1.png', cols: 1, caption: 'Página de Login' },
            { type: 'image', src: '/projects/Nutriplan/2.png', cols: 1, caption: 'Página de Cadastro' },
            { type: 'image', src: '/projects/Nutriplan/3.png', cols: 1, caption: 'Página de cadastro de dados pessoais' },
            { type: 'image', src: '/projects/Nutriplan/4.png', cols: 1, caption: 'Página de cadastro de dados pessoais' },
            { type: 'image', src: '/projects/Nutriplan/5.png', cols: 1, caption: 'Página de Diário Alimentar' },
            { type: 'image', src: '/projects/Nutriplan/6.png', cols: 1, caption: 'Página de progresso pessoal' },
            { type: 'image', src: '/projects/Nutriplan/7.png', cols: 1, caption: 'Página de receitas' },
            { type: 'image', src: '/projects/Nutriplan/8.png', cols: 1, caption: 'Página de grupos' },
            { type: 'image', src: '/projects/Nutriplan/9.png', cols: 1, caption: 'Página de pacientes' },
            { type: 'image', src: '/projects/Nutriplan/10.png', cols: 1, caption: 'Menu colapsado' },
        ]
    },
    { 
        id: 'bantads', 
        title: 'BANTADS', 
        color: '#f98316',
        categories: ['design', 'dev'], 
        hasPage: true, 
        preview: { src: '/projects/Bantads/logo.png', type: 'video', speed: 1, start: 0 },
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
        hasPage: true, 
        preview: { src: '/projects/ANIMAÇÕES/DeHall.mp4', type: 'video', speed: 1, start: 0 } 
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
    
];
