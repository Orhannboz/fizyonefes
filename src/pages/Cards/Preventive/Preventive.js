import React from 'react';
import Explanation from "../../../components/explanation/Explanation";
import PreventiveImage from './koruyucu-fizyoterapi.jpeg'

const Preventive = () => {
    return (
        <div className={"service-container"}>
            <Explanation image={PreventiveImage}
                         explanation={"Sağlıklı bireylerde ve sporcularda oluşmaya yatkınlığın olduğu problemlerin önceden tespit edilmesiyle birlikte uygun önlemlerin alınmasını kapsayan fizyoterapi yaklaşımlarıdır. FizyoNefes'de alanında uzman fizyoterapistlerimizle birlikte uygun manuel ve egzersiz yaklaşımları izlenerek bireye özgü bir program çıkartılmaktadır. Bu sayede bireyin gündelik hayattaki fonksiyonelliği korunur veya daha iyi bir hale getirilirken ileriki dönemde problemlerin yaşanmaması açısından birey bilgilendirilmektedir."}
                         title={"Koruyucu Fizyoterapi"}
            ></Explanation>
        </div>
    );
};


export default Preventive;