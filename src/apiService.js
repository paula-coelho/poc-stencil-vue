import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  // Método para obter todos os itens da lista
  async getItems() {
    try {
      const response = await apiClient.get('/todos');
      return response.data;
      // const response = await apiClient.get('/todos');
      // // Filtrar os itens para exibir apenas os inseridos pela aplicação
      // const items = response.data.filter(item => item.source === 'app');
      // return items;
    } catch (error) {
      console.error('Erro ao buscar itens da lista:', error);
      throw new Error('Erro ao buscar itens da lista. Por favor, tente novamente.');
    }
  },

  // Método para adicionar um novo item à lista
  async addItem(newItem) {
    try {
      const response = await apiClient.post('/todos', newItem);
      return response.data;
    } catch (error) {
      console.error('Erro ao adicionar item à lista:', error);
      throw new Error('Erro ao adicionar item à lista. Por favor, tente novamente.');
    }
  },

  // Método para atualizar um item existente na lista
  async updateItem(id, updatedItem) {
    try {
      const response = await apiClient.put(`/todos/${id}`, updatedItem);
      return response.data;
    } catch (error) {
      console.error('Erro ao atualizar item da lista:', error);
      throw new Error('Erro ao atualizar item da lista. Por favor, tente novamente.');
    }
  },

  // Método para excluir um item da lista
  async deleteItem(id) {
    try {
      const response = await apiClient.delete(`/todos/${id}`);
      return response.data;
    } catch (error) {
      console.error('Erro ao excluir item da lista:', error);
      throw new Error('Erro ao excluir item da lista. Por favor, tente novamente.');
    }
  },
};