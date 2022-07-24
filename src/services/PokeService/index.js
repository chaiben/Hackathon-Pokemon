import { API_URL_GETALLPOKES, API_URL_GETALLTYPES } from "../../constants";
import APIService from "../APIService";

class PokeService extends APIService {
  constructor(){
    super()
    this.allPoke = false;
    this.allTypes = false;
  }

  async getAllPoke() {
    if(this.allPoke)
      return this.allPoke

    const response = await this.APICall(API_URL_GETALLPOKES)
    this.allPoke = response.data.results

    return this.allPoke
  }

  async getAllTypes() {
    if(this.allTypes)
      return this.allTypes

    const response = await this.APICall(API_URL_GETALLTYPES)

    this.allTypes = response.data.results

    return this.allTypes
  }

  async getPokeList(url, search) {
    let result
    // If "url" is empty we want all Pokes
    if(!url)
      result = await this.getAllPoke()
    else {
      // Else, we want to get the Pokes from the API call
      const response = await this.APICall(url)

      // Format the response to have the "name", "url" array.
      result = response.data.pokemon.map(item => {return item.pokemon})
    }

    // Filter list
    const filteredResult = [...result].filter(item => {
      return item.name.toLowerCase().includes(search)
    });

    return filteredResult
  }
}

export default new PokeService()