import { create } from 'zustand';
import axios from 'axios';
import ErrorPage from '../components/ErrorPage';

const employeeStore = create((set) => ({
  //states
  employees: null,
  createEmployee: {
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
  getEmployees: async () => {
    try {
      const response = await axios.get('/employees');
      set({ employees: response.data.employees });
    } catch (error) {
      console.log(error);
      return <ErrorPage />;
    }
  },
  updateCreateEmployees: (e) => {
    try {
      const { name, value } = e.target;
      set((state) => {
        return {
          createEmployee: {
            ...state.createEmployee,
            [name]: value,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },

  handleAddEmployee: async (e) => {
    try {
      e.preventDefault();
      const { createEmployee, employees } = employeeStore.getState();
      const response = await axios.post(
        'http://localhost:1994/employees',
        createEmployee
      );
      set({
        employees: [...employees, response.data.employee],
        createEmployee: {
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
    } catch (error) {
      console.log(error.message);
    }
  },
  deleteEmployee: async (_id) => {
    try {
      const response = await axios.delete(
        `http://localhost:1994/employees/${_id}`
      );
      const { employees } = employeeStore.getState();

      const newEmployees = employees.filter((item) => {
        return item._id !== _id;
      });
      set({ employees: newEmployees });
    } catch (error) {
      console.log(error);
    }
  },
  handleUpdate: (e) => {
    try {
      const { value, name } = e.target;

      set((state) => {
        return {
          updateForm: {
            ...state.updateForm,
            [name]: value,
          },
        };
      });
    } catch (error) {
      console.log(error);
    }
  },
  editEmployee: (item) => {
    try {
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
    } catch (error) {
      console.log(error);
    }
  },
}));
export default employeeStore;
