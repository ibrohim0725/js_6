//1-Topshiriq
//Uchta sonning faqat ikkitasi bir xil ekanligini aniqlang.
let num1=+prompt("1-son");
let num2=+prompt("2-son");
let num3=+prompt("3-son");

let counter='' ;
if(num1===num2){
    counter++ ;
}
if(num1===num3){
    counter++ ;
}
if(num2===num3){
    counter++ ;
}
if(counter===1){
    console.log("Faqat ikkita son bir xil");
    
}


//2-Topshiriq
//Son faqat 3 ga bo‘linadi va 5 ga bo‘linmaydi, deb chiqaring.
let number1=+prompt("sonni kiritng");
if(number1 %3==0 && number1 %5 !=0 ){
    console.log("Son faqat 3 ga bo‘linadi va 5 ga bo‘linmaydi");
    
}

//3-Topshiriq 
//Ikki sonning yig‘indisi 50 dan kichik bo‘lsa, "kifoya emas" deb chiqaring.
let a=+prompt("1-son");
let b=+prompt("3-son");
let res =a+b;

if(res<50){
    console.log("Kifoya emas");
    
}

//4-Topshiriq
//Harorat 0 dan past yoki 35 dan yuqori bo‘lsa, "ekstremal sharoit" deb chiqaring.
let havo =+prompt("Havo haroratini kiriting");
if(havo < 0 || havo > 35){
    console.log("Ekstrimal sharoit");
    
}

//5-Topshiriq 
//Kiritilgan ikki sonning biri toq, ikkinchisi juft bo‘lsa, "turli turlilik" deb chiqaring.
let num4=+prompt("sonni kiriting");
let num5=+prompt("sonni kiriting");
if (num4 % 2==1 && num5 % 2==0){
    console.log("Turli turlilik");
    
}

//6-Topshiriq
//Uch sonning yig‘indisi 100 dan katta, lekin 200 dan kichik bo‘lsa, "oraliqda" deb chiqaring.
let number2=+prompt("1-son");
let number3=+prompt("2-son");
let number4=+prompt("3-son");
let res1=number2+number3+number4 ;
if(res1 >= 100 && res1 <= 200){
    console.log("Oraliqda");
    
}

//7-Topshiriq
//Foydalanuvchi yoshini 15 va 65 oralig‘ida ekanligini aniqlang.
let age=+prompt("Yoshingiz");
if(age>=15 && age<=65){
    console.log("Yoshingiz 15 va 65 oralig'ida");
    
}

//8-Topshiriq
//Uch sonning hammasi manfiy bo‘lsa, "hammasi manfiy" deb chiqaring.
let son =+prompt("1-Son");
let son1 =+prompt("2-Son");
let son2 =+prompt("3-Son");
if(son <0 && son1 <0 && son2 <0){
    console.log("Hammasi manfiy");
    
}

//9-Topshiriq
//Foydalanuvchi kirgan sana hafta oxiriga to‘g‘ri kelsa, "dam olish kuni" deb chiqaring.
let week=+prompt("Hafta kuni");
if(week==7 || week==6){
    console.log("Dam olish kuni");
    
}

//10-Topshiriq
//Berilgan to‘rtta sonning faqat ikkitasining yig‘indisi 50 ga teng bo‘lsa, "mos juftlik" deb chiqaring.


//11-Topshiriq
//Harorat 20 dan yuqori, lekin 30 dan kichik bo‘lsa, "ideal harorat" deb chiqaring.
let havo1=+prompt("Haroratni kiriting");
if(havo1>=20 && havo1<=30){
    console.log("Ideal harorat");
    
}


//12-Topshiriq
//Uch sonning faqat bittasi juft bo‘lsa, "faqat bitta juft" deb chiqaring.
let n1 =+prompt("1-son");
let n2 =+prompt("2-son");
let n3 =+prompt("3-son");

let count= '';

if(n1 % 2 ==0){
    count++
}
if(n2 % 2 ==0){
    count++
}
if(n3 % 2 ==0){
    count++
}

if(count==1){
    console.log("Faqat bitta juftlik");
    
}

//13-Topshiriq
//Foydalanuvchi kiritgan oy qish fasliga to‘g‘ri kelsa, "sovuq fasl" deb chiqaring.
let month =+prompt('Oy raqamini kiritng');

if (month ==12 || month==2 || month==1){
    console.log("Qish fasli");
    
}


//14-Topshiriq
//To‘rt sonning yig‘indisi juft bo‘lsa, "juft yig‘indi" deb chiqaring.
let n4 =+prompt("1-Son");
let n5 =+prompt("1-Son");
let n6 =+prompt("1-Son");
let n7 =+prompt("1-Son");

let res2 = n4+n5+n6+n7 ;
if(res2 % 2 ==0){
    console.log("Juft yig'indi");
}


//15-Topshiriq
//Ikki sonning biri 0 dan katta, ikkinchisi 0 dan kichik bo‘lsa, "turli ishoralar" deb chiqaring.
let num15=+prompt("1-son");
let num16=+prompt("2-son");

