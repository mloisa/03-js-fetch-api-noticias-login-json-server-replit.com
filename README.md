# 03-js-fetch-api-noticias-login-json-server-replit.com

bd.json:
```json
{
    "usuarios": [
        {"id": "0", "nome": "admin", "senha": "admin", "email": "admin@email.com"},
        {"id": "1", "nome": "Ana", "senha": "ana", "email": "ana@email.com"},
        {"id": "2", "nome": "Bruno", "senha": "bruno", "email": "bruno@email.com"}
    ],
    "noticias": [
        {
            "id": "0",
            "titulo": "Transporte Público em Belo Horizonte",
            "descricao": "O transporte público em BH é composto por um extenso sistema de ônibus urbanos.",
            "conteudo": "O transporte público em BH é composto por um extenso sistema de ônibus urbanos, gerido pela BHTRANS, e pelo Metrô BH, que opera na região metropolitana. Para utilizar os serviços, você pode adquirir o Cartão BHBUS, que permite recargas via dinheiro, Pix ou boleto, diretamente nos pontos ou pelo aplicativo BHBus+. O aplicativo oferece funcionalidades como rastreamento de veículos em tempo real e cálculo de rotas.",
            "categoria": "Transporte",
            "autor": "Ana Clara Pereira",
            "data": "26/09/2025",
            "imagem": "./assets/imagem/transporte-publico.png"
        },
        {
            "id": "1",
            "titulo": "Tecnologia 6G",
            "descricao": "A Tecnologia 6G é a Próxima Geração de Redes Móveis",
            "conteudo": "A tecnologia 6G é a próxima geração de redes móveis, ainda em desenvolvimento, que sucederá o 5G. Prevista para ser lançada comercialmente por volta de 2030, a 6G promete uma revolução na conectividade, com velocidades muito superiores, latência quase instantânea e integração massiva de inteligência artificial (IA).",
            "categoria": "Tecnologia",
            "autor": "Bruno Costa e Silva",
            "data": "25/09/2025",
            "imagem": "./assets/imagem/tecnologia-6g.png"
        },
        {
            "id": "2",
            "titulo": "Festival de Música de Belo Horizonte",
            "descricao": "Belo Horizonte tem Vários Festivais de Música",
            "conteudo": "Belo Horizonte tem vários festivais de música, como o Festival Planeta Brasil, que é o maior da cidade, e a Virada Cultural, um evento gratuito de 24 horas focado em diversidade artística. Também existem festivais temáticos, como o Épop BH para música pop autoral e o Festival Alvoroço, focado em música brasileira em formato acústico e intimista.",
            "categoria": "Cultura",
            "autor": "Carla Vieira Grossi",
            "data": "24/09/2025",
            "imagem": "./assets/imagem/festival-de-musica.png"
        }
    ]
}
```

```bash
npm intall -g json-server
```

```bash
json-server --version
```

```bash
json-server --watch db/db.json --port 3000
```

# Exercícios

1) Criar a página de cadastro de usuário.

2) Alterar a função lerUsuario(), para que ela seja executada com o verbo POST do protocolo HTTP.

3) Aplicar estilos CSS nas páginas de login e cadastro de usuário.