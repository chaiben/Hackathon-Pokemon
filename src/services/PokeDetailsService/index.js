import { API_URL_GETPOKE } from "../../constants";
import APIService from "../APIService";

class PokeDetailsService extends APIService {
  constructor(){
    super()
      this.id = false
      this.poke = false
  }

  async getPoke(id) {
    if(this.id)
      return this
    
    this.id=id
    const response = await this.APICall(`${API_URL_GETPOKE}${id}/`)
    this.poke = response.data
    return this
  }

  get height(){
    return this.poke.height
  }
  get weight(){
    return this.poke.weight
  }

}

export default new PokeDetailsService()