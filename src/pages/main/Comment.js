import React, {useState, useEffect} from 'react';
import CommentLogo from '../../images/icons/comment-photo.jpg'
import './Comment.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";


function Comment() {
    const [activeIndex, setActiveIndex] = useState(1)

    const handleActiveIndex = () => {
        if (activeIndex === 4) {
            setActiveIndex(1)
        } else {
            setActiveIndex(activeIndex + 1)
        }
    }

    useEffect(() => {
        const timeout = setTimeout(() =>
            handleActiveIndex(), 9000);
        return () => clearTimeout(timeout);
    }, [activeIndex]);


    return <div className={"main-comment"}>

        <div className={"comment-header"}><h1> Sizden Gelen Görüşler </h1></div>
        <div className={"comment-section"}>
            <div className={"comment-image"}><img src={CommentLogo}/></div>
            <div className={"comment-whole"}>
                <div className={"comment-card"}>
                    {commentCreator(firstComment.commentNumber, firstComment.commentLogo, firstComment.commentSection, firstComment.commentFullName, activeIndex === firstComment.commentNumber)}
                    {commentCreator(secondComment.commentNumber, secondComment.commentLogo, secondComment.commentSection, secondComment.commentFullName, activeIndex === secondComment.commentNumber)}
                    {commentCreator(thirdComment.commentNumber, thirdComment.commentLogo, thirdComment.commentSection, thirdComment.commentFullName, activeIndex === thirdComment.commentNumber)}
                    {commentCreator(fourthComment.commentNumber, fourthComment.commentLogo, fourthComment.commentSection, fourthComment.commentFullName, activeIndex === fourthComment.commentNumber)}
                </div>
            </div>
        </div>
    </div>
}


const firstComment = {
    commentNumber: 1,
    commentLogo: "OB",
    commentSection: "Beyin cerrahım boynumda fıtık ve omuz yırtığı nedeniyle fizyoterapiste yönlendirdi bende arkadaş tavsiyesi ile buraya geldim sağolsunlar çok ilgilerdi boynumu çeviremiyordum ve kolumu kaldiramiyordum ağrılarım tamamen iyileşti diyebilirim İrem ve Ersin hocaya çok teşekkür ederim.",
    commentFullName: "O.... B.."
}
const secondComment = {
    commentNumber: 2,
    commentLogo: "FC",
    commentSection: "Ananem 11 seans aldı, kanal daralması sorunu vardı ve çok ağrı çekiyordu. Seansların sonunda çok rahatladı, ağrıları çok azaldı ve hayat kalitesi arttı. Süreçteki ilgi ve alakadan çok memnunuz. Gönül rahatlığıyla tercih edebilirsiniz. Teşekkür ederiz",
    commentFullName: "F...C..."
}

const thirdComment = {
    commentNumber: 3,
    commentLogo: "O",
    commentSection: "Ankilozan spondilit rahatsizligim nedeniyle kendilerine basvurdum inanilmaz ilgilenildi ve cok daha iyi hissediyorum kendimi\n" +
        "Basarilarinizin devamini dilerim",
    commentFullName: "O...B..."
}

const fourthComment = {
    commentNumber: 4,
    commentSection: "Merhaba, fizyoNefes terapi merkezinden çok memnun kaldım.çalışanlar çok güleryüzlü ve işlerini düzgün yapan insanlar.Kendimi evimdeki kadar rahat hissettim.Aldıgım hizmet muhteşemdi.yeni olduğu  halde kalabalıktı. Gitmek isteyen herkese tavsiye ederim.\n" +
        "Fizyonefes G terapi merkezinin,başarılarının devamını diliyorum.Türkiyenin bu tip gençlere ihtiyacı var.sevgilerimle",
    commentLogo: "SA",
    commentFullName: "S...A..."
}
const commentCreator = (commentNumber, commentLogo, commentSection, commentFullName, commentShow) => {

    return (
        <div className={`comment comment-show-${commentShow}`}>
            <div className={"comment-first-logo"}>
                <div className={"comment-logo"}><p> {commentLogo} </p></div>
                <div className={"comment-full-name"}><p> {commentFullName}</p></div>
                <div className={"comment-star"}>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                    <FontAwesomeIcon icon={faStar}/>
                </div>
            </div>
            <div className={"comment-user"}>
                {commentSection}
            </div>
        </div>
    )
}

export default Comment;