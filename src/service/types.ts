interface Pageable {
    number: number,
    size: number,
    totalPages: number,
    totalElements: number
}

interface MembroCollection {
    membros: Membro[],
    pageable: Pageable
}