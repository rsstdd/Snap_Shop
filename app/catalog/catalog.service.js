export default class CatalogService {
  constructor($http) {
    this.$http = $http;
  }

  getCameras() {
    return this.$http.get('/api/cameras')
      .then((cameras) => {
        console.log(cameras.data);
        return cameras.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

CatalogService.$inject = ['$http'];
