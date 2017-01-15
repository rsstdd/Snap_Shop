export default  class CatalogCtrl {
    constructor(catalogSvc) {
      this.searchText = '';
      this.catalogSvc = catalogSvc;
      catalogSvc.getCameras()
        .then((cameras) => {
          this.cameras = cameras;
        })
        .catch((err) => console.log(err));
    }

    getCameras() {
      console.log(cameras);
      return this.catalogSvc.cameras;
    }
}

CatalogCtrl.$inject = ['CatalogService'];
