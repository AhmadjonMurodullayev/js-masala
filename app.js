        // 1-chi masala  kankuliyator
let a = parseFloat( prompt ("son kiriting"))
let belgi = prompt("belgi kiriting")
let b = parseFloat(prompt("sonni kiriting"))

function cankuliyator(a, belgi ,b) {
    let resut;
    if(  belgi === "+"){
        resut = a + b;
    }  else if( belgi === "-"){
        resut = a - b;
    }else if( belgi === "*"){
          resut = a * b;
    } else if( belgi === "/"){
          resut = a /b;
    }else if( b === 0 && a === 0){
        resut = "0 kiritma";
    }else if( a / 0){
        resut ="0 gaa bolish mumkinmas";
    }
    return resut
}
console.log(cankuliyator(a, belgi, b));



    //  2-masala
let musbat = parseFloat( prompt ("son kiriting"))
    function teskari(son){
        if(son > 0){
        --son
        }else if(son < 0){
         ++son
        }
        return son;
    }
    console.log(teskari(musbat));


    // 3-masala. argument sifatida qabul qilgan sonni teskari qiluvchi arrow function yarating kiritilgan sonni 2 xonaligini tekshiring va bu function faqat 2 xonali son uchun ishlasin 
    const mani = (a) => {
        let resut
        if(a < 99  && a > 10 ){
            resut = parseInt(a % 10) * 10 + parseInt(a / 10)
        }else{
            resut = "2 xonali son kiriting"
        }
        return resut;
    }
     console.log(mani(24));


    //  4. 3-savolni 3 xonali son uchun ham bajaring
    const mani = (a) => {
        let resut
        if(a < 999  && a > 100 ){
            resut = parseInt(a % 10) * 100 + 
            (parseInt(a / 10) % 10) * 10 + parseInt(a / 100);
        }else{
            resut = "3 xonali son kiriting"
        }
        return resut;
    }
     console.log(mani(123));



    // 5. student baliga qarab o’qishga kirgan mavqeini aniqlang 100% - 70% bo’lsa budjet 70% - 50% contract 50% dan past bo’lsa yiqildi bu savolni function decloration dan foydalanib bajaring student balini function ga argument sifatida kiritilsin

    let ball = prompt('balni kiriting')
 
   function ballar(ball){
    let resut
    if (ball >= 100) {
        resut = 'Grand'
   } else if (ball >= 70 && ball <= 100) {
       resut = 'bujet'
   }else if (ball <= 70 && ball >= 50) {
       resut = 'yiqildingi'
   }else {
       resut = 'yiqildindiz'
   }
    return resut
   }
    console.log(ballar(ball));



