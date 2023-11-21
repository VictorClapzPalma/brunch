import { con } from "./connection.js";


export async function salvar(produto) {
  const comando = `
      INSERT INTO tabela_produtos (nome_produto, valor_produto, descricao_produto, imagem_produto)
                    VALUES (?, ?, ?, ?)
  `

  const [info] = await con.query(comando, [produto.nome,produto.valor, produto.descricao, produto.imagem])
  produto.id = info.insertId;
  
  return produto;
}

export async function listar() {
  const comando = `
     SELECT id_produto        as id,
            nome_produto            as nome,
            descricao_produto      as descricao,
            valor_produto         as valor,
            imagem_produto       as imagem
       FROM tabela_produtos
  `

  const [linhas] = await con.query(comando);
  return linhas;
}


export async function buscarPorNome(nome) {
  const comando = `
     SELECT id_produto      as id,
            nome_produto            as nome,
            descricao_produto       as descricao,
            valor_produto         as valor,
            imagem_produto      as imagem
       FROM tabela_produtos
      WHERE nome_produto like ?
  `

  const [linhas] = await con.query(comando, ['%'+nome+'%']);
  return linhas;
}


export async function alterar(id, produto) {
  const comando = `
  UPDATE cad_produtos
  SET nome_produto = ?,
      descricao_produto = ?,
      valor_produto = ?,
      img_produto = ?
  WHERE id_produto = ?
  `

  const valores = [produto.nome, produto.descricao, produto.quantidade, produto.valor, produto.img, id];

  const [linhas] = await conectar.query(comando, valores);
  return linhas;
}


export async function remover(id) {
  const comando = 'DELETE FROM tabela_produtos WHERE id_produto = ?'

  const [info] = await con.query(comando, [id])
  return info.affectedRows;
}
