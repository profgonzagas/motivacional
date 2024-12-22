import { EXPO_PUBLIC_GROQ_KEY } from '@env';
const Groq = require('groq-sdk');

const groq = new Groq( {apiKey: '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', dangerouslyAllowBrowser: true});
//const groq = new Groq( {apiKey: process.env.EXPO_PUBLIC_GROQ_KEY, dangerouslyAllowBrowser: true});
export async function geradorMotivacional(desculpa: string){
    try {
  const chatCompletion = await groq.chat.completions.create({
    "messages": [
      {
        "role": "user",
        "content": "estou fazendo um app onde o usuário entrará com um evento e quero responder um frase motivacional para estudo, quero que motive o estudo da pessoa e não ofenda ninguém, mas seja criativo"
      },
      {
        "role": "assistant",
        "content": "Que ótimo projeto!\n\nAqui estão algumas frases motivacionais para estudo que você pode utilizar em seu app:\n\n1. **\"Aprender é crescer, e o crescimento é ilimitado!\"** - Uma mensagem simples, mas eficaz para motivar o estudo.\n2. **\"Cada página virada é um passo para o sucesso!\"** - Uma metáfora inspiradora para lembrar que o estudo é um processo contínuo.\n3. **\"O conhecimento é o poder, e o estudo é a chave para desbloqueá-lo!\"** - Uma frase que destaca a importância do estudo para alcançar os objetivos.\n4. **\"Não é sobre ser o melhor, é sobre ser melhor do que ontem!\"** - Uma mensagem motivadora para focar no progresso pessoal.\n5. **\"O estudo é uma jornada, não um destino. Aproveite o caminho!\"** - Uma frase que inspira a curiosidade e o prazer de aprender.\n6. **\"A educação é a arma mais poderosa para mudar o mundo. Use-a bem!\"** - Uma mensagem que destaca a importância da educação para criar um impacto positivo.\n7. **\"Cada desafio superado é um passo para a vitória!\"** - Uma frase que motiva a superar obstáculos e alcançar os objetivos.\n8. **\"O estudo é um investimento no seu futuro. Não espere por amanhã para começar!\"** - Uma mensagem que inspira a tomar ação e investir no próprio futuro.\n9. **\"Aprender é libertador. Liberte-se do medo e do desconhecimento!\"** - Uma frase que destaca a importância da educação para a liberdade pessoal.\n10. **\"O conhecimento é a luz que ilumina o caminho. Aprenda e ilumine seu futuro!\"** - Uma metáfora inspiradora para lembrar que o estudo é um processo que ilumina o caminho para o sucesso.\n\nEssas frases são criativas, motivadoras e respeitosas, e podem ser usadas para inspirar os usuários do seu app a estudar e alcançar seus objetivos. Boa sorte com o seu projeto!"
      },
      {
        "role": "user",
        "content": "quero te enviar o evento e você irá me responder somente a frase motivacional"
      },
      {
        "role": "assistant",
        "content": "Estou preparado! Por favor, envie o evento!"
      },
      {
        "role": "user",
        "content": "estou cansando\n"
      },
      {
        "role": "assistant",
        "content": "Não desista! Cada pequeno passo hoje é um grande salto para o amanhã!"
      },
      {
        "role": "user",
        "content": "não quero estudar\n"
      },
      {
        "role": "assistant",
        "content": "Lembre-se de que cada página virada é um passo para o sucesso, e o sucesso é o seu objetivo!"
      },
      {
        "role": "user",
        "content": "cansado\n"
      },
      {
        "role": "assistant",
        "content": "O sono é temporário, mas o conhecimento é eterno! Desperte seu potencial!"
      },
      {
        "role": "user",
        "content": desculpa
      },
    ],
    "model": "llama-3.1-70b-versatile",
   
  });
  return chatCompletion.choices[0]?.message.content;
    } catch (error) {

        const desculpas = [
            "Hoje é o dia perfeito para aprender algo novo!",
            "Cada passo que você dá é mais perto do seu objetivo.",
            "Seu esforço de hoje vai render frutos incríveis amanhã.",
            "Lembre-se: conhecimento é um superpoder que ninguém pode tirar de você!",
            "Você é mais forte do que qualquer desculpa, continue firme!",
            "Estudar é investir no seu futuro, e você merece o melhor.",
            "A constância supera a perfeição. Foque no progresso!",
            "O aprendizado é o único caminho para alcançar seus sonhos.",
            "Hoje você está plantando sementes de sucesso para amanhã.",
            "Todo grande especialista começou exatamente de onde você está agora.",
            "Dedique-se hoje para poder celebrar suas conquistas no futuro.",
            "Acredite: cada minuto estudando é um tijolo na construção do seu castelo de sucesso.",
            "Você tem tudo que precisa para superar qualquer desafio acadêmico.",
            "Aprender não é uma corrida, mas uma jornada — aproveite cada passo!",
            "Você é capaz de coisas incríveis, continue acreditando em si mesmo.",
            "Sua disciplina de hoje é a vitória de amanhã.",
            "Um pouco de esforço a cada dia se transforma em um grande feito ao final.",
            "Você é o protagonista da sua história de sucesso — continue escrevendo!",
            "O estudo é um presente que você dá ao seu futuro eu.",
            "Persistência é a chave para desbloquear o potencial infinito que existe em você.",
            "Desafios de hoje são as conquistas de amanhã — continue avançando!",
            "Você tem o que é preciso para transformar dificuldades em oportunidades.",
            "Cada página que você lê está te levando a um mundo cheio de possibilidades.",
            "O aprendizado é a maior aventura que você pode viver — aproveite o processo!",
            "O esforço que você coloca hoje é o orgulho que sentirá amanhã."
        ];
        

        return desculpas[Math.floor(Math.random() * desculpas.length)]
    }
}

