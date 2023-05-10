import {Student} from "./Student"

export const Tp4 = () => {
    const student1 = {
        nom : "Viale",
        prenom : "Brendan",
        avatar : "https://cdn1.iconfinder.com/data/icons/sport-avatar-7/64/23-table_tennis-ping_pong-racket-sport-ball-avatar-player-128.png",
        campus : "Aubagne",
        devLang : "Javascript of course",
      }
      
      const student2 = {
        nom : "Swag",
        prenom : "Yolo",
        avatar : "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-128.png",
        campus : "Nice",
        devLang : "PHP forever <3",
      }
      
      const student3 = {
        nom : "Bald",
        prenom : "Archi",
        avatar : "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/afro_man_male_avatar-128.png",
        campus : "Marseille",
        devLang : "Python the best",
      }
      
      const student4 = {
        nom : "Chaud",
        prenom : "Arti",
        avatar : "https://cdn4.iconfinder.com/data/icons/emoji-18/61/15-128.png",
        campus : "Aubagne",
        devLang : "C, le bon vieux temps",
      }

    return(
        <div id="students">
          {/* Rien de nouveau, voir le cours ou le fichier Experiences.jsx du tp3 */}
            <Student {...student1} isFromRi7/>
            <Student {...student2} />
            <Student {...student3} isFromRi7={false}/>
            <Student {...student4} isFromRi7={true}/>
        </div>
    )
}