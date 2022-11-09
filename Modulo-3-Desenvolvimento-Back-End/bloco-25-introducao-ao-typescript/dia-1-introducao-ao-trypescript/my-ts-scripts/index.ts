import readline from "readline-sync";

const scripts = [
  { name: "Converter comprimento", script: "./length"},
  { name: "Converter volume", script: "./volume" },
  { name: "Converter capacidade", script: "./capacity" },
  { name: "Converter massa", script: "./mass" },
  { name: "Converter área", script: "./area" },
];

const names = scripts.map((script) => script.name);

const choice = readline.keyInSelect(names, "Escolha um número para executar o script de conversão de unidade");

require(scripts[choice].script);
