import { createStore, combineReducers } from "redux";
import { changeState } from "../reducer/reducer";
import { define_name_sector, define_nav } from "./const";

const initialState = {
  changeState: {        // ✅ bọc vào đúng tên reducer
    user_info: {
      email: null,
      code: null,
      avatar: null,
      full_name: null,
      time: null,
      ip_adress: null,
      role: null,
      role_level: 0,
      phone_number: null,
    },
    data: [],
    data_cart: [],
    sector: {
      name_current: define_name_sector.main.home,
    },
    code: false,
    current_page: {
      name: define_nav.admin.home.name,
      path: define_nav.admin.home.path,
      name_sub: "",
      name_active: define_nav.admin.home.name,
      name_sub_active: "",
    },
  }
};

const root = combineReducers({
  changeState,
});

const store = createStore(root, initialState); // ✅ hết warning
export default store;