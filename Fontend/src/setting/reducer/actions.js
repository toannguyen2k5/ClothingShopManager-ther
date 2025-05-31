import * as types from "./actionTypes";

export function login_success(user) {
  console.log("user:", user);
  let user_info = {
    id_user: user.idUser,
    email: user.email,
    avatar: user.avatar,
    full_name: user.fullName,
    role: user.role,
    role_level: user.roleLevel,
  };
  return {
    type: types.login_success,
    user_info,
  };
}

export function login_fail(user) {
  let user_info = {
    email: user.email,
    code: null,
    avatar: null,
    full_name: null,
    time: user.time,
    ip_adress: user.ip_adress,
    role: null,
    role_level: 0,
  };
  return {
    type: types.login_fail,
    user_info,
  };
}

export function log_out() {
  let user_info = {
    email: null,
    code: null,
    avatar: null,
    full_name: null,
    time: null,
    ip_adress: null,
    role: null,
    role_level: 0,
  };
  return {
    type: types.logout,
    user_info,
  };
}

export function revert_state() {
  return {
    type: types.revert_state,
  };
}

export function current_page(info) {
  if (info.old_page.name !== info.name_new)
    return {
      type: types.current_page,
      info: {
        name: info.name_new,
        path: info.path_new,
      },
    };
  else
    return {
      type: types.no_change,
    };
}

export function current_nav(info) {
  if (info.old_page.name_active !== info.name_active)
    return {
      type: types.current_nav,
      info: {
        name_active: info.name_active,
      },
    };
  else if (info.old_page.name_sub_active !== info.name_sub_active)
    return {
      type: types.current_nav,
      info: {
        name_sub_active: info.name_sub_active,
      },
    };
  else
    return {
      type: types.current_nav,
      info: {
        name_active: "",
        name_sub_active: "",
      },
    };
}

export function set_code_build_state(info) {
  return {
    type: types.set_code_build_state,
    info,
  };
}

export function change_show_sector(info) {
  return {
    type: types.change_show_sector,
    info,
  };
}

export function change_state_data(data_page) {
  return {
    type: types.chang_state_data,
    data_page,
  };
}

export function add_product_to_cart(data) {
  return {
    type: types.add_product_to_cart,
    data,
  };
}