if(num15>0 && num16<0){
    console.log("Turli ishoralar");
    
}

//16-Toposhiriq
//Uch sonning yig‘indisi 60 dan oshsa, "normadan yuqori" deb chiqaring.
let son3=+prompt("1-son");
let son4=+prompt("1-son");
let son5=+prompt("1-son");

let res3= son3 + son4 + son5 ;
if(res3>60){
    console.log("Normadan yuqori");
    
}


//17-Topshiriq
//Kiritilgan kun raqami hafta kunlari orasida bo‘lmasa, "notog‘ri kun" deb chiqaring.
let day=+prompt("Kun raqami");
if(day < 1 || day > 7){
    console.log("Noto'g'ri kun");
    
}

//18-Topshiriq
//Son 2 ga ham, 3 ga ham bo‘linmasa, "bo‘linmaydi" deb chiqaring.
let son6=+prompt("Sonni kiritng");
if(son6%2!=1 && son6 % 3!=1){
    console.log("Bo'linmaydi");
    
}

//19-Topshiriq
//Foydalanuvchi 25 dan katta, lekin 50 dan kichik son kiritsa, "qabul qilindi" deb chiqaring.
let age1=+prompt("Yoshingizni kiring");
if (age1>=25 && age1<=50){
    console.log("Qabul qilindi");
    
}

//20-Topshiriq
//Uch sonning hech bo‘lmaganda biri 5 ga bo‘linadigan bo‘lsa, "bo‘linish mavjud" deb chiqaring.
let num6=+prompt('1-son');
let num7=+prompt('2-son');
let num8=+prompt('3-son');

if(num6 %5==0 || num7 % 5==0 || num8 % 5==0){
    console.log("Bo'linish bor");
    
}

//21-Topshiriq
//Ikki sonning biri musbat va ikkalasi yig‘indisi 100 dan katta bo‘lsa, "maqsadga erishildi" deb chiqaring.
let raq =+prompt("1-son");
let raq1 =+prompt("2-son");
let res4= raq+raq1;
if (res4 >=100){
    if(raq>0 || raq1>0){
        console.log("Maqsadga erishdi");
        
    }
}

//22-Topshiriq
//Foydalanuvchi 18 dan katta va 30 dan kichik yosh kiritsa, "yosh chekloviga mos" deb chiqaring.
let age2=+prompt("Yoshinngizni kiriting");
if (age2 >=18 && age2 <= 30){
    console.log("Yosh chekloviga mos");
    
}

//23-Topshiriq
//Kiritilgan to‘rtta sonning faqat ikkitasi teng bo‘lsa, "teng juftlik" deb chiqaring.
let n8 =+prompt("1-son");
let n9 =+prompt("2-son");
let n10 =+prompt("3-son");
let n11 =+prompt("4-son");

let count1= 0;

if(n8==n9 ){
    count1++
}
if(n8 ==n10){
    count1++
}
if(n8  ==n11){
    count1++
}
if(n9 == n10){
    count1++
}
if(n9==n11){
    count1++
}
if(n10 == n11){
    count1++
}
if(count1==1){
    console.log("Teng juftlik");
    
}

//24-topshiriq
//Foydalanuvchi 0 dan katta, lekin 100 dan kichik qiymat kiritsa, "qabul qilinadigan qiymat" deb chiqaring.
let number5 =+prompt("Qiymat kiriting");
if(number5 >=0 && number5 <=100){
    console.log("Qabul qilinadigan qiymat ");
    
}

//25-Topshiriq
//Uch sonning yig‘indisi 200 dan oshsa yoki 100 ga teng bo‘lsa, "shart bajarildi" deb chiqaring.
let c=+prompt("1-Son");
let d=+prompt("1-Son");
let e=+prompt("1-Son");
let result=c+d+e;
if(result>=200 || result==100){
    console.log("Shart bajarildi");
    
}


//26-Topshiriq
// Ikki sonning biri 5 ga bo'linadi va ikkalasi ham 50 dan kichik bo'lsa , "maxsus shart bajarildi" deb chiqaring.
let raqam =+prompt("1-son");
let raqam1 =+prompt("2-son");
if(raqam % 5==0 ||raqam1 % 5==0){
    if(raqam < 50 && raqam1 < 50){
        console.log("Maxsus shart ");
        
    }
}


//27-Topshiriq 
//Foydalanuvchi yil faslini kiritib, u kuz yoki bahor ekanligini aniqlang.
let oy = prompt(" oy raqamini kiriting ");

if (oy == 12 || oy == 1 || oy == 2) {
        console.log("Qish");
} else if (oy >= 3 && oy <= 5) {
        console.log("Bahor");
} else if (oy >= 6 && oy <= 8) {
        console.log("Yoz");
} else if (oy >= 9 && oy <= 11) {
        console.log("Kuz");
}


//28-Topshiriq
//To‘rt sonning faqat biri juft bo‘lsa, "juftlik yakkasi" deb chiqaring.
let raqam2=+prompt("1-son")
let raqam3=+prompt("2-son")
let raqam4=+prompt("3-son")
let raqam5=+prompt("4-son")

