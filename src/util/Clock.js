import {useEffect, useState} from "react";

export default function Clock() {
   const [time, setTime] = useState('');

   useEffect(() => {
      let timer = setInterval(() => {
         let date = new Date();
         let seconds = (date.getSeconds() <= 9) ? "0"+date.getSeconds() : date.getSeconds();
         setTime(`${date.getHours()}:${date.getMinutes()}:${seconds}`);
      }, 1000)
      return () => clearInterval(timer);
   },[]);
/**   useEffect(() => {
      let timer = setTimeout(function showTime() {
         let date = new Date();
         let seconds = (date.getSeconds() <= 9) ? "0"+date.getSeconds() : date.getSeconds();
         setTime(`${date.getHours()}:${date.getMinutes()}:${seconds}`);
         timer = setTimeout(showTime, 1000);
      }, 1000)
   },[]); **/


   return <>
      {time}
   </>;
}
