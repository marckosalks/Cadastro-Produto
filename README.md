# Para devs interessados em Angula! 🅰️ 👾

https://www.udemy.com/course/angular-9-essencial/

##  O que é o angular ? 🅰️

É um framework da google usado para construir Spa
baseado em components.

Angular.js é a primeira versão do angular(versão antiga)

CLI - comand line interface


## --> Comandos 👩🏾‍🚀


INSTALAR

npm i -g @angular/cliD

## CRIAR PROJETO

ng new  minha-primeira-app


## --> Arvove de components 🌲

O componente App que seria o pai de todos chama os demais 
components dentro dele, tambem podemos usar um componente
filho que se comporta como componente pai e chama os demais
components dentro deles.


## --> Conceitos essencias do angular 🟩🟨🟥📖

Componente: Pedaço de codigo que pode ser reutilizado,pode ser
representado como um pedaço da tela, mas para nos codificadores
uma pasta com arquivos: html, css e typescript

Modulos: voce tem um modulo que dentro dele contem componentes
mas para cada modulo voce so pode guardar arquivos especificos.
Todos os components são referenciados pelo app

### Dentro do modulo nos temos:

-Declarations: components, diretivas, pipes (declarar components fazem parte do modulo)
-Exports: components, diretivas, pipes (visiveis para outros modulos)
-Imports: Module A, Module B, Module C (outros modulos que voce for usar)
-Providers: sercice A, sercice B, sercices C ()
-BootStrap: App components

### Instalando Material-Design

ng add @angular/material

Pode colocar tudo como Y, e escolha qual tema voce 
deseja.

### Gerar componente novo 

ng generate component components/template [Nome do componente] 

ou 

ng g c [Nome do componente] 


A parte do material é praticamente usar html e css e adionar as classes e propriedades do Angular material, Bem tranquilo 🤠.

### Roteamento 🪢 
  
Em relação as rotas não é dificil, vamos precisar das funções nativas  do angular,

-Routes array que recebe dois obj :

path (caminho da rota sem a barra)
component (importe o camponente que voce deseja acessar)

Porem fazemos isso dentro do menu de navegação ou direto no AppComoponent

depois basta usar o routerLink"/" com a rota para a
pagina desejada. E para a navegação usamos o router-outlet

Routes configura ele uma vez só, o resto voce importa apenas o routerLink para as demais paginas.

### Diretivas 

Diretivas estruturais (modificar o dom, add ou removendo) tem um * na frente

Diretivas Atributo (css e comportamento js)

### Property Binding()

acessar variaveis dentro do HTML

<table
      [dataSource]="products">
</table>


### Decorator

@Component({

})

@Injectable({
  
})

@Directive({

})

### Event Binding 

Ligar evento html a um metodo TS

<button (click)="createProduct()">
</button>


### One Way Data Binding

sentido único do ts para o html
prenche um valor no input e esse valor é salvo em uma varivel 

<input [value]="nome">


### Two Way Data Binding

duplo sentido ou seja do ts para o HTML mas tambem do
HTML para o ts

<input [(ngModel)]="nome">


Pipes é o tal do double Stach

<p>
  O vencimento é 
  {{  product.price | currency: 'BRL' | Channing }}
</p>


### Programação reativa 

Algo que esta indo verificando se tem algo pra fazer
caso sim ele executa e volta a esperar, se não ele
espera depois e pergunta se tem algo para fazer novamente

### Observer

Padão orientaddo a Evento 

-observer
-subject
-event


Callback(função por parametro para outra função )

Promises (promesa de que algo, sera executado, encadeamento de chamadas)

Observables ( Reutilizavel, Stream de dados, operadores funções para os dados )

### Services

Classes que organizam e compartilham metodos e 
dados entre componentes
0
separar reponsabilidades da aplicação 
exemplo metodos da aplicação 

Viabilizar informações entre componentes
consjunto querente de funcionalidades dentro 
do service

comando para criar um : 

ng g s services/product


### Injeção de dependencias

É uma padrão em que a classe recebe dependencias
de fontes externas ao invés de criar as próprias

Angular cria a injeção de dependencias pra gente 

singletons (unica instancia)

injector

modulo @NgModule
elemento @Injectable


### Entendendo Directivas

-Comando pára criar diretivas

ng g d directives/blue


### Bindings 
(ligação de evento )

o evento de click no angular, podemos incluir apenas o atributo (click)="funcao()" 

ou para alterar o valor de um elemento

### Injeção de dependencias no angular
 usamos  o router como tipagem 
 usamos na rota a injeção de depencia 
 fazendo o angular criar pra nos o parametro
 de rota que precisavamos 

 Rever novamente pelo Youtube 

 -Injeção de Dependências
 -Rotas
 -Diretivas
 -Binding

 Para usarmos os atributos criados, basta usar a 
palavra this 


### Criando nossa classe 

criamos um type especifico para cadastrar um produto

### Usando Services em nosso programa

para manter nosso software limpo e o mais "magro" possivel, vamos separar a parte logica do estilo
então componentes serao meramente ilustrativos.

Requisições para api ou consumo de dados seram
feitos dentro do nosso service.

inportação de services vão dentro do array provides

### Atualizações angular 17

Quando fazer o post ao inves de usar o HttpModule usar o provideHttpClient()
assim podemos usar o http para fazermos nossas requisições