import React from 'react';
import Explanation from "../../../components/explanation/Explanation";
import ClinicalImage from './klinik-masaj.jpg'

const Clinical = () => {
    return (
        <div className={"service-container"}>
            <Explanation image={ClinicalImage}
                         explanation={"Günümüzde zor hayat şartları, stres ve yorgunluk, vücudumuzdaki kasların istemsizce kasılmasına yol açar. Hareketsizlik, kötü beslenme, uyku bozuklukları gibi birçok etken omurgamızda ve eklemlerimiz de hasarlar meydana gelmesine neden olur. Giderek hareketlerimiz kısıtlanır ve dayanılması güç ağrılar eşlik eder. Tüm bunlar yaşam kalitemizi yavaş yavaş düşürür. Ancak dilerseniz FizyoNefes'de Manuel terapi ve klinik masaj seçenekleri ile kaslarınızı, eklemlerinizi ve sinir sisteminizi, dolayısıyla tüm vücudunuzu rahatlatabilir; böylelikle siz de huzurlu bir nefes alabilirsiniz."}
                         title={"Klinik Masaj"}
            ></Explanation>
        </div>
    );
};


export default Clinical;