function dadosFuncionario(
    nome: string, 
    sobrenome: string, 
    idade: number, 
    email: string,
    status: boolean, 
    salario: number, 
    tempoEmpresa: any) {

    console.log("======= Dados Empregado Empresa: XPTO ========");
    console.log("Nome................: " + nome);
    console.log("Sobrenome...........: " + sobrenome);
    console.log("Idade...............: " + idade);
    console.log("E-mail..............: " + email);
    console.log("Status..............: " + status);
    console.log("Salário.............: R$ " + salario);
    console.log("Tempo de Empresa....: " + tempoEmpresa);
}

dadosFuncionario("Glaucia", "Lemos", 30, "glaucia@xpto.com" , true, 1000, "Não sei....");


/**
 * 
 * Tipos em TypeScript:
* Number: todos valores numéricos são representados por tipo number. Não há definições separadas 
para: inteiros, floats ou outros.

* String: é do tipo texto. E podem ser escritos com aspas simples ” ou aspas duplas “”.

* Boolean: true ou false. Se usar 0 ou 1 irá causar um erro de compilação.

* Any: uma variável com esse tipo pode ter uma variável setada para string, 
number ou qualquer outro tipo;

* Arrays: há duas possibilidades de sintaxes: my_arr: number[];  ou my_arr: Array;

* Void: usado em funções que não retornam valores.

 */