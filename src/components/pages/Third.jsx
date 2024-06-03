import React from 'react'
import './Third.scss'
import Weaver from '../../assets/img/wiwer.jpg'
import First from '../../assets/img/first.jpg'
import Ellens from '../../assets/img/ellens.jpg'
import Cool from '../../assets/img/cool.jpg'
import Forfans from '../../assets/img/Forfans.jpg'

const Third = () => {
    return (
        <div className='third'>
            <div className='container'>
                <div className='third__body'>
                    <div className='third__title'>Susan Alexandra "Sigourney" Weaver</div>
                    <div className='third__weaver'>
                        <img src={Weaver} alt='Weaver' />
                    </div>
                    <div className='third__row'>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__photo'>
                                    <img src={First} alt='First' />
                                </div>
                            </div>
                        </div>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__text'>Susan Alexandra "Sigourney" Weaver (/sɪˈɡɔːrni/; born October 8, 1949) is an American actress. A figure in science fiction and popular culture, she has received various accolades, including a British Academy Film Award, two Golden Globe Awards, and a Grammy Award, in addition to nominations for three Academy Awards, four Primetime Emmy Awards, and a Tony Award. In 2003, she was voted Number 20 in Channel 4's countdown of the 100 greatest movie stars of all time.</div>
                            </div>
                        </div>
                    </div>
                    <div className='third__row'>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__text'>Weaver rose to fame for starring as Ellen Ripley in Ridley Scott's science fiction film Alien (1979). She reprised her role in James Cameron's Aliens (1986), for which she received her first Academy Award nomination, and again in Alien 3 (1992) and Alien Resurrection (1997). The character is regarded as a significant female protagonist in cinema history. She reunited with Cameron in Avatar (2009) and Avatar: The Way of Water (2022), two of the highest-grossing films of all time. She also played Dana Barrett in the Ghostbusters films starting in 1984.</div>
                            </div>
                        </div>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__photo'>
                                    <img src={Ellens} alt='Ellens' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='third__row'>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__photo'>
                                    <img src={Forfans} alt='Forfans' />
                                </div>
                            </div>
                        </div>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__text'>On Broadway, she received a Tony Award nomination for her role in the play Hurlyburly (1984). In 1988, Weaver received dual Academy Award nominations—Best Actress and Best Supporting Actress—for the respective roles of primatologist Dian Fossey in Gorillas in the Mist and a young associate in Working Girl, both of which won her Golden Globe Awards. She won the BAFTA Award for Best Supporting Actress for her role in The Ice Storm (1997). Her other notable films include Copycat (1995), Galaxy Quest (1999), The Village (2004), Vantage Point (2008), Chappie (2015), and A Monster Calls (2016).</div>
                            </div>
                        </div>
                    </div>
                    <div className='third__row'>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__text'>Weaver has also performed voice roles in the animated films The Tale of Despereaux (2008) and Pixar films WALL-E (2008) and Finding Dory (2016) as well as several documentaries, such as the BBC series Planet Earth (2006) and The Beatles: Eight Days a Week (2016). In television, she has received Primetime Emmy Award nominations for her starring roles in the movies Snow White: A Tale of Terror (1998), Prayers for Bobby (2009), and Political Animals (2013). She won the Grammy Award for Best Spoken Word Album for narrating the humor book Earth (The Book) (2010).</div>
                            </div>
                        </div>
                        <div className='third__column'>
                            <div className='third__item'>
                                <div className='third__photo'>
                                    <img src={Cool} alt='Cool' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Third