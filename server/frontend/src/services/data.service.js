import axios from "axios";

const API_URL = "http://localhost:3000/api/";

class DataService {
  getClients() {
    return axios.get(API_URL + "clients");
  }

  getClient(id) {
    return axios.get(API_URL + "clients/" + id);
  }

  editClient(data) {
    return axios
      .put(API_URL + "clients", data);
  }

  addClient(data) {
    return axios
      .post(API_URL + "clients", data);
  }

  addProvider(data) {
    return axios
      .post(API_URL + "providers", data);
  }

  deleteProvier(providerID) {
    return axios
      .delete(API_URL + "providers/" + providerID);
  }

  editProvider(data) {
    return axios
      .put(API_URL + "providers", data);

  }

  deleteClient(clientId) {
    return axios
      .delete(API_URL + "clients/" + clientId);
  }

  async editClient(data) {
    const response = await axios
      .put(API_URL + "clients", data);
    return response.data;
  }

  getProviders() {
    return axios.get(API_URL + "providers");
  }


  searchByType(type, name) {
    return axios.get(API_URL + "products/search?type=" + type + "&name=" + name);
  }

}

export default new DataService();