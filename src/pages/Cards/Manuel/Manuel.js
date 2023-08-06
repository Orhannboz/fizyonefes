import React from 'react';
import Explanation from "../../../components/explanation/Explanation";
import ManuelImage from './manuel-terapi.jpg'

const Manuel = () => {
    return (
        <div className={"service-container"}>
            <Explanation image={ManuelImage}
                         explanation={"Sporcularda oluşan yaralanmaların yapılan sporlara özgü olarak değerlendirilmesi ve tedavisinin düzenlenmesini içeren rehabilitasyon uygulamaları FizyoNefes‘de alanında uzman fizyoterapistler eşliğinde gerçekleştirilmektedir. Sporcularımızın sahaya tekrar sakatlanma riskinin en düşük seviyede çıkarılması,performansının arttırılması ve iyileşmenin en hızlı şekilde gerçekleşmesi adına yapılan sportif rehabilitasyonda branşa özgü olarak hazırlanan egzersizlerle rehabilitasyon gerçekleştirilmektedir. Cerrahi öncesi koruyucu veya yapılması hedeflenen cerrahiye hazırlık olarak uygulanabilecek rehabilitasyonlarda, menisküs yaralanmaları, bağ yaralanmaları, tendon yaralanmaları veya kas yaralanmalarında tercih edilmektedir."}
                         title={"Manuel Terapi"}
            ></Explanation>
        </div>
    );
};


export default Manuel;