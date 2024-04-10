import React from 'react';
import Hero from '../../components/Hero/Hero';
import Header from '../../components/Header/Header';
import './Home.css';

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
            </div>
        </>
    );
};

export default Home;