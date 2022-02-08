// var currentCourse = 'Javascript cơ bản';
// var newCourse;
// newCourse = currentCourse;
// console.log(currentCourse);
// console.log(newCourse);
// newCourse = 'Javascript nâng cao';
// console.log(newCourse);

//bai 21:
// function run(socialType, isVerified) {
//     var result;
//     if (socialType === 'google' || socialType === 'facebook') {
//         result = true;
//     } if (socialType === 'email' && isVerified == true) {
//         result = true;
//     } else 
//     result = undefined;
//     console.log(result);
// }
// run('email', true);

// function votableCheck(isAuthenticated, role) {
//     var result;
//     if(isAuthenticated==true && (role ==='member'||role==='admin')){
//         result=true;
//     } else if(isAuthenticated==true && role ===''){
//         result=false;
//     } else
//     result = false
//     console.log(result);
// }
// votableCheck(false, 'admin')

//bài 27
//2
// function run(statusText) {
//     var result;
//     if(statusText==='string' || statusText!=null && statusText.length >= 1){
//         result=true;
//     } else
//         result=false;

// function run(title) {
//     var title = 'Học Aavascript tại F9';
//     var language = title.slice(4,14);
//     var rest = title.slice(14);
//     console.log( `Language is ${language} and rest is ${rest}`);
// }
// run();

// function sum(a,b){
//     console.log(a+b);
// }
// sum(8,9);

// function writeLog(prefix, message){
//     console.log(prefix + ': ' + message);
// }
// writeLog('lam','thinh');

// const NGU_TOC = 'NGU_TOC'
// const XA_TOC = 'XA_TOC'
// const DIEU_TOC = 'DIEU_TOC'

// const BIEN = 'BIEN'
// const NUI = 'NUI'
// const RUNG = 'RUNG'

// function recalculateWithPlace(place, type, atk, hp, spd) {
//     let result = [atk, hp, spd];
//     if (place === BIEN && type === NGU_TOC) {
//         result.forEach(metric => metric + 10);
//     } else {
//         result.forEach(metric => metric - 10);
//     } if (place === NUI && type === XA_TOC) {
//         result.forEach(metric => metric + 10);
//     } else {
//         result.forEach(metric => metric - 10)
//     } if (place === RUNG && type === DIEU_TOC) {
//         result.forEach(metric => metric + 10);
//     } else {
//         result.forEach(metric => metric - 10);
//     }
//     console.log(result);
// }
// recalculateWithPlace(BIEN, NGU_TOC, 100, 200, 300);

// var i=0;
// var myArr=[
//     'javascript',
//     'php',
//     'js',
//     'tin'
// ];
// while(i<myArr.length){
//     console.log(myArr[i]);
//     i++;
// }

// function sum(numbers) {
//     console.log(numbers.reduce((x,y)=>x+y));
// }
// sum([1,2]);

// var players = [
//     'abc',
//     'xyz',
//     'hjk'
// ];
// for(var i=0;i<=players.length;i++){
// console.log(players[i]);
// }

// function recalculateWithPlace(place, type, atk, hp, spd) {
//     let result = [atk, hp, spd];
//     if (place === BIEN && type === NGU_TOC) {
//         result.forEach(number => number + 10);
//     } else {
//         result.forEach(number => number - 10);
//     }
// } if (place === NUI && type === XA_TOC) {
//     result.forEach(number => number + 10);
// } else {
//     result.forEach(number => number - 10);
// } 
// } if (place === RUNG && type === DIEU_TOC) {
//     result.forEach(number => number + 10);
// } else {
//     result.forEach(number => number - 10);
// }
// }else
// result.forEach(number => number - 10);
// }
// return result;
// }

// function run(input) {
//     if(input==='String' && input.includes('F8')){
//         console.log(true);
//     } else if(input===[] && input.includes(F8)){
//         console.log(true);
//     } else
//     console.log(false);
// }
// run(['F8', 'Học lập trình']);

// var f8LinkElement=document.querySelector('a');
// var f8ShortLink=f8LinkElement.getAttribute('href');
// document.querySelector('a:nth-child(2)').href=f8ShortLink;
// document.querySelector('div').setAttribute('data-url','f8ShortLink')

// //  function trả về Promise
// function downloadfile(url){
//     console.log('Start download file');
//     // tạo Promise
// var willGetAFile=new Promise;
// function(resolve,reject){
//     if(var isNetwork = true){
//         console.log('Complete the download');
//         var file={
//             fileName:'file.mp3'
//         };
//         resolve(file);
//     } else
//     console.log('File download Failed');
//     var error=new Error('There is a problem with the network.');
//     reject(error);
// }
// }
// return willGetAFile;
// // trả về Promise
// var willGetAFile=downloadFile("http://example.com/file.mp3");
// willGetAFile
// .then(function(fullfilled)){
//     console.log(fullfilled);
// }
// .catch(function(erorr))
// console(erorr);

// let myPromise=new Promise;
// function(resolve,reject){
//     let x=0;
//     if(x==0){
//         resolve('OK');
//     }else
//     reject('Error');
// }
// myPromise
// .then(function(value))
// console.log(value);
// .catch(function(error))
// console.log(error);
