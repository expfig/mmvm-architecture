# MVVM (Model View ViewModel - A Arquitetura de Apps Mobile)

1 View -> Responsável por representa os componentes da interface do usuário, então ela fica responsavel por renderizar os dados que vem da Model na interface do usuário apartir da ViewModel

2 ViewModal -> ViewModal responsável por manter todos os estados da sua tela ou componente e ativar os eventos na View atraves de comando e DataBinding ela que faz a ponte com o model e carregar a logica da aplicação

3 ->

## PATTERN DE COMPOSIÇÃO

## ANTE PARTENS

camada de domain -> responsavel por tratar regra de negocio da aplicação
use-cases
models
errors

camada de data -> responsavel por tratar respostas e errors da api, interfaces
erros
interface

camada da infra -> responsavel por tratar conexção com apis externas
http
cache

camada da pesentation -> responsavel por tratar os dados e mostrar para o usuário final
view
viewModel
validation

validation -> responsavel por tratar  validações
email
password
