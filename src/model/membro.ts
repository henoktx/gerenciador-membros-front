interface Membro {
    id: number,
    nomeCompleto: string,
    apelido: string | null,
    endereco: string,
    telefone: string,
    dataNascimento: string,
    dataInclusao: string,
    diaconoResponsavelId: number | null 
}