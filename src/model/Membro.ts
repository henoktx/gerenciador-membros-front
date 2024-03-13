interface Membro {
    id: number,
    nomeCompleto: string,
    apelido: string | null,
    endereco: string,
    telefone: string,
    dataNascimento: string,
    dataInclusao: string,
    diaconoResponsavel: Diacono | null 
}