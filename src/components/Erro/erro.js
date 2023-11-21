import Header from "../Header/header"
import "./erro.scss"
export default function Erro(){

    return(
        <>
        <Header />
        <div className="erro">
            <h1>Não é possível acessar esse site</h1>

            <p>Verifique se há um erro de digitação</p>
        </div>
        
        </>

    )
}