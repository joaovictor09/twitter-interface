import React from 'react';
import { FiSearch, FiImage } from 'react-icons/fi'
import { BsThreeDots } from 'react-icons/bs'
import { AiOutlineGif, AiOutlineSmile, AiOutlineCalendar } from 'react-icons/ai'
import { GoGraph } from 'react-icons/go'

import logoImg from '../../assets/logo.png'
import profileImg from '../../assets/profile-img.jpg'
import './styles.css'

export default function Home() {
    return(
        <div className="container">
                <section className="left">
                    <div className="content">
                        <button className="home">
                            <img src={logoImg} alt="Twitter logo"/>
                        </button>

                        <div className="action-buttons">

                            <button>
                                <span>Página Inicial</span>
                            </button>
                            <button>
                                <span>Explorar</span>
                            </button>
                            <button>
                                <span>Notificações</span>
                            </button>
                            <button>
                                <span>Mensagens</span>
                            </button>
                            <button>
                                <span>Itens salvos</span>
                            </button>
                            <button>
                                <span>Listas</span>
                            </button>
                            <button>
                                <span>Perfil</span>            
                            </button>
                            <button>
                                <span>Mais</span>
                            </button>
                        </div>

                        <div className="tweet-button">
                            <button>Tweetar</button>
                        </div>

                        <div className="profile">
                            <img src={profileImg} alt="profile image"/>
                            <div className="profile-information">
                                <span>Jair M. Bolsonaro</span>
                                <strong>@jairbolsonaro</strong>
                            </div>
                            <BsThreeDots color={"#fff"} size={25}/>
                        </div>


                    </div>
                    
                </section>
                <section className="mid">
                    <button className="inicial-page">
                        <strong>Página Inicial</strong>
                    </button>
                    <div className="new-tweet">
                        <div className="input-section">
                            <img src={profileImg} alt=""/>
                            <input type="text" placeholder="O que está acontecendo? "/>
                        </div>
                        <div className="new-tweet-buttons">
                            <div className="tweet-content">
                            <button>
                                <FiImage/>
                            </button>
                            <button>
                                <AiOutlineGif/>
                            </button>
                            <button>
                                <GoGraph/>
                            </button>
                            <button>
                                <AiOutlineSmile/>
                            </button>
                            <button>
                                <AiOutlineCalendar/>
                            </button>
                            </div>
                            <div className="tweet-button">
                                <button>Tweetar</button>
                            </div>
                        </div>
                    </div>

                </section>
                <section className="right">
                    <div className="search">
                        <FiSearch />
                        <input type="text" placeholder="Buscar no twitter"/>
                    </div>
                </section>
        </div>
    )
}