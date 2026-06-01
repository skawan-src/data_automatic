function myScope() {
  function gerarData() {
    const data = new Date();
    const dia = data.getDate();
    const diaSemana = data.getDay();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    // let hora = data.getHours();
    // let min = data.getMinutes();
    // hora = hora >= 10 ? hora : `0${hora}`;
    // min = min >= 10 ? min : `0${min}`;

    // Jeito mais "moderno"
    const horaFormatada = data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit'
    });

    const diaSemanaTexto = getDiaDaSemana(diaSemana);
    const diaMesTexto = getMes(mes);

    return `${diaSemanaTexto}, ${dia} de ${diaMesTexto} de ${ano} ${horaFormatada}`;
  }

  function getMes(mes) {
    let mesTexto;
    switch (mes + 1) {
      case 1:
        mesTexto = "Janeiro";
        return mesTexto;
      case 2:
        mesTexto = "Fevereiro";
        return mesTexto;
      case 3:
        mesTexto = "Março";
        return mesTexto;
      case 4:
        mesTexto = "Abril";
        return mesTexto;
      case 5:
        mesTexto = "Maio";
        return mesTexto;
      case 6:
        mesTexto = "Junho";
        return mesTexto;
      case 7:
        mesTexto = "Julho";
        return mesTexto;
      case 8:
        mesTexto = "Agosto";
        return mesTexto;
      case 9:
        mesTexto = "Setembro";
        return mesTexto;
      case 10:
        mesTexto = "Outubro";
        return mesTexto;

      case 11:
        mesTexto = "Novembro";
        return mesTexto;

      case 12:
        mesTexto = "Dezembro";
        return mesTexto;
    }
  }

  function getDiaDaSemana(diaSemana) {
    let diaDaSemanaTexto;
    switch (diaSemana) {
      case 0:
        diaDaSemanaTexto = "Domingo";
        return diaDaSemanaTexto;
      case 1:
        diaDaSemanaTexto = "Segunda-feira";
        return diaDaSemanaTexto;
      case 2:
        diaDaSemanaTexto = "Terça-feira";
        return diaDaSemanaTexto;
      case 3:
        diaDaSemanaTexto = "Quarta-feira";
        return diaDaSemanaTexto;
      case 4:
        diaDaSemanaTexto = "Quinta-feira";
        return diaDaSemanaTexto;
      case 5:
        diaDaSemanaTexto = "Sexta-feira";
        return diaDaSemanaTexto;
      case 6:
        diaDaSemanaTexto = "Sábado";
        return diaDaSemanaTexto;
    }
  }

  function criarH1() {
    const getH1 = document.createElement("h1");
    return getH1;
  }

  function mostrarNaTela() {
    const container = document.querySelector(".container");

    const h1 = criarH1();
    h1.innerHTML = `${gerarData()}`;

    container.appendChild(h1);
  }

  console.log(gerarData());
  mostrarNaTela();
}

myScope();
