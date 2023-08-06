import React from 'react';
import Explanation from "../../../components/explanation/Explanation";
import GTherapyImage from './g-therapy.jpg'

const GTherapy = () => {
    return (
        <div className={"service-container"}>
            <Explanation image={GTherapyImage}
                         explanation={"G Therapy nedir, alanında eğitimlerini almış ve uzman fizyoterapistler tarafından uygulanan kısa sürede yüksek oranda etki eden manuel terapi ve mekanik tedavi birleşimi bir terapi çeşididir. G Therapy’nin patentli kendine özgü bir cihazı bulunmaktadır ve fizyoterapistler uygulamayı bu cihazı kullanarak birebir hasta başında gerçekleştirmektedir. Tanı ve teşhisi hekim tarafından koyulmuş; başta bel fıtığı, boyun fıtığı, kas ağrıları, hareket kısıtlılıkları, diz problemleri ve fibromiyalji olmak üzere birçok kas ve iskelet sistemi rahatsızlıklarında etkin tedavi olmaktadır. FizyoNefes‘de alanında uzman fizyoterapistler eşliğinde gerçekleştirilmektedir."}
                         title={"G-Therapy"}
            ></Explanation>
        </div>
    );
};


export default GTherapy;