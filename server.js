const express = require('express');
const nunjucks = require('nunjucks');
const cards = require('./data');
const cards2 = require('./data2');

const server = express();

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure('views', {
    express: server
});

server.get("/", function (req, res) {
    const dadosHome = {
        title_home: "Foodfy - Home",
        h1_wrapper: "As melhores receitas",
        p_wrapper: "Aprenda a contruir os melhores pratos com receitas criadas por profissionais do mundo inteiro.",
        img_wrapper: "assets/chef.png",
        alt_wrapper: "Foto Chef",
        p_accessed: "Mais acessadas"
    }

    return res.render("home", { item: dadosHome, card: cards });
});

server.get("/sobre", function (req, res) {
    const dadosSobre = {
        title_sobre: "Foodfy - Sobre",
        h1_sobre: "Sobre o Foodfy",
        p_sobre: "Suspendisse placerat neque neque. Morbi dictum nulla non sapien rhoncus, et mattis erat commodo. Aliquam vel lacus a justo mollis luctus. Proin vel auctor eros, sed eleifend nunc. Curabitur eget tincidunt risus. Mauris malesuada facilisis magna, vitae volutpat sapien tristique eu. Morbi metus nunc, interdum in erat placerat, aliquam iaculis massa. Duis vulputate varius justo pharetra maximus. In vehicula enim nec nibh porta tincidunt. Vestibulum at ultrices turpis, non dictum metus. Vivamus ligula ex, semper vitae eros ut, euismod convallis augue.",
        p2_sobre: "Fusce nec pulvinar nunc. Duis porttitor tincidunt accumsan. Quisque pulvinar mollis ipsum ut accumsan. Proin ligula lectus, rutrum vel nisl quis, efficitur porttitor nisl. Morbi ut accumsan felis, eu ultrices lacus. Integer in tincidunt arcu, et posuere ligula. Morbi cursus facilisis feugiat. Praesent euismod nec nisl at accumsan. Donec libero neque, vulputate semper orci et, malesuada sodales eros. Nunc ut nulla faucibus enim ultricies euismod.",
        h1_comeco: "Como tudo começou…",
        p_comeco: "Suspendisse placerat neque neque. Morbi dictum nulla non sapien rhoncus, et mattis erat commodo. Aliquam vel lacus a justo mollis luctus. Proin vel auctor eros, sed eleifend nunc. Curabitur eget tincidunt risus. Mauris malesuada facilisis magna, vitae volutpat sapien tristique eu. Morbi metus nunc, interdum in erat placerat, aliquam iaculis massa. Duis vulputate varius justo pharetra maximus. In vehicula enim nec nibh porta tincidunt. Vestibulum at ultrices turpis, non dictum metus. Vivamus ligula ex, semper vitae eros ut, euismod convallis augue.",
        p2_comeco: "Fusce nec pulvinar nunc. Duis porttitor tincidunt accumsan. Quisque pulvinar mollis ipsum ut accumsan. Proin ligula lectus, rutrum vel nisl quis, efficitur porttitor nisl. Morbi ut accumsan felis, eu ultrices lacus. Integer in tincidunt arcu, et posuere ligula. Morbi cursus facilisis feugiat. Praesent euismod nec nisl at accumsan. Donec libero neque, vulputate semper orci et, malesuada sodales eros. Nunc ut nulla faucibus enim ultricies euismod.",
        h1_nossasReceitas: "Nossas receitas",
        p_nossasReceitas: "Fusce nec pulvinar nunc. Duis porttitor tincidunt accumsan. Quisque pulvinar mollis ipsum ut accumsan. Proin ligula lectus, rutrum vel nisl quis, efficitur porttitor nisl. Morbi ut accumsan felis, eu ultrices lacus. Integer in tincidunt arcu, et posuere ligula. Morbi cursus facilisis feugiat. Praesent euismod nec nisl at accumsan. Donec libero neque, vulputate semper orci et, malesuada sodales eros. Nunc ut nulla faucibus enim ultricies euismod."
    }

    return res.render("sobre", { item: dadosSobre });
});

server.get("/receitas", function (req, res) {
    const dadosReceitas = {
        title_receitas: "Foodfy - Receitas",
    }

    return res.render("receitas", { item: dadosReceitas, card: cards2 });
});

server.get("/receitas/:id", function(req, res) {
    const id = req.params.id;

    const receita = cards2.find(function(receita) {
        if(receita.id == id) {
            return true;
        }
    });

    if(!receita) {
        return res.send("Desculpe! Receita não encontrada...");
    }

    const dadosReceita = {
        title_receita: "Foodfy - Receita",
    }
    
    return res.render("receita", { item: receita, title: dadosReceita });
});

server.use(function (req, res) {
    res.status(404).render("not-found");
});

server.listen(5000, function () {
    console.log("Servidor rodando!");
});

