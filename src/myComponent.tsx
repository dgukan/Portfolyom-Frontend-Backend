import React from 'react';


const MyComponent = (params: { sayilar: number[] }) => {
// const numbers = params.sayilar;
const { sayilar } = params; //object destruction in javascript
// Çift sayıları bul
// const evenNumbers:number[] = sayilar.filter(n => {
//     return n % 2 === 0
// });
// // Toplamı bul
// const sum:number = sayilar.reduce((acc:number, n:number) => acc + n, 0);
// // Çift sayı var mı?
// const evenNumberExists:boolean = sayilar.some((n:number) => n % 2 === 0);
// // Tüm sayıları 2 ile çarp
// const multipliedNumbers:number[] = sayilar.map((n:number) => (
//     n * 2
//     ) );
    
//Sayilarimizi number formundan obje formuna dönüştürüyoruz.
type YeniObje = { sayi: number, ciftMi: boolean, sira: number };
const bilgiler = sayilar
    // .filter((n) => n % 2 === 0) //Sadece çift sayıları alıyoruz.
    .map((s:number, i:number) => ({ sayi: s, ciftMi: s % 2 === 0, sira: i })) //Sayilarimizi number formundan obje formuna dönüştürüyoruz.
    .map((o:YeniObje) => `${o.sayi}: bir ${o.ciftMi ? "Çift" : "Tek"}  sayı ve ${o.sira}. sırada.`); //string formatına getirdik.


  return (
    <div>
      {/* <h2>Çift Sayılar</h2>
      <ul>
        {evenNumbers.map((n, i)=> (
            <li key={i}>
                <p>
                    {n} sayisi {i} sırasında.
                </p> 
            </li>
        ))}
      </ul>
      <ul>
            <p>
                sayilarin toplamı = {sum}
            </p>
      </ul>
      <ul>
        <p>
            çift sayi var mı? = {evenNumberExists ? "Evet" : "Hayır"}
        </p>
      </ul>
      <ul>
            <div>
              <h2>İkiyle Çarpılmış Sayılar</h2>
                {
                    multipliedNumbers.map((n,i) => (
                    <li key={i}>
                        <p>
                            {n} 
                        </p>
                    </li>
            
                    ))
                }
            </div>
      </ul> */}
        {
            bilgiler.map((text:string, i:number)=>(
                <div key={ i }>
                    <p>
                        { text }
                    </p>
                </div>
            ))
            
        }
    </div>
  );
};

export default MyComponent;