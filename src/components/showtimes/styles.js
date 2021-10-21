import { makeStyles } from "@material-ui/core";
// tạo ra styles
const useStyles = makeStyles((theme) => {
  return {
    btnBooking: {
      // lấy màu trong theme ra sử dụng
      backgroundColor: theme.palette.newColor,
      "&:hover": {
        backgroundColor: theme.palette.newColor,
      },
    },
  };
});

export default useStyles;
