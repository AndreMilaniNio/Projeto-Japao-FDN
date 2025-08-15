import { useState } from "react"
import "./App.css"

function App() {
  const [feedback, setFeedback] = useState("")
  const [NumeroDaQuestao, setNumeroDaQuestao] = useState(0)
  const [desabilitado, setDesabilitado] = useState(false)
  const [acertos, setAcertos] = useState(0)

  const questionario = [
    { pergunta: "Qual prato japonês é feito de arroz e peixe cru?", resposta1: "Ramen", resposta2: "Sushi", respostaCerta: "Sushi" },
    { pergunta: "Qual é a capital do Japão?", resposta1: "Tóquio", resposta2: "Osaka", respostaCerta: "Tóquio" },
    { pergunta: "Quem é o Deus do sol na mitologia japonesa?", resposta1: "Susanoo", resposta2: "Amaterasu", respostaCerta: "Amaterasu" },
    { pergunta: "O anime 'Naruto' se passa em um mundo de ninjas ou samurais?", resposta1: "Samurais", resposta2: "Ninjas", respostaCerta: "Ninjas" },
    { pergunta: "Os “Oni” na mitologia japonesa são Deuses ou Yokais?", resposta1: "Deuses", resposta2: "Yokais", respostaCerta: "Yokais" },
    { pergunta: "Os animes vem principalmente do Japão?", resposta1: "Não", resposta2: "Sim", respostaCerta: "Sim" },
    { pergunta: "O que é uma Geisha na cultura japonesa?", resposta1: "Uma guerreira samurai", resposta2: "Uma artista tradicional", respostaCerta: "Uma artista tradicional" },
    { pergunta: "One Piece, Naruto e Dragon Ball são origininalmente japão?", resposta1: "Sim, do Japão!", resposta2: "Não, da China!", respostaCerta: "Sim, do Japão!" },
    { pergunta: "Qual cidade japonesa foi destruída por uma bomba atômica durante a Segunda Guerra Mundial?", resposta1: "Kyoto", resposta2: "Hiroshima", respostaCerta: "Hiroshima" },
    { pergunta: "Qual o nome do gato da sorte japonês que acena com a pata?", resposta1: "Tanuki", resposta2: "Maneki Neko", respostaCerta: "Maneki Neko" },
    { pergunta: "O que significa 'Bushido', o código dos samurais?", resposta1: "Caminho do guerreiro", resposta2: "Caminho da honra", respostaCerta: "Caminho da honra" },
    { pergunta: "A mitologia japonesa vem principalmente da religião Xintoísta ou Católica?", resposta1: "Xintoísta", resposta2: "Católica", respostaCerta: "Xintoísta" },
    { pergunta: "Os “Oni” são geralmente retratados como um espírito bondoso ou uma criatura maldosa?", resposta1: "Bondosa", resposta2: "Maldosa", respostaCerta: "Maldosa" },
    { pergunta: "Qual era a principal arma dos samurais?", resposta1: "Armas de fogo", resposta2: "Katana", respostaCerta: "Katana" },
    { pergunta: "Qual árvore de flores rosa simboliza a primavera no Japão?", resposta1: "Bonsai", resposta2: "Sakura", respostaCerta: "Sakura" }
  ]

  function geraNovaPergunta() {
    if (NumeroDaQuestao >= questionario.length - 1) {
      setNumeroDaQuestao(questionario.length) // vai para a tela final
    } else {
      setNumeroDaQuestao(oldState => oldState + 1)
    }
  }

  function verificaResposta(respostaEscolhida) {
    setDesabilitado(true)

    if (respostaEscolhida === questionario[NumeroDaQuestao].respostaCerta) {
      setAcertos(old => old + 1)
      setFeedback("Certa a resposta!")
    } else {
      setFeedback("Errada a resposta!")
    }

    setTimeout(() => {
      setFeedback("")
      setDesabilitado(false)

      if (NumeroDaQuestao >= questionario.length - 1) {
        setNumeroDaQuestao(questionario.length) // tela final
      } else {
        setNumeroDaQuestao(old => old + 1)
      }
    }, 1200)
  }

  function reiniciarQuiz() {
    setNumeroDaQuestao(0)
    setAcertos(0)
    setFeedback("")
    setDesabilitado(false)
  }

  // Tela final
  if (NumeroDaQuestao >= questionario.length) {
    return (
      <main className="TelaFinal">
        <h1>🏆 Resultado Final</h1>
        <p>
          Você acertou <strong>{acertos}</strong> de {questionario.length} perguntas.
        </p>
        <button onClick={reiniciarQuiz}>Jogar novamente</button>
      </main>
    )
  }

  // Tela de perguntas
  return (
    <main>
      <div className="CaixaQuestionario">
        <h1>{NumeroDaQuestao + 1}. {questionario[NumeroDaQuestao].pergunta}</h1>

        <ul>
          <li>
            <button
              onClick={() => verificaResposta(questionario[NumeroDaQuestao].resposta1)}
              disabled={desabilitado}
            >
              {questionario[NumeroDaQuestao].resposta1}
            </button>
          </li>
          <li>
            <button
              onClick={() => verificaResposta(questionario[NumeroDaQuestao].resposta2)}
              disabled={desabilitado}
            >
              {questionario[NumeroDaQuestao].resposta2}
            </button>
          </li>
        </ul>
      </div>

      <span
        style={{
          backgroundColor:
            feedback === "Certa a resposta!"
              ? "lightgreen"
              : feedback === "Errada a resposta!"
              ? "lightcoral"
              : "transparent",
          padding: "1rem",
          borderRadius: "2rem",
          fontSize: ".5rem",
        }}
      >
        <h1 className={feedback ? "animar" : ""}>{feedback}</h1>
      </span>

      <button
        className="BotaoProximaQuestao"
        onClick={geraNovaPergunta}
        disabled={desabilitado}
      >
        {NumeroDaQuestao >= questionario.length - 1 ? "Finalizar" : "Pular pergunta"}
      </button>

      <p className="MadeBy">Made by André Milani</p>
    </main>
  )
}

export default App