import { data } from "jquery";
import { define_name_sector, define_nav } from "../store/const";
import * as types from "./actionTypes";
const initialState = {
  user_info: {
    email: null,
    code: null,
    avatar: null,
    full_name: null,
    time: null,
    ip_adress: null,
    role: null,
    role_level:0
  },
  sector: {
    name_current: define_name_sector.main.home,
  },
  data: [],
  code: false,
  data_page: {},
  current_page: {
    name: define_nav.admin.home.name,
    path: define_nav.admin.home.path,
    name_sub: "",
    name_active: define_nav.admin.home.name,
    name_sub_active: "",
  },
};
var CryptoJS = require("crypto-js");

function build_code_build_state(mac) {
  const specialChars = "!@#$^&%*()+=-[]_/{}|:<>?,";
  let code_mac = [
    [
      mac.split(""),
      "build_state".split("").sort().reverse(),
      mac.split("").sort(),
    ]
      .join("")
      .split("")
      .filter((item) => item != "")
      .reverse(),
    mac.split("").join("."),
    mac.split("").sort().reverse().join("."),
  ].join("+");
  for (var i = 0; i < specialChars.length; i++) {
    code_mac = code_mac.replace(new RegExp("\\" + specialChars[i], "gi"), "");
  }
  for (let i = 0; code_mac.indexOf(".") >= 0; i++) {
    code_mac = code_mac.replace(".", "");
    let arr = code_mac.split("");
    arr[Math.floor(Math.random() * code_mac.length)] = "";
    arr[Math.floor(Math.random() * code_mac.length)] = "";
    arr[Math.floor(Math.random() * code_mac.length)] = "";

    code_mac = arr.join("");
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    while (code_mac.length < 40)
      code_mac += characters[Math.floor(Math.random() * code_mac.length)];
    while (code_mac.length > 40) {
      let arr1 = code_mac.split("");
      arr1[Math.floor(Math.random() * code_mac.length)] = "";

      code_mac = arr1.join("");
    }
  }

  localStorage.setItem("build_state", code_mac);
}

function buildcode(new_state) {
  try {
    localStorage.setItem(
      "state_data",
      CryptoJS.AES.encrypt(
        JSON.stringify(new_state),
        localStorage
          .getItem("build_state")
          .split("")
          .filter((item, index) => index % 2 === 0)
          .join("+_=")
      ).toString()
    );
  } catch (err) {
    console.log("Bug");
  }
}
export var extractcode = (state, code) => {
  let data_tring = "";
  try {
    data_tring = CryptoJS.AES.decrypt(
      state.toString(),
      localStorage
        .getItem("build_state")
        .split("")
        .filter((item, index) => index % 2 === 0)
        .join("+_=")
    ).toString(CryptoJS.enc.Utf8);
  } catch (err) {
    data_tring = "build.state";
  }

  return data_tring;
};

export const changeState = (state = initialState, action) => {
  switch (action.type) {
    case types.login_success: {
      let new_state = { ...state, code: true, user_info: action.user_info };
      buildcode(new_state);
      return new_state;
    }
    case types.login_fail: {
      let new_state = { ...state, code: false, user_info: action.user_info };
      buildcode(new_state);
      return new_state;
    }
    case types.logout: {
      let new_state = { ...state, code: false, user_info: action.user_info };
      buildcode(new_state);
      return new_state;
    }
    case types.current_page: {
      let new_state = {
        ...state,
        current_page: { ...state.current_page, ...action.info },
      };
      buildcode(new_state);
      return new_state;
    }

    case types.current_nav: {
      let new_state = {
        ...state,
        current_page: { ...state.current_page, ...action.info },
      };
      buildcode(new_state);
      return new_state;
    }
    case types.revert_state: {
      let state_data = localStorage.getItem("state_data");
      if (
        state_data !== undefined &&
        state_data !== null &&
        state_data.trim() !== "" &&
        JSON.stringify(state) !== extractcode(state_data)
      ) {
        try {
          return JSON.parse(extractcode(state_data));
        } catch (err) {
          return initialState;
        }
      } else {
        return state;
      }
    }
    case types.no_change: {
      return state;
    }
    case types.set_code_build_state: {
      if (!state.code) build_code_build_state(action.info);
      return state;
    }
    case types.change_show_sector: {
      let new_state = {
        ...state,
        sector: { ...state.sector, ...action.info },
      };
      buildcode(new_state);
      return new_state;
    }
    case types.chang_state_data: {
      let new_state = {
        ...state,
        data_page: { ...state.data_page, ...action.data_page },
      };
      buildcode(new_state);
      return new_state;
    }
    default:
      return state;
  }
};

export const make_id = (length) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const build_code = (data, code) => {
  try {
    localStorage.setItem("state_data", CryptoJS.AES.encrypt(data, code));
  } catch (err) {
    console.log("Bug");
  }
};
