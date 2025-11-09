// Buscar aulas do dia
export async function buscarAulasDoDiaAPI() {
    try {
        const response = await fetch('/api/aulas/dia')

        if (!response.ok) {
            console.error('Erro na resposta:', response.status, response.statusText)
            throw new Error('Erro ao carregar aulas do dia.')
        }

        const data = await response.json()
        return data

    } catch (error) {
        console.error('Erro ao carregar aulas do dia.', error)
        throw error
    }
}

// Buscar aulas da data selecionada
export async function buscarAulasPorDataAPI(dataSelecionada) {
    try {
        const response = await fetch(`/api/aulas/data/${dataSelecionada}`);

        if (!response.ok) {
            console.error('Erro na resposta:', response.status, response.statusText)
            throw new Error('Erro ao carregar aulas da data selecionada.')
        }

        const data = await response.json()
        return data

    } catch (error) {
        console.error('Erro ao carregar aulas da data selecionada.', error)
        throw error
    }
}

// Adicionar nova aula
export async function adicionarAulaAPI(novaAula) {
    try {
        const response = await fetch('/api/aulas', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novaAula)
        })

        if (!response.ok) {
            console.error('Erro na resposta:', response.status, response.statusText)
            throw new Error('Erro ao adicionar aula.')
        }

        const data = await response.json()
        return data

    } catch (error) {
        console.error('Erro ao adicionar aula.', error)
        throw error
    }
}

// Atualizar informações da aula (horário)
export async function atualizarAulaAPI(id, dados) {
    try {
        const response = await fetch(`/api/aulas/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })

        if (!response.ok) {
            console.error('Erro na resposta:', response.status, response.statusText)
            throw new Error('Erro ao atualizar informações da aula.')
        }

        const data = await response.json()
        return data

    } catch (error) {
        console.error('Erro ao atualizar informações da aula.', error)
        throw error
    }
}

// Eliminar aula
export async function eliminarAulaAPI(id) {
    try {
        const response = await fetch(`/api/aulas/${id}`, {
            method: 'DELETE'
        })

        if (!response.ok) {
            console.error('Erro na resposta:', response.status, response.statusText)
            throw new Error('Erro ao eliminar aula.')
        }

        const data = await response.json()
        return data

    } catch (error) {
        console.error('Erro ao eliminar aula.', error)
        throw error
    }
}