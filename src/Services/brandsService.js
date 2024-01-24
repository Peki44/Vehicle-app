import { collection, addDoc, query, getDocs, deleteDoc, doc, updateDoc} from 'firebase/firestore';
import { db } from '../Firebase/config';

class BrandsService{
    async addBrand(vehicleMake) {
        const docRef = await addDoc(collection(db, 'VehicleMake'), vehicleMake);
        console.log('VehicleMake added with ID:', docRef.id);
    }
    async getAllBrands() {
        const q = query(collection(db, 'VehicleMake'));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    }
    async updateBrand(brandId,updatedData){
        try {
            await updateDoc(doc(db, 'VehicleMake', brandId),updatedData);
        } catch (error) {
            console.error('Error deleting document: ', error);
        }
    }
    async deleteBrands(id){
        try {
            await deleteDoc(doc(db, 'VehicleMake', id));
            console.log('Document successfully deleted!');
        } catch (error) {
            console.error('Error deleting document: ', error);
        }
    }
}
const brandsService = new BrandsService();
export default brandsService;