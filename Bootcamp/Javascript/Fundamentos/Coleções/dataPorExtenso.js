//Cria uma função que recebe um dia, um mês e um ano como argumentos e retorna essa data por extenso.
//Caso o número do dia inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 31."
//Caso o número do mês inserido seja inválido deve retornar a mensagem de erro: "Por favor introduza um mês entre 1 e 12."
//Nos meses em que os dias só vão até ao 30 deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 30."
//No mês de Fevereiro em anos não bissextos só pode aceitar o número de dias até 28, caso seja inserido um número diferente deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 28."
//No mês de Fevereiro em anos bissextos só pode aceitar o número de dias até 29, caso seja inserido um número diferente deve retornar a mensagem de erro: "Por favor introduza um dia entre 1 e 29."
//Os anos devem estar entre 2000 e 2030. Caso seja inserido um ano inválido deve retornar a mensagem de erro: "Por favor introduza um ano entre 2000 e 2030."
function diaEmPalavras(dia, mes, ano) {
  const unidades = new Map([
    [1, "um"], [2, "dois"], [3, "três"], [4, "quatro"], [5, "cinco"],
    [6, "seis"], [7, "sete"], [8, "oito"], [9, "nove"]
  ]);

  const especiais = new Map([
    [10, "dez"], [11, "onze"], [12, "doze"], [13, "treze"], [14, "catorze"],
    [15, "quinze"], [16, "dezasseis"], [17, "dezassete"], [18, "dezoito"], [19, "dezanove"]
  ]);

  function numeroPorExtenso(n) {
    if (n <= 9) return unidades.get(n);
    if (n >= 10 && n <= 19) return especiais.get(n);
    if (n >= 20 && n <= 29) return n === 20 ? "vinte" : "vinte e " + unidades.get(n - 20);
    if (n === 30) return "trinta";
    if (n === 31) return "trinta e um";
    return n.toString();
  }

  const meses = new Map([
    [1, "janeiro"], [2, "fevereiro"], [3, "março"], [4, "abril"],
    [5, "maio"], [6, "junho"], [7, "julho"], [8, "agosto"],
    [9, "setembro"], [10, "outubro"], [11, "novembro"], [12, "dezembro"]
  ]);

  // Função para escrever o ano por extenso (2000–2030)
  function anoPorExtenso(a) {
    if (a === 2000) return "dois mil";
    if (a > 2000 && a < 2010) return "dois mil e " + numeroPorExtenso(a - 2000);
    if (a >= 2010 && a <= 2019) return "dois mil e " + especiais.get(a - 2000);
    if (a >= 2020 && a <= 2029) {
      let resto = a - 2020;
      return resto === 0 ? "dois mil e vinte" : "dois mil e vinte e " + numeroPorExtenso(resto);
    }
    if (a === 2030) return "dois mil e trinta";
    return a.toString();
  }

  // Validar ano
  if (ano < 2000 || ano > 2030) {
    return "Por favor introduza um ano entre 2000 e 2030.";
  }

  // Validar mês
  if (mes < 1 || mes > 12) {
    return "Por favor introduza um mês entre 1 e 12.";
  }

  // Dias máximos de cada mês
  const diasPorMes = {
    1: 31, 2: 28, 3: 31, 4: 30,
    5: 31, 6: 30, 7: 31, 8: 31,
    9: 30, 10: 31, 11: 30, 12: 31
  };

  // Verificar se é bissexto
  const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
  if (mes === 2 && bissexto) {
    diasPorMes[2] = 29;
  }

  // Validar dia
  if (dia < 1 || dia > diasPorMes[mes]) {
    if (mes === 2 && !bissexto) return "Por favor introduza um dia entre 1 e 28.";
    if (mes === 2 && bissexto) return "Por favor introduza um dia entre 1 e 29.";
    if ([4, 6, 9, 11].includes(mes)) return "Por favor introduza um dia entre 1 e 30.";
    return "Por favor introduza um dia entre 1 e 31.";
  }

  // Se passou nas validações → retorna a data por extenso
  return `${numeroPorExtenso(dia)} de ${meses.get(mes)} de ${anoPorExtenso(ano)}`;
}