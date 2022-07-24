import { API_URL_GETPOKE } from "../../constants";
import APIService from "../APIService";

class PokeDetailsService {
  constructor(id, poke) {
    if (typeof id === 'undefined' || typeof poke === 'undefined') {
      throw new Error('Cannot be called directly');
    }

    this.id = id;
    this.poke = poke;
  }

  static async init(id) {
    const apiService = new APIService();
    const response = await apiService.APICall(`${API_URL_GETPOKE}${id}/`);

    return new PokeDetailsService(id, response.data);
  }

  get name() {
    return this.poke.name;
  }
  get height() {
    return this.poke.height;
  }
  get weight() {
    return this.poke.weight;
  }
}

export default PokeDetailsService;
