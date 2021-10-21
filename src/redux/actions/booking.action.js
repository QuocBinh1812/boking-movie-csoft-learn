import Axios from "axios";
import Booking from "../../pages/booking";
export function getBookingRequest(maLichChieu) {
  //ham chiu trach nhiem xu ly bat dong bo
  return async (dispatch) => {
    // phai co async de su dung  await Axios
    //call api
    try {
      //request
      const res = await Axios.get(
        `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
      );
      console.log("res :", res);
      //success
      if (res.status === 200 || res.status === 201) {
        //200 vs 201 la thanh cong
        //dispatch len reducer
        dispatch(getBookingSuccess(res.data)); //dung dispatch tu redux thunk
      }
    } catch (error) {
      console.log(error);
      //failed
      dispatch(getBookingFailed(error));
    }
  };
}
function getBookingSuccess(booking) {
  return {
    type: "GET_BOOKING_SUCCESS",
    payload: booking,
  };
}
function getBookingFailed(error) {
  return {
    type: "GET_BOOKING_Failed",
    payload: error,
  };
}

export function postBookingRequest(maLichChieu, danhSachVe) {
  return async function (dispatch) {
    try {
      //get local
      const user = JSON.parse(localStorage.getItem("user"));
      //call api
      const res = await Axios({
        method: "POST",
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
        data: {
          maLichChieu,
          danhSachVe,
          taiKhoanNguoiDung: user.taiKhoan,
        },
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      });
      if (res.status === 200 || res.status === 201) {
        alert("thanh cong");
      }
    } catch (error) {}
  };
}
