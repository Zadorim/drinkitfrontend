import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const AboutPage = () => {
    return (
        <div className='container-xl'>
            <div className="row my-5">
                <div className="col-lg-4">
                    <h1 className="display-4 text-info mb-4">Rólunk</h1>
                    <p className='text-secondary mb-6'>Üdvözlünk a DrinkIt oldalán! Sör, bor, pálinka, gin, rum és több százféle alkoholos ital vár az új Mr. DrinkIt webáruházban. Lépj be hozzánk és válogass kedvedre!</p>
                </div>
                <div className="col-lg-8 mt-3 mt-lg-0">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src='img/Slide_1.jpg'
                                alt="Első oldal"
                            />
                            <Carousel.Caption>
                                <h3>Első lépés</h3>
                                <p>Készülj velem, s teríts meg.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src='img/Slide_2.jpg'
                                alt="Második oldal"
                            />
                            <Carousel.Caption>
                                <h3>Másodikként</h3>
                                <p>Élvezd a pillanatot.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="img/Slide_3.jpg"
                                alt="Harmadik oldal"
                            />
                            <Carousel.Caption>
                                <h3>Harmadszorra</h3>
                                <p>Minden színesebb lett.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="img/Slide_4.jpg"
                                alt="Negyedik oldal"
                            />
                            <Carousel.Caption>
                                <h3>Negyedikként</h3>
                                <p>Tölts ki és ünnepelj!</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="img/Slide_5.jpg"
                                alt="Ötödik oldal"
                            />
                            <Carousel.Caption>
                                <h3>Utoljára</h3>
                                <p>Mert megérdemled.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
