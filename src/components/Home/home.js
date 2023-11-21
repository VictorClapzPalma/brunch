import React, { useState } from 'react'
import "../../style/reset.scss"

import "./home.scss"
import Header from "../Header/header"

import paoComOvo from "../../assets/images/Frame1.png"
import panqueca from  "../../assets/images/panqueca.jpg"
import kart from "../../assets/svg/carrinho.svg"
import coffe from "../../assets/images/coffe.jpg"
import PaoComOvoEBacon from "../../assets/images/PaoOvoBacon.png"
import panqueca2 from "../../assets/images/Frame2.png"
import sucoDeLaranja from "../../assets/images/Frame4.png"
import panqueca3 from "../../assets/images/Frame6.png"
import panqueca4 from "../../assets/images/Frame7.png"
import paoComOvo2 from "../../assets/images/Ovo.png"
const Home = () => {

    const [valorTotal, setValorTotal] = useState(0);

    const adicionarProduto = (valorProduto) => {
      // Atualizar o estado com o novo valor do produto
      setValorTotal(valorTotal + valorProduto);
    };
  

    
    return(
        <>
        <body>
          <Header/>
            <section >
                
                <div class="produtos">
                    <div class="produto" >
                        <img src = {paoComOvo} alt='pao_com_ovo'/>
                    </div>
                    <div class="produto">
                        <img src={panqueca} alt="panqueca"/>
                    </div>
                    <div class="produto">
                        <img src={coffe} alt="cafe"/>
                    </div>
                    <div class="produto">
                        <img src={PaoComOvoEBacon} alt=""/>
                    </div>
                    <div class="produto">
                        <img src={panqueca2} alt=""/>
                    </div>
                    <div class="produto">
                        <img src={sucoDeLaranja} alt=""/>
                    </div>
                    <div class="produto">
                        <img src={panqueca3} alt=""/>
                    </div>
                    <div class="produto">
                        <img src={panqueca4} alt=""/>
                    </div>
                    <div class="produto">
                        <img src={paoComOvo2} alt=""/>
                    </div>
                </div>
                    <div class="carrinho">
                       <img src={kart} alt='carrinho'/>

                       <div className='valor-box'>

                       </div>
                    </div>
            </section>
        </body>
        </>
    )
}

export default Home;