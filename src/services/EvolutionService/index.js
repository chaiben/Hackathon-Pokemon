import APIService from "../APIService";

class EvolutionService {
  constructor(species) {
    if (typeof species === "undefined") {
      throw new Error("Cannot be called directly - use 'init' method");
    }

    this.species = species;
  }
  
  evolutionChain(value, result){
    if(result === undefined)
      result = []
    if(value.evolves_to.length === 0){
      result = [...result, value.species]
      return result
    }
    result = [...result, value.species]
    return this.evolutionChain(value.evolves_to[0], result)
  }

  static async init(url) {
    const apiService = new APIService();
    const response = await apiService.APICall(url);

    return new EvolutionService(response.data);
  }

  get chain(){
    return this.species.chain
  }
}

export default EvolutionService;
