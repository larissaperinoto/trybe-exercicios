class Estudante {
  matricula: number;
  nome: string;
  provas: number[];
  trabalhos: number[];

  soma(): number {
    return [...this.provas, ...this.trabalhos]
      .reduce((acc, curr) => acc + curr);
  }

  media(): number {
    const notas = this.soma();
    const quantidadeNotas = this.provas.length + this.trabalhos.length;
    return notas / quantidadeNotas;
  }

}