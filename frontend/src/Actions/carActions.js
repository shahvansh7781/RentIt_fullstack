import axios from "axios";

export const getallCars = () => async (dispatch) => {
  try {
    dispatch({ type: "allcarsRequest" });
    const { data } = await axios.get("/myapp/cars");
    dispatch({ type: "allcarsSuccess", payload: data.cars });
  } catch (error) {
    dispatch({ type: "allcarsFailure", payload: error.message });
  }
};
