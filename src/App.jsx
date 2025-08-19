import { useState } from "react"
import "./App.css"

function App() {
  const [feedback, setFeedback] = useState("")
  const [NumeroDaQuestao, setNumeroDaQuestao] = useState(0)
  const [desabilitado, setDesabilitado] = useState(false)
  const [acertos, setAcertos] = useState(0)

  const questionario = [
      { pergunta: "Quem é o Deus do sol na mitologia japonesa?", resposta1: "Amaterasu", resposta2: "Susanoo", respostaCerta: "Amaterasu" }, // res1 certa
      { pergunta: "O que é uma Geisha na cultura japonesa?", resposta1: "Uma artista tradicional", resposta2: "Uma guerreira samurai", respostaCerta: "Uma artista tradicional" }, // res1 certa
      { pergunta: "Qual prato japonês é feito de arroz e peixe cru?", resposta1: "Sushi", resposta2: "Ramen", respostaCerta: "Sushi" }, // res1 certa
      { pergunta: "Qual é a capital do Japão?", resposta1: "Osaka", resposta2: "Tóquio", respostaCerta: "Tóquio" }, // res2 certa
      { pergunta: "Qual árvore de flores rosa simboliza a primavera no Japão?", resposta1: "Sakura", resposta2: "Bonsai", respostaCerta: "Sakura" }, // res1 certa
      { pergunta: "Os animes vem principalmente do Japão?", resposta1: "Não", resposta2: "Sim", respostaCerta: "Sim" }, // res2 certa
      { pergunta: "O anime 'Naruto' se passa em um mundo de ninjas ou samurais?", resposta1: "Samurais", resposta2: "Ninjas", respostaCerta: "Ninjas" }, // res2 certa
      { pergunta: "Qual o nome do gato da sorte japonês que acena com a pata?", resposta1: "Maneki Neko", resposta2: "Tanuki", respostaCerta: "Maneki Neko" }, // res1 certa
      { pergunta: "Os “Oni” na mitologia japonesa são Deuses ou Yokais?", resposta1: "Yokais", resposta2: "Deuses", respostaCerta: "Yokais" }, // res1 certa
      { pergunta: "O que significa 'Bushido', o código dos samurais?", resposta1: "Caminho da honra", resposta2: "Caminho do guerreiro", respostaCerta: "Caminho da honra" }, // res1 certa
      { pergunta: "Qual cidade japonesa foi destruída por uma bomba atômica durante a Segunda Guerra Mundial?", resposta1: "Kyoto", resposta2: "Hiroshima", respostaCerta: "Hiroshima" }, // res2 certa
      { pergunta: "Os “Oni” são geralmente retratados como um espírito bondoso ou uma criatura maldosa?", resposta1: "Maldosa", resposta2: "Bondosa", respostaCerta: "Maldosa" }, // res1 certa
      { pergunta: "One Piece, Naruto e Dragon Ball são origininalmente do japão?", resposta1: "Não, da China!", resposta2: "Sim, do Japão!", respostaCerta: "Sim, do Japão!" }, // res2 certa
      { pergunta: "A mitologia japonesa vem principalmente da religião Xintoísta ou Católica?", resposta1: "Xintoísta", resposta2: "Católica", respostaCerta: "Xintoísta" }, // res1 certa
      { pergunta: "Qual era a principal arma dos samurais?", resposta1: "Armas de fogo", resposta2: "Katana", respostaCerta: "Katana" }, // res2 certa
  ];


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
      <main className="TelaFinal animar">
        <div className="TelaFinalBoxResultados">
          <h1>Resultado Final</h1>
          <p>
            {acertos < 10
              ? `Você acertou ${acertos} de ${questionario.length} perguntas. Infelizmente não ganha balinha...`
              : `Você acertou mais de 10 perguntas, ganha balinha!`}
          </p>
        </div>

        <span>
          <button onClick={reiniciarQuiz}>Jogar novamente</button>
        </span>
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