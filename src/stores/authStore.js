import { create } from 'zustand';
import axios from 'axios';

const authStore = create((set) => ({
  //states
  loggedIn: null,
  loginForm: {
    email: '',
    password: '',
  },
  signupForm: {
    name: '',
    email: '',
    password: '',
    number1: '',
    number2: '',
    building: '',
    street: '',
    city: '',
    counting: '',
    pobox: '',
    letterhead: '',
  },

  //functions
  updateLoginForm: (e) => {
    const { name, value } = e.target;
    set((state) => {
      return {
        loginForm: {
          ...state.loginForm,
          [name]: value,
        },
      };
    });
  },
  updateSignupForm: (e) => {
    const { name, value } = e.target;
    set((state) => {
      return {
        signupForm: {
          ...state.signupForm,
          [name]: value,
        },
      };
    });
  },
  login: async (e) => {
    try {
      const { loginForm } = authStore.getState();
      const response = await axios.post('/login', loginForm);
      set({
        loggedIn: true,
        loginForm: {
          email: '',
          password: '',
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  },
  checkAuth: async () => {
    try {
      await axios.get('/check-auth');
      set({ loggedIn: true });
    } catch (error) {
      set({ loggedIn: false });
      console.log(error.message);
    }
  },
  signup: async () => {
    const { signupForm } = authStore.getState();
    const response = await axios.post('/signup', signupForm);
    set({
      signupForm: {
        name: '',
        email: '',
        password: '',
        number1: '',
        number2: '',
        building: '',
        street: '',
        city: '',
        counting: '',
        pobox: '',
        letterhead: '',
      },
    });
  },
  logout: async () => {
    await axios.get('/logout');
    set({ loggedIn: false });
  },
}));
export default authStore;
