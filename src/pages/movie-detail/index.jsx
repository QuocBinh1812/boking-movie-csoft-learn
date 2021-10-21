import React, { useEffect, useState } from "react";
import { getMovieDetailRequest } from "../../redux/actions/movie.actions";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ShowTimes from "../../components/showtimes";
const MovieDetail = () => {
  const dispatch = useDispatch();
  let [star, setStar] = useState(0);  // 0 la gia tri khoi tao cho star
  // lấy params trên url
  const { movieCode } = useParams();
  // chạy khi render chạy lại
  useEffect(function () {
    //  dispatch action , call api , tương tác DOM
    console.log("useEffect");
    // closure function js
    return function () {
      // dọn dẹp các tác vụ clearInterval , cleartimeout
    };
  });

  // chỉ chạy một lần , khi component được
  useEffect(function () {
    //  dispatch action , call api , tương tác DOM
    console.log("useEffect chạy một lần duy nhất");
    dispatch(getMovieDetailRequest(movieCode));
    // closure function js
    return function () {
      // dọn dẹp các tác vụ clearInterval , cleartimeout
    };
  }, []);

  // chạy khi star thay đổi
  useEffect(
    function () {
      //  dispatch action , call api , tương tác DOM
      console.log("useEffect chạy khi star thay đổi");
      // closure function js
      return function () {
        // dọn dẹp các tác vụ clearInterval , cleartimeout
      };
    },
    [star]
  );

  return (
    <div>
      <p>{star}</p>
      <button
        onClick={() => {
          const newStar = star + 1;
          setStar(newStar);
        }}
      >
        tăng sao
      </button>
      <ShowTimes />
    </div>
  );
};

export default MovieDetail;
