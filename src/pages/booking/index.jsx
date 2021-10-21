import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux';
import {getBookingRequest,postBookingRequest} from '../../redux/actions/booking.action';
import {useSelector} from 'react-redux';
import { Button } from '@material-ui/core';
import useStyles from './styles'
import {useParams} from 'react-router-dom'
 const Booking=()=> {
     const {maLichChieu}=useParams();
     const dispatch =useDispatch();
     const classes = useStyles();
     const danhSachGhe = useSelector((state)=> state.booking.danhSachGhe);
     console.log("danhSachGhe: ",danhSachGhe);
     function trangThaiGhe(daDat,dangChon){
        if(daDat){
            return classes.daDat;
        }
        else{
            if(dangChon){
                return classes.dangChon;
            }
            return classes.chuaDat;

        }
       
     }
     function renderGhe(){
         return danhSachGhe.map((ghe,index)=>{
            return <>
                <Button className={trangThaiGhe(ghe.daDat,ghe.dangChon)} key={index}
                 onClick={()=>{
                     dispatch({
                         type:"CHON_GHE",
                         payload:ghe,
                     });
                 }}
                >{ghe.stt}</Button>
            </>
         })
     }
     function handleBooking(){
         let danhSachVe = danhSachGhe.filter((ghe)=> ghe.dangChon);
         danhSachVe=danhSachVe.map((ghe)=>({
            maGhe:ghe.maGhe,
            giaVe:ghe.giaVe,
         }));
         dispatch(postBookingRequest(maLichChieu,danhSachVe));
     }
     useEffect(function () {
            dispatch(getBookingRequest(maLichChieu));
     },[]);
    return (
        <div>
            <h1>booking</h1>
            <div>{renderGhe()}</div>
            <div>
                <button variant="containeid" color="secondary"
                onClick={handleBooking}
                >Dat ve</button>
            </div>
        </div>
    )
};
export default Booking;



