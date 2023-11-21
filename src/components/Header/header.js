import './header.scss'
import Hamburguer from "../Hamburguer/hamburguer"


export default function Header(){
    return(
        <>
        <header class="header">
        <div class="logo">
            <h1>
                Brunch Time Treasure
            </h1>
        </div>
            <Hamburguer/>
    </header>
    </>
    )
}