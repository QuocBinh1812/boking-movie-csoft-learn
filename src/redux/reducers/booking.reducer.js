const initialState = {
  danhSachGhe: [],
};
function bookingRedurcer(state = initialState, actions) {
  const { type, payload } = actions;
  switch (type) {
    case "GET_BOOKING_SUCCESS": {
      return { ...state, danhSachGhe: payload.danhSachGhe };
    }
    case "CHON_GHE": {
      const index = state.danhSachGhe.findIndex(
        (ghe) => ghe.maGhe === payload.maGhe
      );
      const gheCu = state.danhSachGhe[index];
      const gheMoi = { ...gheCu, dangChon: !gheCu.dangChon };
      state.danhSachGhe[index] = gheMoi;
      const danhSachGhe = [...state.danhSachGhe];
      return { ...state, danhSachGhe };
    }
    default:
      return state;
  }
}
export default bookingRedurcer;
