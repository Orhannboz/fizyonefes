import React from 'react';
import Explanation from "../../../components/explanation/Explanation";
import GeriatrikImage from './geriatrik-rehabilitasyon.jpg'

const Geriatrik = () => {
    return (
        <div className={"service-container"}>
            <Explanation image={GeriatrikImage}
                         explanation={"Kaçınılmaz olarak yaşlanma ile birlikte vücudumuzda bazı fizyolojik değişiklikler meydana gelmektedir. Bu değişikliklerin üzerine fazladan bir rahatsızlığın ilave olması, yaşlıları diğer yaş gruplarına nazaran daha fazla kırılgan yapmaktadır. Tüm bunlar yaşlı bireyin yaşam kalitesinin bozmakta,  genel sağlık giderlerinin de ciddi miktarlarda artmasına neden olmaktadır.Toplumun bir üyesi olan yaşlı bireyin yaşam kalitesinin korunarak, aktif bir yaşam sürmesinin sağlanması, sağlık çalışanlarının olduğu kadar, başta aile olmak üzere tüm toplumun ortak sorumluluklarından birisidir. Geriatrik rehabilitasyon yaşlılarda fiziksel yetersizlik, hastalık ve sakatlık gibi durumlarda, yaşlı kişinin işlevsel durumunu en üst düzeye çıkarmak için yapılan tüm çabaları içeren bir kavramdır. FizyoNefes‘de alanında uzman fizyoterapistler eşliğinde gerçekleştirilmektedir. "}
                         title={"Geriatrik Rehabilitasyon"}
            ></Explanation>
        </div>
    );
};


export default Geriatrik;