import './sdf.css';
import Df from '../../assets/contato/df.png'
import Web from '../../assets/contato/web4.png'
import Mapa from '../../assets/contato/map2.png'



function Contato_df() 
{
return (

<div className="mx-auto w-75 border border-secundary rounded mt-5 pb-3 pt-1 cordiv text-white">
  <div className="ml-3 ">
    <h2>Contato</h2>
  </div>
  <hr/>
<div className="row ml-3 mr-3 ">
<br/>

{ /*lado 1*/ }
  <div className="col ">
    <div className="">
      <h4>Informações De Contato</h4>
      <p>Caso aconteça um desastre e você esteja por perto é importante pedir ajuda, ligue para a defesa civil, fone: 199. Esteja preparado para dar informações que permitirão que o socorro seja prestado rapidamente:</p>
      <ol >
        <li>Identifique-se: diga seu nome e seu telefone (talvez haja necessidade de confirmar sua chamada ou pedir mais esclarecimentos).</li>
        <li>Onde aconteceu: dê o endereço completo, com rua, número e cidade (acrescente um ponto de referência).</li>
        <li>O que aconteceu: seja breve, diga, apenas o essencial.</li>
      

      </ol>

      <h4>Funções</h4>
      <p>
        - A Secretaria Nacional de Proteção e Defesa Civil (SEDEC), representante do órgão central do SINPDEC, é o órgão responsável por coordenar as ações de proteção e defesa civil em todo o território nacional. Sua atuação tem o objetivo de reduzir os riscos de desastres.<span id="pontos"> ...</span>

        <span id="mais">Também compreende ações de prevenção, mitigação, preparação, resposta e recuperação, e se dá de forma multissetorial e nos três níveis de governo federal, estadual e municipal - com ampla participação da comunidade.

A ação organizada de forma integrada e global do SINPDEC proporciona um resultado multiplicador e potencializador mais eficiente e eficaz do que a simples soma das ações dos órgãos que o compõem. Todos os órgãos do SINPDEC têm atribuições mas a atuação do órgão municipal de proteção e defesa civil é extremamente importante, tendo em vista que os desastres ocorrem no município.</span>
    </p>
    <button className="rounded border border-secundary btn btn-light" onClick={ler_mais} id="btnLeiaMais">ler mais</button>
    </div>
  </div>

  { /*lado 2*/ }
  <div className="col rounded bg-white mb-3">
    <div className="mt-4">
    <img className="rounded mx-auto d-block w-50  " src={Df}/>
    </div>
    <br/>
    <div className="text-center">
      <p>DEFESA CIVIL</p>
    </div>
    <hr/>
    <div className="row ">
      <div className="col">
        <div>
        <img className="rounded mx-auto d-block w-50" src={Mapa}/>
        </div>
        <div className="text-center">
        <a href="https://goo.gl/maps/rnK3nheeCodooZmZ9">Localização</a>
        </div>
      </div>
      <div className="col">
        <div>
        <img className="rounded mx-auto d-block w-50" src={Web}/>
        </div>
        <div className="text-center">
        <a href="https://www.oriximina.pa.gov.br/informa.php?cate=9">Site Defesa Civil</a>
        </div>
      </div>
    </div>
  
  </div>
</div>
</div> 
);
}


function ler_mais()
{
  var pontos=document.getElementById("pontos");
  var maisTexto=document.getElementById("mais");
  var btnLeiMais=document.getElementById("btnLeiaMais");

  if(pontos.style.display === "none")
  {
    pontos.style.display = "inline";
    maisTexto.style.display = "none";
    btnLeiMais.innerHTML = "Leia Mais";
  }
  else
  {
    pontos.style.display = "none";
    maisTexto.style.display = "inline";
    btnLeiMais.innerHTML = "Leia Menos";
  }

}


export default Contato_df;
