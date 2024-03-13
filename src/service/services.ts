import { api } from "@/baseConfig";
import { AxiosError } from "axios";

export async function get(page: number = 0, pageSize: number = 10, name: string = ""): Promise<MembroCollection | null> {
    try {
        const { data: { content, number, size, totalElements, totalPages } } = await api.get("/membros/search", {
            params: {
                page: page,
                size: pageSize,
                name: name
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

export async function create(membro: Membro): Promise<Membro | null> {
    try {
        const data = await api.post("/membros/create", membro);
        const newMembro: Membro = data.data;
        
        return newMembro;
    } catch (error) {
        return null;
    }
}

export async function getDiaconos(): Promise<Diacono[] | null> {
    try {
        const { data: { content } } = await api.get("/diaconos", {
            params: {
                page: 0,
                size: 50
            }
        })
        const diaconos: Diacono[] = content;

        return diaconos;
    } catch (error) {
        return null;
    }
}

export async function remove(id: number): Promise<void | AxiosError> {
    try {
        await api.delete(`membros/delete/${id}`);
    } catch (error) {
        return error as AxiosError;
    }
}

export async function update(membro: Membro): Promise<void | AxiosError> {
    try {
        await api.put("membros/update", {
            ...membro,
            diaconoResponsavelId: membro.diaconoResponsavel?.id
        })
    } catch (error) {
        return error as AxiosError
    }
}