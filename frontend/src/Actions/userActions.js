import axios from "axios";
export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `/myapp/login`,
      {
        username,
        password,
      },
      config
    );
    dispatch({ type: "loginSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "loginFailure", payload: error.message });
  }
};

export const register =
  (name, username, password, cpassword) => async (dispatch) => {
    try {
      dispatch({ type: "registerRequest" });
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        `/myapp/register`,
        {
          name,
          username,
          password,
          cpassword,
        },
        config
      );
      dispatch({ type: "registerSuccess", payload: data.user });
    } catch (error) {
      dispatch({
        type: "registerFailure",
        payload: error.response.data.message,
      });
    }
  };

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loaduserRequest" });
    const { data } = await axios.get("/myapp/me");
    dispatch({ type: "loaduserSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "loaduserFailure", payload: error.message });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: "logoutRequest" });
    await axios.get("/myapp/logout");
    dispatch({ type: "logoutSuccess" });
  } catch (error) {
    dispatch({ type: "logoutFailure", payload: error.message });
  }
};
