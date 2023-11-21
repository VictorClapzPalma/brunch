import React, { useState } from 'react'
import axios from 'axios'
import Header from "../Header/header"
import "./registrar.scss"
import Right from "../Right/right"

const Registrar = () => {

const [id, setId] = useState('')
const [nome, setNome] = useState('')
const [descricao, setDescricao] = useState('')
const [valor, setValor] = useState('')
const [listaProduto, setListaProduto] = useState([])





async function ListarProdutos() {
    try {
        let r = await axios.get('http://localhost:5000/produtos');
        let produtos = r.data;
        setListaProduto(produtos);
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }
}


async function salvarProdutos() {
    try {
        const produtoExistente = listaProduto.find(
            (produto) => produto.nome === nome && produto.descricao === descricao
        );

        if (produtoExistente) {
            alert('Este produto já está cadastrado.');
        } else {
            let body = {
                nome: nome,
                descricao: descricao,
                valor: valor
            }

            let r = await axios.post('http://localhost:5000/produtos', body);
            let id = r.data.id;

            alert('Produto cadastrado. Id ' + id);
            ListarProdutos(); 
        }
    } catch (error) {
        alert('Ocorreu um erro ao salvar o produto: ' + error.message);
    }
}


    return( 
        <>   
    <body>
        <Header/>
    <section >
        <div className="left">
            <h2 className="name">
                ADICIONAR PRODUTOS
            </h2>
            <div className="cad-produtos">
                <div className="id">
                    <label for="id">ID</label>
                    <input type="number" id="id" name="id" value={id} onChange={e => setId(e.target.value)} />
                </div>

                <div className="nome">
                    <label for="nome">NOME</label>
                    <input type="text" id="nome" name="nome" value={nome} onChange={e => setNome(e.target.value)} />
                </div>

                <div className="imagem">
                    <label for="nome">IMAGEM</label>
                    <input type="file" name="imagem" id="imagem"/>
                </div>

                <div className="descricao">
                    <label for="descricao">DESCRIÇÃO</label>
                    <input type="text" id="descrição" name="descrição" value={descricao} onChange={e => setDescricao(e.target.value)} />
                </div>

                <div className="preco">
                    <label for="preco">PREÇO</label>
                    <input type="text" id="valor" name="valor" value={valor} onChange={e => setValor(e.target.value)} />
                </div>
            </div>
            <div className="botao">
            <button onClick={salvarProdutos}> Cadastrar </button>
            </div>
        </div>
      <Right className="Right"/>
    </section>
</body>
</>
    )
}

export default Registrar;

