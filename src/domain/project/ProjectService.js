export default class ProjectSercvice {
  constructor(http) {
    this.http = http;
    this.baseURL = "https://rest-api-node.herokuapp.com/projects";
  }

  async listAll() {
    try {
      const response = await this.http.get(this.baseURL);
      return response.body;
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  }

  async save(project) {
    try {
      const response = await this.http.post(`${this.baseURL}/create`, project);
      return response.body;
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  }

  async delete(id) {
    try {
      const response = await this.http.delete(`${this.baseURL}/delete/${id}`);
      return response.body;
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  }
}
