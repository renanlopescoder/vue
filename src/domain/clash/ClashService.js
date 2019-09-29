export default class ClashService {
  constructor(http) {
    this.http = http;
    this.baseURL = "http://www.clashapi.xyz/api";
  }

  async getRandomDeck() {
    try {
      const response = await this.http.get(`${this.baseURL}/random-deck`);
      return response.body;
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  }

  async listAllArenas() {
    try {
      const response = await this.http.get(`${this.baseURL}/arenas`);
      return response.body;
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  }
}
