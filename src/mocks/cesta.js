import icone from '../../assets/icon.png';
import whatsapp from '../../assets/frutas/whatsapp.png';
import instagram from '../../assets/frutas/instagram.png';
import facebook from '../../assets/frutas/facebook.png';
import maca from '../../assets/frutas/maca.png';
import manga from '../../assets/frutas/manga.png';

const cesta = {
    topo: {
        titulo: "Contato",
    },
    detalhes: {
        nome: "Cesta de Frutas",
        logoSacolao: icone,
        nomeSacolao: "Sacolão da Rosa",
        descricao: "Uma cesta com produtos cuidadosamente selecionados da horta direto para sua cozinha.",
        preco: "R$ 50,00",
        botao: "Comprar",
    },
    itens: {
        titulo: "Entre em contato",
        lista: [
            {
                nome: "(xx) 97213-0458",
                imagem: whatsapp,
            },
            {
                nome: "@studio_maga",
                imagem: instagram,
            },
            {
                nome: "studio_Maga",
                imagem: facebook,
            },

        ]
    }
}

export default cesta;