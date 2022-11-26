import './sdf.css';
import Logo from '../../assets/contato/smma.png'
import Map from '../../assets/contato/map2.png'
import Web from '../../assets/contato/web4.png'


function Contato_semma() 
{
return (

<div className="mx-auto w-75 border border-secundary cordiv_2 rounded mt-5 pb-3 pt-1 text-white">
  <div className="ml-3">
    <h2>Contato</h2>
  </div>
  <hr/>
<div className="row ml-3 mr-3 ">
<br/>

{ /*lado 1*/ }
  <div className="col">
    <div className="">
      <h4>Informações Do Orgão</h4>
      <ul>
      <li>CNPJ: 05.131.081/0001-82</li>

      <li>TELEFONE: (93) 3544-2072</li>

      <li>E-MAIL: semmapmo@oriximina.pa.gov.br</li>

      <li>HORÁRIO: SEGUNDA A SEXTA-FEIRA DAS 08H ÁS 14H</li>

      <li>ENDEREÇO: TRAVESSA ÂNGELO AUGUSTO DE OLIVEIRA, Nº 596-702 - SANTA TEREZINHA - CEP: 68.270-000</li>

      </ul>

      <h4>Funções</h4>
      <p>
        - De acordo com a Lei Municpal nº 9.032, de 16 de dezembro de 2016, em seu Capítulo III, Art. 3º, são Competências da Secretaria Municipal de Meio Ambiente e Mineração: 
        <span id="pontos"> ...</span>

        <span id="mais">I - formular e executar políticas e diretrizes de desenvolvimento ambiental e de mineração para o Município;<br/>

        II - coordenar e gerenciar as atividades de meio ambiente e mineração;<br/>

        III - coordenar o sistema municipal de unidades de conservação;<br/>

        IV - atuar no controle, monitoramento e fiscalização ambiental;<br/>

        V - planejar, coordenar e executar políticas, diretrizes e ações que visem a proteção, recuperação, conservação e melhoria da qualidade ambiental do município;<br/>

        VI - elaborar normas técnicas e legais, visando ao estabelecimento de padrões de sustentabilidade ambiental;<br/>

        VII - integrar a política ambiental às políticas setoriais previstas no Plano Diretor Municipal Participativo do Município;<br/>

        VIII - elaborar um plano de formação e aperfeiçoamento de recursos humanos na área ambiental e mineral;<br/>

        IX - elaborar o zoneamento ecológico-econômico municipal com a inclusão da atividade mineral;<br/>

        X - articular as ações ambientais nas perspectivas: regional, estadual e nacional;<br/>

        XI - manter intercâmbio e parcerias com órgãos públicos e com organizações não governamentais, nacionais e internacionais, visando à promoção dos planos, programas e projetos ambientais locais;<br/>

        XII - estimular e realizar o desenvolvimento de estudos e pesquisas de caráter científico, tecnológico, cultural e educativo, objetivando a produção de conhecimento e a difusão de uma consciência de preservação ambiental;<br/>

        XIII - garantir a participação da comunidade, no processo de gestão ambiental, assegurando a representação de todos os segmentos sociais no planejamento da política ambiental do Município;<br/>

        XIV - programar, executar e conservar a arborização dos logradouros públicos e atividades afins;<br/>

        XV - autorizar, permitir ou não, conforme cada caso concreto, a exploração e a realização de serviços e atividades nas áreas verdes do Município, observando os preceitos das normas federais, estaduais e municipais pertinentes;<br/>

        XVI - planejar, reformar, implantar e administrar unidades de conservação, bosques, praças, parques, jardins e demais áreas verdes do Município;<br/>

        XVII - planejar, organizar, coordenar, executar e realizar o controle e a avaliação das ações setoriais relativas à utilização de recursos minerais e à gestão e ao desenvolvimento de sistemas de produção, transformação, expansão, distribuição e comércio de bens minerais;<br/>

        XVIII - fazer o registro, controle e fiscalização das autorizações, licenciamentos, permissões e concessões para pesquisa, lavra, exploração e aproveitamento de recursos minerários;<br/>

        XIX - realizar o controle, o acompanhamento e fiscalização das atividades de pesquisa, lavra, exploração e aproveitamento de recursos minerários;<br/>

        XX - fazer o registro, controle e fiscalização de substâncias químicas, agrotóxicas e produtos geneticamente modificados, em conformidade com a legislação em vigor;<br/>

        XXI - aplicar as sanções relacionadas ao descumprimento da legislação ambiental;<br/>

        XXII - outras ações inerentes às áreas de meio ambiente e mineração.<br/>

        § 1º. A Secretaria Municipal de Meio Ambiente, atuará como órgão local, responsável pela proteção e melhoria da qualidade ambiental, no âmbito do Sistema Nacional do Meio Ambiente, nos termos da Lei Federal nº 6.938, de 31 de agosto de 1981 e do Sistema Estadual de Meio Ambiente, de conformidade com a Lei Estadual nº 5.887, de 11 de maio de 1995.<br/>

        § 2º. As funções previstas neste artigo incidirão sobre as zonas urbana e rural e de expansão urbana e rural do Município de Oriximiná.<br/>
        </span>
    </p>
    <button className="rounded border border-secundary btn btn-light" onClick={ler_mais} id="btnLeiaMais">ler mais</button>
    </div>
  </div>

  { /*lado 2*/ }
  <div className="col rounded bg-white  mb-3">
    <div className="mt-4">
    <img className="rounded mx-auto d-block w-50" src={Logo}/>
    </div>
    <br/>
    <div className="text-center">
      <p>SECRETARIA MUNICIPAL DE MEIO AMBIENTE E MINERAÇÃO</p>
    </div>
    <hr/>
    <div className="row mb-3 ">
      <div className="col">
        <div>
        <img className="rounded mx-auto d-block w-50" src={Map}/>
        </div>
        <div className="text-center">
        <a href="https://goo.gl/maps/JoX6jCJHJeHMJPoY8">Localização</a>
        </div>
      </div>
      <div className="col">
        <div>
        <img className="rounded mx-auto d-block w-50" src={Web}/>
        </div>
        <div className="text-center">
        <a href="https://www.oriximina.pa.gov.br/secretaria.php?sec=4">Site SEMMA</a>
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


export default Contato_semma;
