import { makeObservable, observable, action } from 'mobx';
import firebaseService from '../Services/firebaseService';

class DataStore {
  brands = [];
  models = [];

  constructor() {
    makeObservable(this, {
      brands: observable,
      models:observable,
      setVehicleMakes: action,
      setVehicleModels:action,
    });
  }
  setVehicleMakes(brands) {
    this.brands=brands;
  }
  setVehicleModels(models) {
    this.models=models;
  }

  async addBrand(vehicleMake){
    try{
        await firebaseService.addBrand(vehicleMake);
    }catch (error) {
        console.error('Error submitting form:', error);
    }
  }
  async fetchBrands() {
    try {
      const brands = await firebaseService.getAllBrands();
      console.log('Fetched vehicle makes:', brands);
      this.setVehicleMakes(brands);
    } catch (error) {
      console.error('Error fetching vehicle makes:', error);
    }
  }
  async addVehicleModel(productData) {
    try {
      await firebaseService.addVehicleModel(productData);
    } catch (error) {
      console.error('Error adding vehicle model:', error);
    }
  }
  async deleteVehicleModel(model){
    try {
        await firebaseService.deleteModels(model);
      } catch (error) {
        console.error('Error adding vehicle model:', error);
      }
  }
//   async fetchModels() {
//     try {
//         const models = await firebaseService.getAllModels();
//         console.log('Fetched vehicle models:', models);
//         this.setVehicleModels(models);
//       } catch (error) {
//         console.error('Error fetching vehicle makes:', error);
//       }
//   }

}

const dataStore = new DataStore();
export default dataStore;