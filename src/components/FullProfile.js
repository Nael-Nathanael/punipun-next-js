import {PROFILE_1, PROFILE_2, PROFILE_3} from "@/helpers/consts";
import styles from "./FullProfile.module.css";

export default function FullProfile() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-3 mb-4">
          <h2 className={`h2 exo2 light mb-2 invisible ${styles.h2}`}>{"Puni's"} Profile</h2>
          <div className={styles.imgStickContainer}>
            <img alt="" className={`mb-2 ${styles.img}`} src={PROFILE_1}/>
            <h3 className={`h3 text-white exo2 ${styles.h3}`}>
              Punipun
            </h3>
          </div>
        </div>
        <div className="col-lg-9 mb-4">
          <h2 className={`h2 exo2 light mb-2 ${styles.h2}`}>{"Puni's"} Profile</h2>

          <div className="card shadow-sm">
            <div className="card-body position-relative">
              <div>
                <table>
                  <tbody>

                  <tr>
                    <th>Name</th>
                    <td className="ps-3 pe-2">:</td>
                    <td>Clarissa ‘Punipun’ Widjaya, BSc(Hons), S.Kom.</td>
                  </tr>
                  <tr>
                    <th>Birthday</th>
                    <td className="ps-3 pe-2">:</td>
                    <td>7 October 199<span className={styles['blurry-text']}>x</span></td>
                  </tr>
                  <tr>
                    <th>Height</th>
                    <td className="ps-3 pe-2">:</td>
                    <td>155 cm</td>
                  </tr>
                  <tr>
                    <th>Blood Type</th>
                    <td className="ps-3 pe-2">:</td>
                    <td>B</td>
                  </tr>
                  <tr>
                    <th>Personality</th>
                    <td className="ps-3 pe-2">:</td>
                    <td>INFJ-T</td>
                  </tr>
                  <tr>
                    <th>Nationality</th>
                    <td className="ps-3 pe-2">:</td>
                    <td>Indonesia (Japanese-Chinese-Indian mix)</td>
                  </tr>
                  <tr>
                    <th>Languages</th>
                    <td className="ps-3 pe-2">:</td>
                    <td>English, Bahasa Indonesia, Japanese (Basic), Chinese (Basic)</td>
                  </tr>
                  <tr>
                    <th colspan="3">About Punipun</th>
                  </tr>
                  </tbody>
                </table>

                <ul>
                  <li>
                    Cosplayer | Gamer | Musician | Entrepreneur | Programmer | Phsyiognomist
                  </li>
                  <li>
                    Brand Ambassador of ASUS ROG ID
                  </li>
                  <li>
                    Kurate Gakuen Moe Ambassador <img alt="🇯🇵" className={`emoji ${styles.img} ${styles.emoji}`}
                                                      draggable="false"
                                                      role="img"
                                                      scale="0"
                                                      src="https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f1ef-1f1f5.svg"/>
                    invited by Fukuoka Govt.
                  </li>
                  <li>
                    re:ON Comics Official Cosplayer
                  </li>
                  <li>
                    Indonesia Gaming Awards 2019 Most Fav. Cosplayer of the Year
                  </li>
                  <li>
                    NHK Kawai.i International <img alt="🇯🇵" className={`emoji ${styles.img} ${styles.emoji}`}
                                                   draggable="false" role="img"
                                                   scale="0"
                                                   src="https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f1ef-1f1f5.svg"/>
                    #2 Viewer’s Choice
                  </li>
                  <li>
                    NHK Kawai.i International <img alt="🇯🇵" className={`emoji ${styles.img} ${styles.emoji}`}
                                                   draggable="false" role="img"
                                                   scale="0"
                                                   src="https://s0.wp.com/wp-content/mu-plugins/wpcom-smileys/twemoji/2/svg/1f1ef-1f1f5.svg"/>
                    TOP 10 Finalists
                  </li>
                  <li>
                    Microsoft CHAMPS
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-9 mb-4 order-2 order-lg-0">
          <div className="card shadow-sm">
            <div className="card-body position-relative">
              <h4 className="h4 exo2 light mb-2">Occupation</h4>
              <div>
                <b>Brand Ambassador and Talent of:</b>
                <ul>
                  <li>
                    2021 - 2021 ― Lugiami Brand Ambassador
                  </li>
                  <li>
                    2019 - 2021 ― GeekFam ESports Team Brand Ambassador
                  </li>
                  <li>
                    2018 - now ― Bandai Namco Entertainment SEA KOL
                  </li>
                  <li>
                    2017 - now ― ASUS ROG Indonesia Brand Ambassador
                  </li>
                  <li>
                    2017 - now ― Kurate Gakuen Moe Ambassador, Fukuoka, Japan
                  </li>
                  <li>
                    2015 - now ― re:ON Comics Official Cosplayer
                  </li>
                </ul>
              </div>

              <div>
                <b>Entrepreneurship:</b>
                <ul>
                  <li>
                    Owner of <a className="text-decoration-none" href="https://g.page/punipun">Kopi Chuseyo
                    Cibubur & HAKO Studio</a>
                    (since Aug 2020)
                  </li>
                  <li>
                    Cosplayer (since 2006), Phsyiognomist, Software Engineer, Gamer, Musician (Piano,
                    Cello, Drum, Guitar, Bass)
                  </li>
                </ul>
              </div>
              <div>
                <b>Skillsets:</b>
                <ul>
                  <li>
                    Cosplay
                  </li>
                  <li>
                    Music
                  </li>
                  <li>
                    Photography & Videography
                  </li>
                  <li>
                    Software Engineering
                  </li>
                  <li>
                    Graphic Design
                  </li>
                  <li>
                    Singing
                  </li>
                  <li>
                    Business Intelligence
                  </li>
                  <li>
                    Event Organizing
                  </li>
                  <li>
                    Digital Marketing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 mb-4">
          <div className={styles.imgStickContainer}>
            <img alt="" className="mb-2" src={PROFILE_2}/>
            <h3 className={`h3 text-white exo2 d-none d-lg-inline-block ${styles.h3}`}>
              Punipun
            </h3>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-3 mb-4">
          <div className={styles.imgStickContainer}>
            <img alt="" className="mb-2" src={PROFILE_3}/>
            <h3 className={`h3 text-white exo2 d-none d-lg-inline-block ${styles.h3}`}>
              Punipun
            </h3>
          </div>
        </div>
        <div className="col-lg-9 mb-4">
          <div className="card shadow-sm">
            <div className="card-body position-relative">
              <h4 className="h4 exo2 light mb-2">Portfolios</h4>
              <div>
                <b>Background:</b>
                <ul>
                  <li>
                    BSc(Hons) of Software Engineering from University of Nottingham
                  </li>
                  <li>
                    S.Kom from Bina Nusantara International University
                  </li>
                  <li>
                    John Robert Powers HP Certification
                  </li>
                  <li>
                    S7ven Photography Certification
                  </li>
                  <li>
                    Titi Qadarsih Junior Modelling
                  </li>
                </ul>
              </div>

              <div>
                <b>Cosplay Portfolio:</b>
                <ul>
                  <li>
                    Guest Cosplayer/Judge/Talent for
                    <a href="https://punipun.com/events">
                      more than 100 national and international events
                    </a>
                    (Indonesia, Singapore, Malaysia, Brunei Darussalam, Miri, Thailand, South Korea, and
                    Japan)
                  </li>
                  <li>
                    Winner of Indonesia Gaming Awards 2019 Most Favorite Cosplayer of the Year
                  </li>
                  <li>
                    Kurate Gakuen Moe Ambassador appointed by the Fukuoka Government
                  </li>
                  <li>
                    1st Runner-Up of Viewers’ Choice on NHK Kawai.i International JAPAN 2019
                  </li>
                  <li>
                    TOP 10 Finalists of NHK Kawai.i International JAPAN 2019
                  </li>
                  <li>
                    re:ON Comics Official Cosplayer
                  </li>
                  <li>
                    Talent/Head Maid and Guest Cosplayer for Anime Festival Asia (SOZO) Singapore,
                    Malaysia, and Indonesia (2012-now)
                  </li>
                  <li>
                    Lawson Indonesia Official Mascot, Akikoloid-chan at Ennichisai 2013
                  </li>
                  <li>
                    Valiant Force (Mobile Game) Singapore Mascot at STGCC
                  </li>
                </ul>
              </div>
              <div>
                <b>IT Portfolio:</b>
                <ul>
                  <li>
                    School Representative for Olimpiade Sains Nasional (OSN) Information Technology
                  </li>
                  <li>
                    Microsoft CHAMPS Dreamspark Trainee 2012
                  </li>
                  <li>
                    Microsoft CHAMPS Dreamspark Trainer for HACKATHON 2012
                  </li>
                  <li>
                    Web Application Developer
                  </li>
                  <li>
                    Business Intelligence, Project Manager, IT Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}