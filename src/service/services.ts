import { api } from "@/baseConfig";

export async function getAll(page: number = 0, pageSize: number = 10): Promise<MembroCollection | null> {
    try {
        const { data: { content, number, size, totalElements, totalPages } } = await api.get("/membros", {
            params: {
                page: page,
                size: pageSize
            }
        });

        return { 
            membros: content, 
            pageable: { number, size, totalElements, totalPages } 
        };
    } catch (error) {
        return null;
    }
}

export async function getById(id: number): Promise<Membro | null> {
    try {
        const data = await api.get(`/membros/${id}`);

        const membro: Membro = data.data;

        return membro;
    } catch (error) {
        return null;
    }
}