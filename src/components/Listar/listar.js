import Right from "../Right/right";
import Header from "../Header/header"
import "./listar.scss"
import { useState } from 'react';
import axios from 'axios'


export default function Listar(){



    const [listaproduto, setListaProduto] = useState([]);


    async function ListarProdutos() {
        try {
            let r = await axios.get('http://localhost:5000/produtos');
            let produtos = r.data;
            setListaProduto(produtos);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    }

    return(
        <>

        <body>
            <Header/>
            <div className="listagem">
        <section className="sec2">
                <div className="tituloSec2">
                    <h1>Listagem de Produtos</h1>
                </div>

                <div className="cabecalho-sec2">
                    <p>Código</p>
                    <p>Nome</p>
                    <p>Descrição</p>
                    <p>Valor R$</p>
                </div>

                <hr />

                <div className="insereProduto">
                    {listaproduto.map(item =>
                        <div className='produto'>
                            <p className="codigo">{item.id}</p>
                            <div className='text-img'>
                            <img src={'http//localhost:5000' + item.imagem } alt='imagem'/>
                            <p className="text1">{item.nome}</p>
                            </div>
                            <p className="descricao">{item.descricao}</p>
                            <p className="valor">R$ {item.valor}</p>
                           

                        </div>

                    )}

                </div>

                <div className="botoes">
                    <div className="divbotao">
                        <button onClick={ListarProdutos}>Atualizar</button>
                    </div>
                </div>
            </section>
          
            <Right/>
            </div>
            </body>
            </>
    )
}