import { create } from 'zustand';
import axios from 'axios';

const animalStore = create((set) => ({
  //states
  animals: null,
  createAnimal: {
    name: '',
    sex: '',
    dob: '',
    bred: '',
    breed: '',
    dame: '',
    sire: '',
    grandDame: '',
    grandSire: '',
    weaning: '',
    weightBirth: '',
    weightWean: '',
    weight8: '',
    weightCurrent: '',
    weightSale: '',
    firstService: '',
    totalService: '',
    totalLitters: '',
    totalKits: '',
    aliveKits: '',
    deadKits: '',
    soldKits: '',
    butcheredKits: '',
  },
  updateForm: {
    name: '',
    sex: '',
    dob: '',
    bred: '',
    breed: '',
    dame: '',
    sire: '',
    grandDame: '',
    grandSire: '',
    weaning: '',
    weightBirth: '',
    weightWean: '',
    weight8: '',
    weightCurrent: '',
    weightSale: '',
    firstService: '',
    totalService: '',
    totalLitters: '',
    totalKits: '',
    aliveKits: '',
    deadKits: '',
    soldKits: '',
    butcheredKits: '',
    _id: null,
  },

  //functions
  getAnimals: async () => {
    const response = await axios.get('http://localhost:1994/animals');
    set({ animals: response.data.animals });
  },
  updateCreateAnimals: (e) => {
    const { name, value } = e.target;
    set((state) => {
      return {
        createAnimal: {
          ...state.createAnimal,
          [name]: value,
        },
      };
    });
  },

  handleAddAnimal: async (e) => {
    e.preventDefault();
    const { createAnimal, animals } = animalStore.getState();
    const response = await axios.post(
      'http://localhost:1994/animals',
      createAnimal
    );
    set({
      animals: [...animals, response.data.animal],
      createAnimal: {
        name: '',
        sex: '',
        dob: '',
        bred: '',
        breed: '',
        dame: '',
        sire: '',
        grandDame: '',
        grandSire: '',
        weaning: '',
        weightBirth: '',
        weightWean: '',
        weight8: '',
        weightCurrent: '',
        weightSale: '',
        firstService: '',
        totalService: '',
        totalLitters: '',
        totalKits: '',
        aliveKits: '',
        deadKits: '',
        soldKits: '',
        butcheredKits: '',
      },
    });
  },
  deleteAnimal: async (_id) => {
    const response = await axios.delete(`http://localhost:1994/animals/${_id}`);
    const { animals } = animalStore.getState();

    const newAnimals = animals.filter((item) => {
      return item._id !== _id;
    });
    set({ animals: newAnimals });
  },
  handleUpdate: (e) => {
    const { value, name } = e.target;

    set((state) => {
      return {
        updateForm: {
          ...state.updateForm,
          [name]: value,
        },
      };
    });
  },
  editAnimal: (item) => {
    set({
      updateForm: {
        name: item.name,
        sex: item.sex,
        dob: item.dob,
        bred: item.bred,
        breed: item.breed,
        dame: item.dame,
        sire: item.sire,
        grandDame: item.grandDame,
        grandSire: item.grandSire,
        weaning: item.weaning,
        weightBirth: item.weightBirth,
        weightWean: item.weightWean,
        weight8: item.weight8,
        weightCurrent: item.weightCurrent,
        weightSale: item.weightSale,
        firstService: item.firstService,
        totalService: item.totalService,
        totalLitters: item.totalLitters,
        totalKits: item.totalKits,
        aliveKits: item.aliveKits,
        deadKits: item.deadKits,
        soldKits: item.soldKits,
        butcheredKits: item.butcheredKits,
        _id: item._id,
      },
    });
  },

  updateAnimal: async (e) => {
    e.preventDefault();
    const {
      updateForm: {
        name,
        sex,
        dob,
        bred,
        breed,
        dame,
        sire,
        grandDame,
        grandSire,
        weaning,
        weightBirth,
        weightWean,
        weight8,
        weightCurrent,
        weightSale,
        firstService,
        totalService,
        totalLitters,
        totalKits,
        aliveKits,
        deadKits,
        soldKits,
        butcheredKits,
        _id,
      },
      animals,
    } = animalStore.getState();
    const response = await axios.put(`http://localhost:1994/animals/${_id}`, {
      name,
      sex,
      dob,
      bred,
      breed,
      dame,
      sire,
      grandDame,
      grandSire,
      weaning,
      weightBirth,
      weightWean,
      weight8,
      weightCurrent,
      weightSale,
      firstService,
      totalService,
      totalLitters,
      totalKits,
      aliveKits,
      deadKits,
      soldKits,
      butcheredKits,
    });

    const newAnimals = [...animals];
    const animalIndex = animals.findIndex((item) => {
      return item._id === _id;
    });
    newAnimals[animalIndex] = response.data.animal;

    set({
      animals: newAnimals,
      updateForm: {
        name: '',
        sex: '',
        dob: '',
        bred: '',
        breed: '',
        dame: '',
        sire: '',
        grandDame: '',
        grandSire: '',
        weaning: '',
        weightBirth: '',
        weightWean: '',
        weight8: '',
        weightCurrent: '',
        weightSale: '',
        firstService: '',
        totalService: '',
        totalLitters: '',
        totalKits: '',
        aliveKits: '',
        deadKits: '',
        soldKits: '',
        butcheredKits: '',
        _id: null,
      },
    });
  },
}));
export default animalStore;
