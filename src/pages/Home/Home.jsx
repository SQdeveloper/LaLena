import React from 'react';
import Hero from '../../components/Hero/Hero';
import Header from '../../components/Header/Header';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Header/>
            <div className='home'>                
                <Hero/>
                <div className="home_banner">
                    <div className="home_banner__left">
                        <div className="circle">
                            <img src='/icons/HearBlack.a82381ab.svg' rel='heart'></img>
                        </div>
                        <div className='text'>Únete al calor de la familia La Leña, y descubre todos <span>NUESTROS BENEFICIOS!</span></div>
                    </div>
                    <div className="home_banner__right">
                        <button className='button-style'>registrate</button>
                        <button className='button-style'>inicia sesión</button>
                    </div>
                </div>
                <section className="home_plates">
                    <img src="/icons/iconJosper.svg" alt="icon" />
                    <h2>32 AÑOS CELEBRANDO EN FAMILIA</h2>
                    <p>Descubre nuestros favoritos, hechos con insumos 100% peruanos y con el auténtico sabor a La Leña.</p>
                    <div className="home_plates__contentBoxes">
                        <div className="home_plates__left">
                            <img src="/images/bg/collection_19_image_desktop_2024_02_01_19_40_20.png" alt="chiken" />
                        </div>
                        <div className="home_plates__right">
                            <div className="home_plates__box">
                                <div className="contImage">
                                    <img src="https://dtsqpmpjezii4.cloudfront.net/media/app_ecommerce/combos/images_desktops/combo_20_image_desktop_2024_02_14_20_08_08.png" alt="food" />
                                    <div className="secondary">
                                        <button className="button-style">Ver más</button>
                                    </div>
                                </div>
                                <section>
                                    <h3>long title</h3>
                                    <p>/2 Pollo a La Leña con papas huamantanga, 2 bebidas naturales yeña con papas huamantanga, 2 bebidas naturales y</p>
                                    <span>S/52.90</span>
                                </section>
                            </div>
                            <div className="home_plates__box">
                                <div className="contImage">
                                    <img src="https://dtsqpmpjezii4.cloudfront.net/media/app_ecommerce/combos/images_desktops/combo_20_image_desktop_2024_02_14_20_08_08.png" alt="food" />
                                    <div className="secondary">
                                        <button className="button-style">Ver más</button>
                                    </div>
                                </div>
                                <section>
                                    <h3>long title</h3>
                                    <p>/2 Pollo a La Leña con papas huamantanga, 2 bebidas naturales yeña con papas huamantanga, 2 bebidas naturales y</p>
                                    <span>S/52.90</span>
                                </section>
                            </div>
                            <div className="home_plates__box">
                                <div className="contImage">
                                    <img src="https://dtsqpmpjezii4.cloudfront.net/media/app_ecommerce/combos/images_desktops/combo_20_image_desktop_2024_02_14_20_08_08.png" alt="food" />
                                    <div className="secondary">
                                        <button className="button-style">Ver más</button>
                                    </div>
                                </div>
                                <section>
                                    <h3>long title</h3>
                                    <p>/2 Pollo a La Leña con papas huamantanga, 2 bebidas naturales yeña con papas huamantanga, 2 bebidas naturales y</p>
                                    <span>S/52.90</span>
                                </section>
                            </div>
                            <div className="home_plates__box">
                                <div className="contImage">
                                    <img src="https://dtsqpmpjezii4.cloudfront.net/media/app_ecommerce/combos/images_desktops/combo_20_image_desktop_2024_02_14_20_08_08.png" alt="food" />
                                    <div className="secondary">
                                        <button className="button-style">Ver más</button>
                                    </div>
                                </div>
                                <section>
                                    <h3>long title</h3>
                                    <p>/2 Pollo a La Leña con papas huamantanga, 2 bebidas naturales yeña con papas huamantanga, 2 bebidas naturales y</p>
                                    <span>S/52.90</span>
                                </section>
                            </div>
                        </div>
                    </div>
                    <button className="button-style">ver más</button>
                </section>
                <section className="home_comunity">
                    <div className="home_comunity__left">
                        <img src="/icons/iconSnowFlake.svg" alt="flower_red" />
                        <h2>NUESTRA <br/> COMUNIDAD</h2>
                        <span>Manténte al tanto de todo</span>
                        <div className="content_tiktok">
                            <div className="content_tiktok__top">
                                <img src="/images/logo/logo-red.webp" alt="logo" />
                                <div className="content_tiktok__top-info">
                                    <strong>@lalenaperu</strong>
                                    <span>Restaurant</span>
                                    <p>Si sabe a la Leña es nuestro</p>
                                </div>
                                <button>seguir</button>
                            </div>
                            <div className="content_tiktok__videos">
                                <div className="content_tiktok__video">
                                    <img src="/fotogramas/fotograma1.png" alt="food" />
                                </div>
                                <div className="content_tiktok__video">
                                    <img src="/fotogramas/fotograma2.png" alt="food" />
                                </div>
                                <div className="content_tiktok__video">
                                    <img src="/fotogramas/fotograma3.png" alt="food" />
                                </div>
                                <div className="content_tiktok__video">
                                    <img src="/fotogramas/fotograma4.png" alt="food" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home_comunity__right">
                        <div className="tiktok_vertical">
                            <div className="tiktok_vertical-box">
                                <img src="/tiktok-photos/tiktok-photo.png" alt="tiktok" />
                            </div>
                            <div className="tiktok_vertical-box">
                                <img src="/tiktok-photos/tiktok-photo2.png" alt="tiktok" />
                            </div>
                        </div>
                        <div className="tiktok_vertical">
                            <div className="tiktok_vertical-box">
                                <img src="/tiktok-photos/tiktok-photo3.png" alt="tiktok" />
                            </div>
                            <div className="tiktok_vertical-box">
                                <img src="/tiktok-photos/tiktok-photo4.png" alt="tiktok" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="home_joinGroup">
                    <div className="home_joinGroup__info">
                        <img src="/icons/iconHeart.svg" alt="about us" />
                        <h2>únete a nuestro equipo</h2>
                        <p>¿Quieres formar parte de nuestra familia? Estamos en búsqueda del mejor talento, personas aguerridas y de propósito para seguir creciendo juntos.</p>
                        <Link className='button-style'>trabaja con nosotros</Link>
                    </div>
                    <img src="/images/bg/chefs.webp" alt="chefs" />
                </section>
            </div>
        </>
    );
};

export default Home;