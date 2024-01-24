import { collection, addDoc, query, getDocs, deleteDoc, doc, updateDoc, orderBy, startAfter, limit, where} from 'firebase/firestore';
import { db } from '../Firebase/config';

class ModelsService{
    async addVehicleModel(productData) {
        await addDoc(collection(db, 'VehicleModels'), productData);
      }
      async getAllModels() {
        const q = query(collection(db, 'VehicleModels'));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      }
      async updateModel(modelId,updatedData){
        try {
          await updateDoc(doc(db,'VehicleModels',modelId),updatedData);
        } catch (error) {
          console.error('Error deleting document: ', error);
        }
      }
      async deleteModels(id){
        try {
          await deleteDoc(doc(db, 'VehicleModels', id));
          console.log('Document successfully deleted!');
        } catch (error) {
          console.error('Error deleting document: ', error);
        }
      }
    
      async getModelsCount() {
        const q = query(collection(db, 'VehicleModels'));
        const querySnapshot = await getDocs(q);
        return querySnapshot.size;
      }
    
      async getPaginatedModels(page, limitNum,sortOption,brandOption) {
        let q = collection(db, 'VehicleModels');
        let orderData;
        let filterData=where('MakeId', '==', brandOption);
    
        if(sortOption !== ''){
          if (sortOption === 'nameAsc') {
            orderData=orderBy('Name', 'asc');
            // q = query(q, orderBy('Name', 'asc'));
          } else if (sortOption === 'nameDes') {
            orderData=orderBy('Name', 'desc');
          } else if (sortOption === 'priceLow') {
            orderData=orderBy('Price', 'asc');
          } else if (sortOption === 'priceHigh') {
            orderData=orderBy('Price', 'desc');
          }
        }else{
              orderData=orderBy('Name');
        }
    
        const startAfterDoc = page > 1 ? await this.getDocAtPosition((page-1)*limitNum- 1,orderData) : null;
      
        if (startAfterDoc) {
          brandOption !== '' ? q = query(q,filterData, orderData, startAfter(startAfterDoc),limit(limitNum)) : q = query(q, orderData, startAfter(startAfterDoc),limit(limitNum));
        }else{
          brandOption !== '' ? q = query(q,filterData, orderData,limit(limitNum)) : q = query(q, orderData,limit(limitNum))
        }
    
        const querySnapshot = await getDocs(q);
      
        return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      }
      
      async getDocAtPosition(position,orderData) {
        const q = query(collection(db, 'VehicleModels'),orderData);
        const querySnapshot = await getDocs(q);
      
        if (querySnapshot.size >= position) {
          return querySnapshot.docs[position];
        }
      
        return null;
      }
}
const modelsService = new ModelsService();
export default modelsService;