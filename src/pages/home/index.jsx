import React, { Component } from "react";
import { getMovieListRequest } from "../../redux/actions/movie.actions";
import { connect } from "react-redux";
import { CircularProgress, Grid } from "@material-ui/core";
import MovieItem from "../../components/movieItem";
class Home extends Component {
  renderMovieList = () => {
    const { movieList } = this.props;
    // cách 1
    // if (movieList) {
    //   return movieList.map((movie, index) => {
    //     return (
    //       <Grid item sm={3} key={index}>
    //         <MovieItem movie={movie} />
    //       </Grid>
    //     );
    //   });
    // }
    // cách 2
    return movieList?.map((movie, index) => {
      return (
        <Grid item sm={3} key={index}>
          <MovieItem movie={movie} />
        </Grid>
      );
    });
  };
  render() {
    const { isLoading } = this.props;
    if (isLoading) {
      console.log("Loading");
      return <CircularProgress />;
    }
    console.log("render");
    return (
      <div>
        <Grid container>{this.renderMovieList()}</Grid>
      </div>
    );
  }
  componentDidMount() {
    //   dispatch action
    this.props.dispatch(getMovieListRequest());
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.common.isLoading,
    movieList: state.movie.movieList,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getListMovie: () => {
//       dispatch(getMovieListRequest());
//     },
//   };
// };

export default connect(mapStateToProps)(Home);
