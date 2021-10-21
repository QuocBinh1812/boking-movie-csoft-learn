import Axios from "axios";
import { startLoading, stopLoading } from "./common.actions";
export function getMovieListRequest() {
  return (dispatch) => {
    // start loading
    dispatch(startLoading());
    // call api
    Axios.get(
      "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
    )
      .then((res) => {
        console.log(res);
        dispatch(getMovieListSuccess(res.data));
        // stop loading
        // test
        setTimeout(function () {
          dispatch(stopLoading());
        }, 4000);
        // dispatch(stopLoading());
      })
      .catch((error) => {
        console.log(error);
        dispatch(getMovieListFailed(error));
        // stop loading
        dispatch(stopLoading());
      });
  };
}

function getMovieListSuccess(movieList) {
  return {
    type: "GET_MOVIE_lIST_SUCCESS",
    payload: movieList,
  };
}

function getMovieListFailed(error) {
  return {
    type: "GET_MOVIE_lIST_FAILED",
    payload: error,
  };
}

export function getMovieDetailRequest(movieCode) {
  return function (dispatch) {
    // call api
    Axios.get(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${movieCode}`
    )
      .then(function (res) {
        console.log(res);
        dispatch(getMovieDetailSuccess(res.data));
      })
      .catch(function (err) {
        console.log(err);
        dispatch(getMovieDetailFailed(err));
      });
  };
}

function getMovieDetailSuccess(movieDetail) {
  return {
    type: "GET_MOVIE_DETAIL_SUCCESS",
    payload: movieDetail,
  };
}
function getMovieDetailFailed(error) {
  return {
    type: "GET_MOVIE_DETAIL_FAILED",
    payload: error,
  };
}
