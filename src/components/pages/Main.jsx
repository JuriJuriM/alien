import React from 'react'
import './Main.scss'
import Alien from '../../assets/img/alien.jpeg'
import Alienripley from '../../assets/img/alienripley.jpg'
import Crew from '../../assets/img/crew.jpg'
import Ripley from '../../assets/img/ripley.jpg'
import Art from '../../assets/img/art.jpg'
import Retro from '../../assets/img/retroalien.jpg'
import Aliens from '../../assets/img/aliens.jpg'
import Finish from '../../assets/img/finish.jpg'

const Main = () => {
    return (
        <div className='main'>
            <div className='container'>
                <div className='main__body'>
                    <div className='main__title'>Alien (film)</div>
                    <div className='main__nostromo'>
                        <img src={Alien} alt='Alien' />
                    </div>
                    <div className='main__text-one'>Alien is a 1979 science fiction horror film directed by Ridley Scott and written by Dan O'Bannon.</div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Alienripley} alt='Alienripley' />
                                </div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>Based on a story by O'Bannon and Ronald Shusett, it follows the crew of the commercial space tug Nostromo, who, after coming across a mysterious derelict spaceship on an uncharted planetoid, find themselves up against a deadly and aggressive extraterrestrial loose within their vessel.</div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>The film stars Tom Skerritt, Sigourney Weaver, Veronica Cartwright, Harry Dean Stanton, John Hurt, Ian Holm, and Yaphet Kotto. It was produced by Gordon Carroll, David Giler, and Walter Hill through their company Brandywine Productions and was distributed by 20th Century-Fox.</div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Crew} alt='Crew' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Ripley} alt='Ripley' />
                                </div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>Giler and Hill revised and made additions to the script; Shusett was the executive producer. The Alien and its accompanying artifacts were designed by the Swiss artist H. R. Giger, while concept artists Ron Cobb and Chris Foss designed the more human settings.</div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>Alien premiered on May 25, 1979, as the opening night of the fourth Seattle International Film Festival, presented in 70 mm at midnight. It received a wide release on June 22 and was released on September 6 in the United Kingdom. It was met with mixed reviews on release but was a box-office success, winning the Academy Award for Best Visual Effects, three Saturn Awards (Best Science Fiction Film, Best Direction for Scott, and Best Supporting Actress for Cartwright), and a Hugo Award for Best Dramatic Presentation.</div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Art} alt='Art' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Retro} alt='Retro' />
                                </div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>Critical reassessment since then has resulted in Alien being widely considered one of the greatest and most influential science fiction and horror films of all time. In 2002, Alien was deemed "culturally, historically, or aesthetically significant" by the Library of Congress and was selected for preservation in the United States National Film Registry. In 2008, it was ranked by the American Film Institute as the seventh-best film in the science fiction genre, and as the 33rd-greatest film of all time by Empire.</div>
                            </div>
                        </div>
                    </div>
                    <div className='main__row'>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__text'>The success of Alien spawned a media franchise of films, books, video games, and toys, and propelled Weaver's acting career. The story of her character's encounters with the alien creatures became the thematic and narrative core of the sequels Aliens (1986), Alien 3 (1992), and Alien Resurrection (1997). A crossover with the Predator franchise produced the Alien vs. Predator films, while a two-film prequel series was directed by Scott before the upcoming interquel Alien: Romulus (2024).</div>
                            </div>
                        </div>
                        <div className='main__column'>
                            <div className='main__item'>
                                <div className='main__photo'>
                                    <img src={Aliens} alt='Aliens' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main__nostromo'>
                        <img src={Finish} alt='Finish' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main