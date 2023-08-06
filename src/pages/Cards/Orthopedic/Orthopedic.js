import React from 'react';
import Explanation from "../../../components/explanation/Explanation";
import OrthopedicImage from './ortopedik-rehabilitasyon.jpg'

const Orthopedic = () => {
    return (
        <div className={"service-container"}>
            <Explanation image={OrthopedicImage}
                         explanation={"Fizik tedavi ve rehabilitasyon bölümünün özelleştirilmiş bir alt bölümü olan ortopedik rehabilitasyon kas ve iskelet sisteminde olan rahatsızlıkların tedavisinde kullanılan ve bilimsel temellere dayanan tedavi seçeneklerini içermektedir. Amaç kas ve eklemdeki problemleri gidererek hastanın fonksiyonelliğini arttırmak veya normal aktivite seviyesini geri kazandırmaktır. Cerrahi öncesi veya sonrasında uygulanabildiği gibi aynı zamanda yumuşak doku problemlerinde, kırıklarda, protezlerde, burkulmalar, ezilmeler, kas veya tendon yaralanmalarında kullanılabilmektedir. FizyoNefes de yer alan alanında uzman fizyoterapistlerimiz eşliğinde danışanlarımızın ihtiyacına göre onlara en uygun rehabilitasyon sunulmaktadır."}
                         title={"Ortopedik Rehabilitasyon"}
            ></Explanation>
        </div>
    );
};


export default Orthopedic;