import { useState } from "react"
import "./App.css"

function App() {
  const [feedback, setFeedback] = useState("")
  const [NumeroDaQuestao, setNumeroDaQuestao] = useState(0)
  const questionario = [
    {
      pergunta: "Quem é o Deus do sol na mitologia japonesa?",
      resposta1: "Amaterasu",
      resposta2: "Susanoo",
      respostaCerta: "Amaterasu",
    },
    {
      pergunta: "Os “Oni” na mitologia japonesa são Deuses ou Yokais?",
      resposta1: "Deuses",
      resposta2: "Yokais",
      respostaCerta: "Yokais",
    },
    {
      pergunta: "A mitologia japonesa vem principalmente da religião Xintoísta ou Católica?",
      resposta1: "Católica",
      resposta2: "Xintoísta",
      respostaCerta: "Xintoísta",
    },
    {
      pergunta: "Os “Oni” são geralmente retratados como um espírito bondoso ou uma criatura maldosa?",
      resposta1: "Maldosa",
      resposta2: "Bondosa",
      respostaCerta: "Maldosa",
    },
    {
      pergunta: "Os animes vem principalmente do Japão?",
      resposta1: "Sim",
      resposta2: "Não",
      respostaCerta: "Sim",
    },
    {
      pergunta: "Qual cidade japonesa foi destruída por uma bomba atômica durante a Segunda Guerra Mundial?",
      resposta1: "Hiroshima",
      resposta2: "Kyoto",
      respostaCerta: "Hiroshima",
    },
    {
      pergunta: "Qual é a capital do Japão?",
      resposta1: "Tóquio",
      resposta2: "Osaka",
      respostaCerta: "Tóquio",
    },
    {
      pergunta: "Qual prato japonês é feito de arroz e peixe cru?",
      resposta1: "Sushi",
      resposta2: "Ramen",
      respostaCerta: "Sushi",
    },
    {
      pergunta: "Qual o nome do gato da sorte japonês que acena com a pata?",
      resposta1: "Maneki Neko",
      resposta2: "Tanuki",
      respostaCerta: "Maneki Neko"
    },
    {
      pergunta: "Qual era a principal arma dos samurais?",
      resposta1: "Katana",
      resposta2: "Armas de fogo",
      respostaCerta: "Katana",
    },
    {
      pergunta: "One Piece, Naruto e Dragon Ball são origininalmente japão?",
      resposta1: "Não, da China!",
      resposta2: "Sim, do Japão!",
      respostaCerta: "Sim, do Japão!",
    },
    {
      pergunta: "Qual árvore de flores rosa simboliza a primavera no Japão?",
      resposta1: "Sakura",
      resposta2: "Bonsai",
      respostaCerta: "Sakura",
    },
    {
      pergunta: "O anime 'Naruto' se passa em um mundo de ninjas ou samurais?",
      resposta1: "Ninjas",
      resposta2: "Samurais",
      respostaCerta: "Ninjas",
    },
    {
      pergunta: "O que é uma Geisha na cultura japonesa?",
      resposta1: "Uma artista tradicional",
      resposta2: "Uma guerreira samurai",
      respostaCerta: "Uma artista tradicional",
    },
    {
      pergunta: "O que significa 'Bushido', o código dos samurais?",
      resposta1: "Caminho da honra",
      resposta2: "Caminho do guerreiro",
      respostaCerta: "Caminho da honra",
    }
  ]

  // Função para gerar nova pergunta
  function geraNovaPergunta(){
    if (NumeroDaQuestao >= (questionario.length-1)){
      setNumeroDaQuestao(0)
      return
    }
    
    setNumeroDaQuestao(oldState => oldState + 1)
  }

  function verificaResposta(respostaEscolhida) {
    if (respostaEscolhida === questionario[NumeroDaQuestao].respostaCerta){
      setFeedback("Certa a reposta!")
    } else {
      setFeedback("Errada a reposta!")
    }

    if (NumeroDaQuestao >= (questionario.length - 1)) {
      setTimeout(() => {setFeedback(""), setNumeroDaQuestao(0)}, 1300)
    } else {
      setTimeout(() => {setFeedback(""), setNumeroDaQuestao((old) => old + 1)}, 1300)
    }
  }

  return (
    <>
      <main>
        <div className="CaixaQuestionario">
          <h1>{NumeroDaQuestao+1}. {questionario[NumeroDaQuestao].pergunta}</h1>

          <ul>
            <li>
              <button
                onClick={() => {verificaResposta(questionario[NumeroDaQuestao].resposta1)}}
              >
                {questionario[NumeroDaQuestao].resposta1}
              </button>
            </li>
            <li>
              <button
                onClick={() => {verificaResposta(questionario[NumeroDaQuestao].resposta2)}}
              >
                {questionario[NumeroDaQuestao].resposta2}
              </button>
            </li>
          </ul>
        </div>
        <span style={{
          backgroundColor:
            feedback === "Certa a reposta!"
              ? "lightgreen"
              : feedback === "Errada a reposta!"
              ? "lightcoral"
              : "transparent",
          padding: "1rem",
          borderRadius: "2rem",
        }}>
          <h1
          className={feedback ? "animar" : ""}
          >
            {feedback}
          </h1>
        </span>

        <button className="BotaoProximaQuestao"
          onClick={() => {geraNovaPergunta()}}>
          {NumeroDaQuestao >= (questionario.length-1) ? "Reiniciar" : "Pular pergunta"}
        </button>
      </main>
    </>
  )
}

export default App
