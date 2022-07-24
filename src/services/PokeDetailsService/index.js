import { API_URL_GETPOKE, URL_IMAGE, IMAGE_EXTENSION } from "../../constants";
import APIService from "../APIService";

class PokeDetailsService {
  constructor(poke) {
    if (typeof poke === "undefined") {
      throw new Error("Cannot be called directly - use 'init' method");
    }

    this.poke = poke;
  }

  static async init(id) {
    const apiService = new APIService();
    const response = await apiService.APICall(`${API_URL_GETPOKE}${id}/`);

    return new PokeDetailsService(response.data);
  }

  get id() {
    return this.poke.id;
  }

  get abilities() {
    return this.poke.abilities
      ? this.poke.abilities.map((value) => value.ability.name).join(", ")
      : "None";
  }

  get name() {
    return this.poke.name;
  }
  get height() {
    return `${Math.round(this.poke.height * 30.48 * 100) / 100} cm`;
  }
  get src() {
    return `${URL_IMAGE}${this.id}.${IMAGE_EXTENSION}`;
  }
  get types() {
    return this.poke.types
      ? this.poke.types.map((value) => value.type.name).join(", ")
      : "None";
  }
  get weight() {
    return `${Math.round(this.poke.weight * 0.453592 * 100) / 100} Kg`;
  }

  get stats() {
    return this.poke.stats.map((item) => ({
      title: item.stat.name,
      value: item.base_stat,
    }));
  }
}

export default PokeDetailsService;
