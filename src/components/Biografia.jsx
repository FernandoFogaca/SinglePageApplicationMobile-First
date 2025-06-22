import Propostas from "./Propostas";
import Header from "./Header";
import Galeria from "./Galeria";
import Fade from "@mui/material/Fade";

export default function Biografia() {
  return (
    <div className="biografia">
      <div className="container">
        <div className="header">
          <Header />
        </div>

        <Fade in={true} timeout={1000}>
          <div className="conteudo">
            <div className="hero">
              <img
                className="img"
                src="https://upload.wikimedia.org/wikipedia/commons/3/32/Emmanuel_Macron_2022.png"
                alt="presidente da France, Emmanuel Macron"
              />
              <Galeria />
            </div>

            <div className="content">
              <h2>Biografia</h2>
              <p>
                Emmanuel Macron é o atual presidente da França, nascido em Amiens
                em 21 de dezembro de 1977. Filho de dois médicos, cresceu em uma
                família de classe média com forte valorização da educação. Desde
                jovem demonstrou interesse por literatura, filosofia e política.
                Estudou filosofia na Universidade Paris Nanterre e frequentou a
                prestigiosa École Nationale d'Administration (ENA), tradicional
                escola de formação de líderes políticos e administrativos da
                França. Durante seus estudos, também trabalhou na inspeção geral
                de finanças, aprofundando sua visão econômica. Antes de entrar na
                política, atuou como banqueiro de investimentos no Rothschild &
                Cie, onde participou de grandes negociações empresariais. Sua
                atuação no setor privado lhe trouxe grande experiência em finanças
                internacionais. Em 2012, ingressou no governo de François Hollande
                como assessor econômico, depois se tornou Ministro da Economia em
                2014. Sua gestão ficou marcada por políticas pró-negócios,
                reformas no mercado de trabalho e incentivo ao setor tecnológico.
                Em 2016, fundou o movimento político independente "La République
                En Marche!", rompendo com a polarização tradicional da política
                francesa. Foi eleito presidente da França em 2017, tornando-se o
                mais jovem chefe de Estado francês desde Napoleão Bonaparte. Como
                presidente, defende reformas estruturais, integração europeia,
                energias renováveis, modernização econômica e estímulo à inovação
                e startups. Macron também é fluente em inglês e alemão, o que
                fortalece sua atuação na política internacional. Em 2022, foi
                reeleito presidente da França, mantendo seu compromisso com uma
                França moderna, competitiva e socialmente justa.
              </p>
            </div>
          </div>
        </Fade>

        <div className="propostas">
          <Propostas />
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}