# BigData-Engsoft31

---

Trabalho final da disciplina de Bigdata do curso de Engenharia de Software/UFRJ, turma 31.

(Prof. Alexandre A. B. Lima)

---

Neste trabalho utilizamos um _Dataset_ do jogo FIFA 18 com todos os jogadores.

Utilizando a ferramenta _**Apache Spark**_ para leitura do arquivo _fifa18.csv_ contendo todos os dados, filtrar e gerar um arquivo no formato _json_ resultando com os 80 primeiros jogadores levando em conta seus atributos de _overall_ e _eur_value_, ou seja seu desempenho e o valor do jogador no mercado.

---

- Pré Requisitos
    -
    - NodeJS
    - Apache Spark 2.2.1


- Apache Spark
    -
    - Utilizando o _Apache Spark_ versão 2.2.1, no terminal do Linux, executamos o arquivo _"fifa.scala"_ para gerar o arquivo _json_ resultado   
    - Este arquivo é então levado para uso na ferramenta seguinte para visualização


- React.JS
    -
    - Para rodar o arquivo, deve-se executar:
    ```npm install``` e depois ```npm start```. O navegador irá abrir normalmente com a lista de jogadores.
    