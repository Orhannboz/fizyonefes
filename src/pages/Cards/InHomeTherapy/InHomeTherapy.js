import React from 'react';
import Explanation from "../../../components/explanation/Explanation";
import InHomeImage from './evde-fizik-tedavi.jpg'

const InHomeTherapy = () => {
    return (
        <div className={"service-container"}>
            <Explanation image={InHomeImage}
                         explanation={"Evde fizik tedavi yöntemi, herhangi bir sebepten dolayı fizik tedavi alması gereken hastaların, bu hizmeti kendi evlerinde almasıdır. Bu yöntem, hastaların evlerindeki konforlu ortamda fizik tedavi programına ulaşmasını sağlamak amacıyla tasarlanmıştır. Evde fizik tedavi, genellikle hastalık, yaralanma veya başka durumlar sonucu hastaların keyfi veya zorunlu olarak evden çıkmamaları gerektiği durumlarda uygulanabilir. Bu yöntem sayesinde hastalar kendi evlerinde rahatlıkla tedavi alabilirler. FizyoNefes‘de alanında uzman fizyoterapistler eşliğinde gerçekleştirilmektedir. "}
                         title={"Evde Fizik Tedavi"}
            ></Explanation>
        </div>
    );
};


export default InHomeTherapy;