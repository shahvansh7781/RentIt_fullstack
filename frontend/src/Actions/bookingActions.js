import axios from "axios";

export const newBooking =
  (carBooked, bookedSlot, totalHours, totalAmount) => async (dispatch) => {
    try {
      dispatch({ type: "newbookingRequest" });
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post("/myapp/booking/new",
      
      {
        carBooked,
       bookedSlot,
        totalHours,
        totalAmount
      }
      ,config);
      dispatch({type:"newbookingSuccess",payload:data.bookingDetails})
      alert("Booking success")
    } catch (error) {
        dispatch({type:"newbookingFailure",payload:error.response.data.message})
        alert(error.response.data.message)
    }
  };
  export const clearError = () => (dispatch) =>{
    dispatch({type:"clearError"});
  }