let count2 =0 ;
if(raqam2 % 2 ==0){
    count2++
}
if(raqam3 % 2 ==0){
    count2++
}
if(raqam4 % 2 ==0){
    count2++
}
if(raqam5 % 2 ==0){
    count2++
}
if(count2 == 1){
    console.log("Juftlik yakkasi");
    
}

//30-Topshiriq
//Ikki sonning faqat bittasi manfiy bo‘lsa, "yagona manfiy" deb chiqaring.
let number6 =+prompt("1-son")
let number7 =+prompt("2-son")

let count3 =0 ;
if(number6 <0){
    count3++
}
if(number7 <0){
    count3++
}
if(count ==1){
    console.log("Yagona manfiy");
    
}

//31-Topshiriq
//Foydalanuvchi 50 dan katta, lekin 80 dan kichik son kiritsa, "oraliqda" deb chiqaring.
let yourAge =+prompt("Yoshingizni kiritng")
if(yourAge>=50 && yourAge<=80){
    console.log("Oraliqda");
    
}

//32-Topshiriq
//Uchta sonning faqat bittasi 10 ga bo‘linadigan bo‘lsa, "bo‘linuvchan" deb chiqaring
let raqam6 =+prompt("1-Son")
let raqam7 =+prompt("2-Son")
let raqam8 =+prompt("3-Son")
let count4= 0 ;
if(raqam6 % 10 ==0){
    count4++
}
if(raqam7 % 10 ==0){
    count4++
}
if(raqam8 % 10 ==0){
    count4++
}
if(count4 ==1){
    console.log("Bo'linuvchan");
    
}

//33-Topshiriq
//Foydalanuvchi kiritgan ikki son yig‘indisi yoki ayirmasi musbat bo‘lsa, "mos natija" deb chiqaring.
let f =+prompt("1-son")
let g =+prompt("2-Son")

let plus =f+g ;
let minus =f-g ;
if (plus > 0  || minus > 0){
    console.log("Mos natija");
    
}


//34-Topshiriq
//Harorat 10 dan past yoki 35 dan yuqori bo‘lsa, "noqulay sharoit" deb chiqaring.
let weather =+prompt("Haroratni kiriting")
if (weather<=10 || weather >= 35){
    console.log("Noqulay sharoit");
    
}

//35-Topshiriq
//Foydalanuvchi yilni kiritib, kabisa yili ekanligini aniqlang.
let year =+prompt("Tug'ilgan yilingizni kiriting")
if ((year % 4 ==0 && year % 100 != 0 ) || year % 400 ==0) { 
    console.log("Siz kabisa yilida tug'ilgansiz");

} 

//36-Topshiriq
//Foydalanuvchi 0 dan katta, lekin 200 dan kichik bo‘lgan toq son kiritsa, "haqiqiy qiymat" deb chiqaring.
let number8 =+prompt("Sonni kiriting")
if (number8 >0 && number8 < 200){
    if(number8 % 2 == 1){
        console.log("Haqiqiy qiymat");
        
    }
}

//37-Topshiriq
//Uch sonning faqat bittasi musbat bo‘lsa, "musbat yakkasi" deb chiqaring
let number9 =+prompt("1-Son")
let number10 =+prompt("1-Son")
let number11 =+prompt("1-Son")

let count5 =0 ;
if(number9 > 0){
    count5++
}
if(number10 > 0){
    count5++
}
if(number11 > 0){
    count5++
}
if(count5==1){
    console.log("Musbat yakkasi");
    
}


//38-Topshiriq
//Ikki sonning biri juft, ikkinchisi toq bo‘lsa va yig‘indisi 30 ga teng bo‘lsa, "ideal juftlik" deb chiqaring.
let son7=+prompt("1-son")
let son8=+prompt("2-son")

if ((son7 % 2 == 0 && son8 % 2 == 1) || (son7 % 2 == 1 && son8 % 2 == 0)) {
    if (son7 + son8 === 30) {
        console.log("Ideal juftlik");
    }
}

//39-Topshiriq
//Foydalanuvchi kiritgan to‘rtta sonning hech bo‘lmaganda ikkitasining yig‘indisi 50 dan katta bo‘lsa, "mos juftlik" deb chiqaring.
let numOne1 =+prompt("1-Son")
let numOne2 =+prompt("1-Son")
let numOne3 =+prompt("1-Son")
let numOne4=+prompt("1-Son")

if(numOne1+numOne2 > 50 || numOne1+numOne3 > 50 || numOne1+numOne4 > 50 ||
     numOne2+numOne3 > 50 || numOne2+numOne4 > 50 || numOne3+numOne4 > 50
     ){
        console.log("Mos juftlik");
        
     }

//40-Topshiriq 
//Harorat 0 dan past bo‘lsa yoki 40 dan katta bo‘lsa, "ekstremal holat" deb chiqaring.
let weather1=+prompt("Haroratni kiriting")
if(weather1<0 ||weather1 >40){
    console.log("Ekstrimal holat");
    
}