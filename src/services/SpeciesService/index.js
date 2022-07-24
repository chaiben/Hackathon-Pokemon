import APIService from "../APIService";

class SpeciesService {
  constructor(species) {
    if (typeof species === "undefined") {
      throw new Error("Cannot be called directly - use 'init' method");
    }

    this.species = species;
  }

  static async init(url) {
    const apiService = new APIService();
    const response = await apiService.APICall(url);

    return new SpeciesService(response.data);
  }

  get color(){
    return (this.species.color.name) ? this.species.color.name : ""
  }

  get name(){
    return (this.species.name) ? this.species.name : ""
  }

  get genus(){
    return (this.species.genera) ? this.species.genera[0].genus : ""
  }

  get habitat(){
    return (this.species.habitat) ? this.species.habitat.name : ""
  }

  get capture_rate(){
    return (this.species.capture_rate) ? this.species.capture_rate : ""
  }

  get growth_rate(){
    return (this.species.growth_rate) ? this.species.growth_rate.name : ""
  }

  get generation(){
    return (this.species.generation) ? this.species.generation.name : ""
  }

  get varieties() {
    return this.species.varieties.map(value => value.pokemon.name)
  }

  get evolution_chain_url() {
    return this.species.evolution_chain.url
  }
}

export default SpeciesService;
