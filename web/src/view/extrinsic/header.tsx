import { ElementChildren } from "../../model/elementChildren";
import { ExtrinsicProps } from "../../model/extrinsicProps";
import { HeaderProps, IntrinsicHeader } from "../intrinsic/header";
import { getNestedTextOrChild } from "../tools";

// <header> yani dis header elementi
export const ExtrinsicHeader = (params: {config: ExtrinsicProps, children: ElementChildren, className?: string}) => {
    const { config, children, className } = params;
    
    if (config.debug)
        console.log('config.props.intrinsic', config.intrinsic);
    
    const props = config as HeaderProps;
    
    // cocuklar objesi array mi diye bak ve eger array degilse,
    // tek elementini yeni arrayin icine koy. Array ise dogrudan kullan.
    // zaten kendimiz ayarladik ama, ne olur ne olmaz bunu 
    // JSX Fragmenti kullanarak, cocuklarini, tek cocuga donustur, array olmasi durumlarini kolayca halletek icin.
    // Fragment, elementler array'ini hep tek bir elemente donusturur.
    // fragment kullanimini aliskanlik haline getirmek iyidir.
    // genel bir duzen kurali olarak hep fragment returnleriz ki
    // birden fazla child gelmesi gibi sacma durumlarda bile, tek gelmis gibi
    // render edebilelim.
    const dynamicHeaderChild = <>
        {Array.isArray(children) 
            ? children 
            : [ children ]
        }
    </>;
    
    return (
        // eger intrinic, yani temel ve sabit bir h1 - h6 elementi talep edilmis ise
        // bunu, size prop'unu disardan vererek Dinamik Boyutlandirilmis Header componentimiz
        // ile kolayca yapabiliriz.
        config.intrinsic ? (
            <IntrinsicHeader size={props?.size || 4} className={className}>
                {dynamicHeaderChild}
            </IntrinsicHeader>
        ) : (
            <header className={className}>
                {/* burda gosterilecek olan, islemler ile hesaplanan html elementimizi, araclar dosyamizdaki method'u kullanarak aliyoruz. 
                Bu dosyanin karmasiklasmamasi icin.*/}
                {getNestedTextOrChild(children, className)}
            </header>
        )
    )
}

// dipnot: IIFE Konseptini bir arastir.
// Bu component ayri dosyaya cekilmeden once, Sozlukteki kullanimi assagidaki gibiydi:
        // header elementimiz, digerlerine nazaran biraz daha komplike bir yapida
        // oldugundan oturu, buraya tek kere kullanilan, hemen kullanildigi
        // anda ateslenen bir method yazdik.
        // bu method bize, kivrik parantez acarak bir scope (alan) olusturdu
        // bu scope sayesinde, if else gibi durumlara ozel davranislar sergileyebildik
        // ve degerimizi en altta return kullanarak dondurduk.
        // diger cogu elementte ise, bu methodu kullanmaya gerek gormedik cunku
        // onlarin yapisi cok daha basitti.
        // returnden once ne zaman birseyler yapmamiz gerekiyorsa o zaman kivrik paranterzler ile 
        // bir scope yaratmaliyiz.
        // tanimlandigi anda ateslenen methodlara IIFE denir. (Immediately Invoked Function Expression)
        // bu methodlar, tanimlandigi anda calisir ve bir daha calismazlar.
        // cunku bir const degeri olarak atanamadan calistirilirlar ve yokolurlar.
        // [DynamicElementType.Header]: (() => {
        //     if (config.debug)
        //     console.log('config.props.intrinsic', config.intrinsic);
            
        //     const props = config as HeaderProps;
            
        //     // cocuklar objesi array mi diye bak ve eger array degilse,
        //     // tek elementini yeni arrayin icine koy. Array ise dogrudan kullan.
        //     // zaten kendimiz ayarladik ama, ne olur ne olmaz bunu 
        //     // JSX Fragmenti kullanarak, cocuklarini, tek cocuga donustur, array olmasi durumlarini kolayca halletek icin.
        //     // Fragment, elementler array'ini hep tek bir elemente donusturur.
        //     // fragment kullanimini aliskanlik haline getirmek iyidir.
        //     // genel bir duzen kurali olarak hep fragment returnleriz ki
        //     // birden fazla child gelmesi gibi sacma durumlarda bile, tek gelmis gibi
        //     // render edebilelim.
        //     const dynamicHeaderChild = <>
        //         {Array.isArray(children) 
        //             ? children 
        //             : [ children ]
        //         }
        //     </>;
            
        //     return (
        //         // eger intrinic, yani temel ve sabit bir h1 - h6 elementi talep edilmis ise
        //         // bunu, size prop'unu disardan vererek Dinamik Boyutlandirilmis Header componentimiz
        //         // ile kolayca yapabiliriz.
        //         config.intrinsic ? (
        //             <DynamicSizeHeader size={props?.size || 4} className={className}>
        //                 {dynamicHeaderChild}
        //             </DynamicSizeHeader>
        //         ) : (
        //             <header className={className}>
        //                 {/* burda gosterilecek olan, islemler ile hesaplanan html elementimizi, araclar dosyamizdaki method'u kullanarak aliyoruz. 
        //                 Bu dosyanin karmasiklasmamasi icin.*/}
        //                 {getNestedHeaderChild(children, className)}
        //             </header>
        //         )
        //     )
        // })(),