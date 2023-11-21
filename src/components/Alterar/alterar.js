import "../../style/reset.scss"
import "./alterar.scss"
import axios from "axios"
import Header from "../Header/header"
import { useState } from 'react';


const Alterar = () => {


    const [produtoId, setProdutoId] = useState('')
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [valor, setValor] = useState('');
    const [listaproduto, setListaProduto] = useState([]);
    const [imagem, setImagem] = useState('');
    const [arquivo, setArquivo] = useState();

    async function ListarProdutos() {
        try {
            let r = await axios.get('http://localhost:5000/produtos');
            let produtos = r.data;
            setListaProduto(produtos);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    }

    async function alterarProduto(produtoId, novosDados) {
        
        try {
            if (!produtoId) {
                alert('ID do produto não foi fornecido');
                return;
            }
            let r = await axios.put(`http://localhost:5000/produtos/${produtoId}`, novosDados);

            const formData = new FormData();
            
    
            r = await axios.put(`http://localhost:5000/produtos/${produtoId}/`, formData, {
                headers: {'Content-Type': 'multipart/form-data'}
            } )
    

            if (r.status === 200) {
                alert('Cadastro alterado com sucesso.');
            } else {
                alert('Falha ao alterar o cadastro.');
            }
        } catch (error) {
            alert('Ocorreu um erro ao tentar alterar o cadastro:', error);
        }

   
        ListarProdutos();
    }

    return(
        <>
        <body>
    <Header/>
    <section class>
        <div className="left">
            <h2 class="name">
                EDITAR PRODUTOS
            </h2>

            <div className="cad-produtos">
                <div className="id">
                    <label for="id">ID</label>
                    <input type="number" name="id" id="id" value={produtoId} onChange={e => setProdutoId(e.target.value)} /> 
                </div>
            </div>
            <div class="botao">
                <button onClick={() => alterarProduto(produtoId, {
                        nome: nome,
                        descricao: descricao,
                        valor: valor,
                        imagem: imagem
                    })}> PROCURAR </button>
            </div>
            
        </div>

        <div class="right">
        <a class="name" href="/registrar">
                    INSERIR
                </a>
                <a class="name" href="/alterar">
                    ALTERAR
                </a>
                <a class="name" href="/excluir">
                    REMOVER
                </a>
                <a class="name" href="/listar">
                    LISTAR
                </a>
        </div>
    </section>
</body>
</>
    )
}

export default Alterar;