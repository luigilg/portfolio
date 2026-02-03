O Bantads é um sistema bancário, desenvolvido para a disciplina de Desenvolvimento de Aplicações Corporativas. O projeto foi construído utilizando uma arquitetura de microsserviços para garantir escalabilidade modular e manutenção independente. Nesse projeto **fui responsável pelo design da logo e de todas as telas do sistema**. Participei de todo o desenvolvimento com mais 5 colegas durante a duração da disciplina.

## Arquitetura do Sistema
### Microsserviços
O sistema é composto por 4 serviços principais, todos implementados em **Spring Boot**:
- **Conta**: Gerenciamento de contas bancárias e saldos.
- **Cliente**: Gestão de dados pessoais e cadastro de clientes.
- **Gerente**: Administração e operações de gerentes.
- **Auth**: Serviço de autenticação e autorização.

### Orquestração e Integração
- **Saga Orchestrator**: Implementamos o padrão Saga para garantir a consistência dos dados entre os serviços distribuídos, coordenando transações complexas que abrangem múltiplos microsserviços.
- **API Gateway**: Atua como ponto de entrada único para o sistema, gerenciando o roteamento de requisições, balanceamento de carga e segurança.
- **RabbitMQ**: Utilizado para comunicação assíncrona entre os serviços, garantindo desacoplamento e resiliência.

### Frontend
A interface do usuário foi desenvolvida em **Angular**, oferecendo uma experiência fluida e responsiva para clientes e administradores interagirem com o sistema bancário.