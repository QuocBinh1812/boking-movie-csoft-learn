import {
  Button,
  makeStyles,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import format from "date-format";
import useStyles from "./styles";
import { useHistory } from "react-router-dom";

const ShowTimes = () => {
  // sử dụng styles
  const classes = useStyles();
  const history = useHistory();
  const lichChieu = useSelector((state) => {
    return state.movie.movieInfo?.lichChieu;
  });

  console.log(lichChieu);
  function renderListShowTimes() {
    return lichChieu?.map((showTime, index) => {
      return (
        <TableRow key={index}>
          <TableCell>{showTime.thongTinRap.tenHeThongRap}</TableCell>
          <TableCell>{showTime.thongTinRap.tenCumRap}</TableCell>
          <TableCell>
            {format("dd-MM-yy", new Date(showTime.ngayChieuGioChieu))}
          </TableCell>
          <TableCell>
            {format("hh:mm", new Date(showTime.ngayChieuGioChieu))}
          </TableCell>
          <TableCell>
            <Button
              color="primary" // xanh => đỏ
              variant="contained"
              className={classes.btnBooking} // ghi đè css
              onClick={() => {
                //chuyen sang trang booking
                history.push(`/booking/${showTime.maLichChieu}`);
              }}
            >
              đặt vé
            </Button>
          </TableCell>
        </TableRow>
      );
    });
  }
  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Tên Hệ Thống Rạp</TableCell>
              <TableCell>Tên Cụm Rạp</TableCell>
              <TableCell>Ngày Chiếu</TableCell>
              <TableCell>Giờ chiếu</TableCell>
              <TableCell>Đặt Vé</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{renderListShowTimes()}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ShowTimes;
