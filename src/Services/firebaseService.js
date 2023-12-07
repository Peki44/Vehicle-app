import { collection, addDoc, query, getDocs } from 'firebase/firestore';
import { db } from '../Firebase/config';

class FirebaseService {

  async addBrand(vehicleMake) {
    const docRef = await addDoc(collection(db, 'VehicleMake'), vehicleMake);
    console.log('VehicleMake added with ID:', docRef.id);
  }
  async getAllBrands() {
    const q = query(collection(db, 'VehicleMake'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }
  async addVehicleModel(productData) {
    await addDoc(collection(db, 'VehicleModels'), productData);
  }
  async getAllModels() {
    const q = query(collection(db, 'VehicleModels'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  }
}

const firebaseService = new FirebaseService();
export default firebaseService;