import AsyncStorage from '@react-native-async-storage/async-storage';

const getSuppliers = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('suppliers');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error('Erro ao obter fornecedores do AsyncStorage:', error);
    return [];
  }
};

const addSupplier = async (newSupplier) => {
  try {
    const suppliersList = await getSuppliers();
    suppliersList.push(newSupplier);
    await AsyncStorage.setItem('suppliers', JSON.stringify(suppliersList));
    console.log('Novo fornecedor adicionado com sucesso!');
  } catch (error) {
    console.error('Erro ao adicionar novo fornecedor:', error);
  }
};

const deleteSupplier = async (id) => {
  try {
    const suppliersList = await getSuppliers();
    const updateList = suppliersList.filter(supplier => supplier.id !== id);
    await AsyncStorage.setItem('suppliers', JSON.stringify(updateList));
    console.log('Fornecedor deletado com sucesso!');
  }
  catch (error) {
    console.error('Erro ao deletar o fornecedor:', error);
  }
}

export { getSuppliers, addSupplier, deleteSupplier }