import React from 'react';
import Explanation from "../../../components/explanation/Explanation";
import PulmonerImage from './Pulmoner-Rehabilitasyon.jpg'

const Pulmoner = () => {
    return (
        <div className={"service-container"}>
            <Explanation image={PulmonerImage}
                         explanation={"Pulmoner rehabilitasyon bireyin mevcut akciğer hastalığına rağmen yaşamını olabildiğince normale yakın sürdürebilmesi için yapılan çalışmaların tümüdür.Yeterli tıbbi tedaviye rağmen nefes darlığı çeken, egzersiz toleransı azalmış veya günlük yaşam aktivitelerinde kısıtlanma gözlenen kronik solunum hastalığı olan her hasta pulmoner rehabilitasyon programına alınabilir.KOAH (kronik obstrüktif akciğer hastaları), astım, kistik fibrosis gibi kronik solunum yetmezliği olan hastalar, bronşektazi, interstitisiyel hastalıkları, nöromuskuler hastalıklar (amyotrofik lateral skleroz, spinal kord yaralanması, spinal muskuler atrofiler), göğüs kafesi bozukluğu olanlar ve solunum cihazından ayırma dönemindeki hastalar alınabilir. Hastalar akciğer cerrahisi öncesi ve sonrasında da pulmoner rehabilitasyon programına alınabilir."}
                         title={"Pulmoner Rehabilitasyon"}
            ></Explanation>
        </div>
    );
};


export default Pulmoner;