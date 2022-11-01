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
    dispatch({type:"loginSuccess",payload:data.user})
  } catch (error) {
    dispatch({type:"loginFailure",payload:error.response.data.message})
  }
};
