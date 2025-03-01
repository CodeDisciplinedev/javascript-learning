// let something = (callback) => {
//   console.log("something")
//   callback()
// }

// let something2 = () =>{
//   console.log("Something 2")
// }

// something(something2)


// javascript scronous ki tarah behave krti ha jase agar mene 2 code likhy wo to forn chl gae lekin jb mene esacode likha jis ko 1 mnt lage ga chlny ma to wo jb tk ni chlta  tb tk us k bd wala code bhi ni chlyga ya  sahi ni ha

// is se bachny k liye hum settimeout function us krty ha q k real world project k liye hum database se communicate krta ha agar mera database america ma ha to us ko phly request krni hogi us ma time lagy ga example k liye ye ha to settimeout function hum use kr skty ha  

// console.log("first")

// setTimeout(() =>{
// console.log("3sec late")
// },3000)

// console.log("second")


// const loginuser = (email , password ) =>{
//   setTimeout(() => {                       
//     return(email)
//   }, 2000);
// }
//  jb loginuser wala function chala to ye settimeout wala function to alag stack ma chala gya ab loginuser ma kuch bacha hi ni to ye undefine hogaya ab is k liye hum callback function use kr skty ha
// const useremail = loginuser("mastermin22", 2222 )
// console.log(useremail)

// const loginuser = (email , password , callbackfunc ) =>{
//    setTimeout(() => {                       
//       callbackfunc(email)
//      }, 2000);
// }
// loginuser("mastermin22", 2222 , (email) =>{console.log(email)} )



// ab callback ma bhi issue ha q ye callback hell bn jata ha isko samjhny ma preshani hoti ha aur code bhi zayda likhna prta ha is k liye hum promise use krty ha is ki example kuch esi ha mene ek function banya us ma parameter pass kr diya marks ab hum promise ki madad se isko resolve kr skty ha ya reject mtlb k mene kha k jis k 80 se uper ya 80 marks ha us ko pass kr do baki fail to ma rosolve aur reject laga skta ha wase hum kuch bhi likh skty ha resolve aur reject k ilwa bhi to ma resolve kr dunga jis k 80 huwe aur jis k 80 se km ae wo reject phr hum isko .then aur .catch ki madad se console.log kr k print krwaenge
// const promiss = (marks) =>{
//  return new Promise((resolve, reject) => {
//     if (marks >= 80) {
//       resolve("pass")
      
//     } else {
//       reject("fail")
      
//     }
//   })
// }

// promiss(80).then((pass)=>{
//   console.log(pass)
// }).catch((fail)=>{
//   console.log(fail)
// })

// callback ma ek issue tha k wo nested bn rhy thy ab hum ne ek function banaya jis ma hum ny parameter ps kiya email aur password ap promie function ko use kr k hum resolve aur reject krengy mene ek settimeout lagaya k 2 sec bd email print hojae lekin mene condition likhi k jb email ps ki jae to ___ email ho aur password ___ agr email aur password match hojae jae to email print kr dena wrna reject phr mene ek aur function banaya jis ma mene kha k agr email correct ati ha to usy video show ho jae lekin isko hendle krny k liye hamare ps 2 funcction hoty ha ek .then aur .catch then kya krta ha k agar ap ny jo ps kiya wo resolve hojata ha to .then ma jo ps kiya  hoga wo print hojaega aur agar apki condition match ni hoti to catch ma bhej dega phr catch print hojaega this is very simple 
// const loginuser = (email , password ) =>{
// return new Promise((resolve, reject) => {
//   setTimeout(() => { 
//     if (email==="tahirshobb@gmail.com" && password==="1234") {
//       resolve(email)
//     }else{
//       reject("email and password incoorect")
//     }
//   }, 2000);
// })
//    }

// const getvideo =(email) =>{
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(["video1","viddeo2","video3"])
//     }, 2000);
//   })
// }

// loginuser("tahirshobbb@gmail.com","1234")
// .then((e)=>{
//   console.log(e)
//   return getvideo(e)
// }).then((video)=>{console.log(video)})
// .catch((err)=>{
//   console.log(err)
//  })

// ab .then aur .catch ma bhi ek issue q k jb hum .then aur .catch use krty ha to ye humen br br use krna prega ise code ko samjhne ma muskil q k itne then aur catch hongy  masla hoga ab is k liye hum async await ka use krty ha lekin hum ny jo promise abhi kya tha wo to background ma run krega lekin .then aur .catch ko hum use ni krengy is k liye hum async await use krengy ab mene async function banaya ab us ma useremail bnaya aur await kr diya ab await hum ny is liye lagaya k hum ny jo promise diya ha wo resolve ni hojata tb tk wait kro ab agr ma await ni lgata to ye status pending show krega q k wo wahan py ruka hi ni agae nikl gaya is liye humny await lagaya ab isko hendle krny k liye mere ps try aur catch hoty ha try ye krta ha k ma try krta hu agar value resolve ajati ha to ma print hojaunga wrna ma catch ma bhej dunga aur catch ma hum error bhej dengy simple lekin mujhy isko call krna prega jo mene getuserdetail function banaya ha usko
// const loginuser = (email , password ) =>{
//   return new Promise((resolve, reject) => {
//     setTimeout(() => { 
//       if (email==="tahirshobb@gmail.com" && password==="1234") {
//         resolve(email)
//       }else{
//         reject("email and password incoorect")
//       }
//     }, 2000);
//   })
//      }
  
//   const getvideo =(email) =>{
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(["video1","viddeo2","video3"])
//       }, 2000);
//     })
//   }
// const getuserdetail = async () => {
// try {
//   const useremail = await loginuser("tahirshobb@gmail.com","1234")
//   console.log(useremail)
//   const uservideo = await getvideo(useremail)
//   console.log(uservideo)
// } catch (error) {
//   console.log("error")
// }
// }
// getuserdetail()