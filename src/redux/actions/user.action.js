import Axios from "axios";
import { startLoading, stopLoading } from "./common.actions";
export function loginRequest(user, history) {
  return (dispatch) => {
    dispatch(startLoading());
    //   call api
    // c1
    // Axios({
    //   method: "POST",
    //   url: "đường dẫn api",
    //   data: {},
    // });
    // c2
    Axios.post(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      user
    )
      .then(function (res) {
        console.log(res);
        // lưu xuống localStorage
        localStorage.setItem("user", JSON.stringify(res.data));
        //   chuyển về trang trước đó
        //history.goBack();
        //chuyen ve home
        history.push("/home");
        dispatch(stopLoading());
      })
      .catch(function (err) {
        // thông báo lồi cho người dùng
        console.log(err);
        dispatch(stopLoading());
      });
  };
}
