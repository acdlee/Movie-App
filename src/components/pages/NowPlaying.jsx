import { useState } from "react";
import { useEffect } from "react";

import styles from "./NowPlaying.module.css";
import { FaStar } from "react-icons/fa";

const API_KEY = import.meta.env.VITE_API_KEY;
const POSTER_URL = "https://image.tmdb.org/t/p/w300";

function NowPlaying() {
    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        async function initializeData() {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`);
                const data = await response.json();

                // Filter english movies, sort by popularity, and use the top 8 movies
                let targetData = data.results.filter(movie => movie.original_language == 'en')
                                            .sort((movie1, movie2) => movie2.popularity - movie1.popularity)
                                            .slice(0, 8);

                setMovieData(targetData);
                // return data;
             }  catch (error) {
                console.log(error);
           }
        }
        let targetData = DATA.results.filter(movie => movie.original_language == 'en')
                                .sort((movie1, movie2) => movie2.popularity - movie1.popularity)
                                .slice(0, 8);

        setMovieData(targetData);
        // initializeData();
    }, []);

    return (
        <section className={styles.section}>
            <h2>Now Playing</h2>
            <ul>
                {
                    movieData.map(movie => (
                        <li key={movie.id}>
                            <img src={POSTER_URL + movie.poster_path} alt={movie.title + " poster"} />
                            <div>
                                <span>
                                    <FaStar className={styles.star} />
                                    {movie.vote_average}
                                </span>
                                <span>{movie.release_date}</span>
                                <p>{movie.title}</p>
                            </div>
                            
                        </li>
                    ))
                }
            </ul>
        </section>
    );
}

const DATA = {
    "dates": {
        "maximum": "2025-03-19",
        "minimum": "2025-02-05"
    },
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/qUc0Hol3eP74dbW4YyqT6oRLYgT.jpg",
            "genre_ids": [
                878,
                35,
                12
            ],
            "id": 696506,
            "original_language": "en",
            "original_title": "Mickey 17",
            "overview": "Unlikely hero Mickey Barnes finds himself in the extraordinary circumstance of working for an employer who demands the ultimate commitment to the job… to die, for a living.",
            "popularity": 25.061,
            "poster_path": "/edKpE9B5qN3e559OuMCLZdW1iBZ.jpg",
            "release_date": "2025-02-28",
            "title": "Mickey 17",
            "video": false,
            "vote_average": 7.02,
            "vote_count": 713
        },
        {
            "adult": false,
            "backdrop_path": "/AuSip6e3uvQgPnnFQjzdTrOVPx7.jpg",
            "genre_ids": [
                16,
                28
            ],
            "id": 1297763,
            "original_language": "ja",
            "original_title": "ニンジャバットマン対ヤクザリーグ",
            "overview": "The Batman family has returned to the present to discover that Japan has disappeared, and a giant island - Hinomoto - is now in the sky over Gotham City.  At the top sit the Yakuza, a group of superpowered individuals who reign without honor or humanity and look suspiciously like the Justice League. Now, it’s up to Batman and his allies to save Gotham!",
            "popularity": 23.049,
            "poster_path": "/3onmLeu48mY87UclP3fk2x7YPqw.jpg",
            "release_date": "2025-03-17",
            "title": "Batman Ninja vs. Yakuza League",
            "video": false,
            "vote_average": 4.9,
            "vote_count": 15
        },
        {
            "adult": false,
            "backdrop_path": "/jmsEEwHT7GtVaYFiciKSDI4i8C1.jpg",
            "genre_ids": [
                18
            ],
            "id": 1359893,
            "original_language": "it",
            "original_title": "100 di questi anni",
            "overview": " ",
            "popularity": 22.899,
            "poster_path": "/57v4gE3Dx6TViwIe1BiC2rgghhs.jpg",
            "release_date": "2025-03-17",
            "title": "100 di questi anni",
            "video": false,
            "vote_average": 9,
            "vote_count": 1
        },
        {
            "adult": false,
            "backdrop_path": "/2If6RQLipzaBVsJW3PhbNheYdXv.jpg",
            "genre_ids": [
                18
            ],
            "id": 1439837,
            "original_language": "en",
            "original_title": "The Last Goodbye",
            "overview": "Two estranged siblings attempt to reconcile after the death of their younger brother.",
            "popularity": 22.698,
            "poster_path": "/zYDFxnKgWBTahFItkGo5Uyn8bLz.jpg",
            "release_date": "2025-03-17",
            "title": "The Last Goodbye",
            "video": false,
            "vote_average": 7,
            "vote_count": 2
        },
        {
            "adult": false,
            "backdrop_path": "/dFzKhPaC4wIMmp6eHQr1a2EBstH.jpg",
            "genre_ids": [
                18,
                80
            ],
            "id": 1361451,
            "original_language": "ca",
            "original_title": "La terra negra",
            "overview": "Miquel moves to a town in the Spanish countryside. He is there to work in an industrial mill, ran by siblings María and Ángel. María, who dislikes her work and the neighbours she has to do business with, finds in Miquel a person similar to her.",
            "popularity": 22.617,
            "poster_path": "/3iRxZlTSkXUON99zEq1iZQV2VH2.jpg",
            "release_date": "2025-03-17",
            "title": "La terra negra",
            "video": false,
            "vote_average": 4,
            "vote_count": 1
        },
        {
            "adult": false,
            "backdrop_path": "/nf6ldbdXgPd49c07MpVqvdzahcC.jpg",
            "genre_ids": [
                18
            ],
            "id": 1104024,
            "original_language": "en",
            "original_title": "The Bitter Tears of Zahra Zand",
            "overview": "An 80s-set Iranian reimagining Of Fassbinder's 'Petra Von Kant'. A legendary Iranian fashion designer clings to the ghosts of her past - fighting for relevance, identity, and survival in a country that isn’t her own.",
            "popularity": 22.449,
            "poster_path": "/3kh2YcUy0yGob7qG02Gi0VT8KBo.jpg",
            "release_date": "2025-03-17",
            "title": "The Bitter Tears of Zahra Zand",
            "video": false,
            "vote_average": 8,
            "vote_count": 1
        },
        {
            "adult": false,
            "backdrop_path": "/i7qlKvC5se9mzHNc1LLJiGvI9so.jpg",
            "genre_ids": [
                53,
                80,
                28
            ],
            "id": 1433719,
            "original_language": "en",
            "original_title": "High Ground",
            "overview": "When a mysterious prisoner lands in his jail, a border town sheriff faces the wrath of a brutal cartel.",
            "popularity": 22.433,
            "poster_path": "/p18YjffOB3RzQ4fpZMrQkHUaJNU.jpg",
            "release_date": "2025-03-17",
            "title": "High Ground",
            "video": false,
            "vote_average": 3.8,
            "vote_count": 6
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                99
            ],
            "id": 1435057,
            "original_language": "lt",
            "original_title": "Sacrum ir Profanum Pievėnuose",
            "overview": "Once a year, a quiet and secluded village in the north-western part of Lithuania comes alive to celebrate Catholic Easter, doing its best to preserve the vanishing ancient tradition of the Guardians of the Cross. With gentle humor observing the preparations of the local community for the vigil and immersing the audience in Easter night, the filmmakers raise questions about the relationship between the sacred and profane in the modern world.",
            "popularity": 22.429,
            "poster_path": "/u1I49qAgXCSGiwq8ixMULl9SwJg.jpg",
            "release_date": "2025-03-17",
            "title": "Sacrum and Profanum in Pievenai",
            "video": false,
            "vote_average": 3.5,
            "vote_count": 2
        },
        {
            "adult": false,
            "backdrop_path": "/52hXjbdOEjiOdW5hlonjA1QcrD8.jpg",
            "genre_ids": [
                35
            ],
            "id": 1439890,
            "original_language": "en",
            "original_title": "Bert Kreischer: Lucky",
            "overview": "Losing 45 pounds. Getting parenting advice from Snoop Dogg. Bert Kreischer knows he's the luckiest guy around — and he's recounting his blessings.",
            "popularity": 22.418,
            "poster_path": "/Tuln36rarqdrSnXemkb7oBRmCM.jpg",
            "release_date": "2025-03-17",
            "title": "Bert Kreischer: Lucky",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                99
            ],
            "id": 1443695,
            "original_language": "it",
            "original_title": "Eyes Everywhere",
            "overview": "Jodie, a police inspector, is tasked with finding out who sabotaged the technological system that governs every aspect of daily life: from transport to global security, from health care to management of essential services. Without a quick solution, hospitals will collapse, casualties will increase and the country could be plunged into an apocalyptic scenario. To carry out the investigation, Jodie must rely on her father Mark and an unlikely ally: Matt, a hacker with a criminal past. The clues seem to lead to a single culprit, Doctor Borghese, a respected psychologist who lost his job because of artificial intelligence. But is he really responsible, or is someone trying to frame him?\r The film explores, through interviews with experts and fictional scenarios, how technology is transforming cities, mobility, healthcare, sustainability and even space exploration.",
            "popularity": 22.408,
            "poster_path": "/inJjkPchqjXe3vLajI7MFVldUSb.jpg",
            "release_date": "2025-03-17",
            "title": "Eyes Everywhere",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                99,
                10770
            ],
            "id": 1442200,
            "original_language": "ca",
            "original_title": "Revolució 304",
            "overview": "",
            "popularity": 21.168,
            "poster_path": null,
            "release_date": "2025-03-18",
            "title": "Revolució 304",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": "/axTt8unBOfjEZaxrx2xzklAqo7r.jpg",
            "genre_ids": [
                27,
                53
            ],
            "id": 1439804,
            "original_language": "en",
            "original_title": "Spider in the Cupboard",
            "overview": "SMILE, YOU'RE ON CAMERA...\r Jen is a crisis hotline volunteer, using the service to cope with losing her sister at a young age. Little does she know, a former caller has beensecretly living in her apartment, recording her every move with a home video camera. Jen is sent into a spiral by thecombination ofJohn Doe's subtle\r maniuplations and the apathy of Jen's loved ones, namely Harry.",
            "popularity": 21.164,
            "poster_path": "/9lKBcNmWdSbODDuF6TBO6UZvAyL.jpg",
            "release_date": "2025-03-18",
            "title": "Spider in the Cupboard",
            "video": false,
            "vote_average": 4,
            "vote_count": 1
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                99
            ],
            "id": 1437920,
            "original_language": "en",
            "original_title": "Centered: Joe Lieberman",
            "overview": "In a time of deep political division, Centered: Joe Lieberman chronicles the remarkable career of Joe Lieberman, a principled and bipartisan politician who navigated the tumultuous world of American politics with unwavering integrity, offering timely lessons on the power of collaboration and leadership beyond party lines.",
            "popularity": 21.164,
            "poster_path": "/pGeRaZEmOo46DhgRePw4uAUSnkJ.jpg",
            "release_date": "2025-03-18",
            "title": "Centered: Joe Lieberman",
            "video": false,
            "vote_average": 8.5,
            "vote_count": 2
        },
        {
            "adult": false,
            "backdrop_path": "/ApBJ1YzoJsDBe8HjZaDTgqTCzMv.jpg",
            "genre_ids": [
                99
            ],
            "id": 1437701,
            "original_language": "en",
            "original_title": "Leaving Neverland 2: Surviving Michael Jackson",
            "overview": "Explores the personal toll on James Safechuck and Wade Robson after they went public with accusations against pop icon Michael Jackson. The two men continue to seek justice as they face backlash from his global army of fans. With exclusive access to court hearings, the film shows the extent to which the Jackson estate has fought to prevent Robson and Safechuck from having their day in court.",
            "popularity": 21.162,
            "poster_path": "/wPmKY6KaLj3PEPoDuy0tAX4MKYs.jpg",
            "release_date": "2025-03-18",
            "title": "Leaving Neverland 2: Surviving Michael Jackson",
            "video": false,
            "vote_average": 7,
            "vote_count": 2
        },
        {
            "adult": false,
            "backdrop_path": "/m4FEubjmtytpMDchQfDmbJKHOG6.jpg",
            "genre_ids": [
                99
            ],
            "id": 1437446,
            "original_language": "en",
            "original_title": "The Twister: Caught in the Storm",
            "overview": "In May 2011, a massive tornado ripped through Joplin, Missouri. With pulse-pounding firsthand footage, this documentary goes inside a deadly twister.",
            "popularity": 21.162,
            "poster_path": "/ggXb37lX9gW4SR7kpMaraXDFeFR.jpg",
            "release_date": "2025-03-18",
            "title": "The Twister: Caught in the Storm",
            "video": false,
            "vote_average": 7,
            "vote_count": 1
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                53
            ],
            "id": 1436099,
            "original_language": "en",
            "original_title": "Act of Kindness",
            "overview": "A young woman living in her car has her life turned upside down after a friendly encounter in the woods goes south.",
            "popularity": 21.162,
            "poster_path": "/jC9eJYTxvREpBeaR3KJFv3SUq4o.jpg",
            "release_date": "2025-03-18",
            "title": "Act of Kindness",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": "/sBtuuQ2MPliv76mjckkfwB3mNNO.jpg",
            "genre_ids": [
                99
            ],
            "id": 1417181,
            "original_language": "en",
            "original_title": "Dawn of Impressionism: Paris 1874",
            "overview": "The Impressionists are the most popular group in art history – millions flock every year to marvel at their masterpieces. But, to begin with, they were scorned, penniless outsiders. 1874 was the year that changed everything; the first Impressionists, “hungry for independence”, broke the mould by holding their own exhibition outside official channels. Impressionism was born and the art world was changed forever.  What led to that first groundbreaking show 150 years ago? Who were the maverick personalities that wielded their brushes in such a radical and provocative way? The spectacular Musée d’Orsay exhibition brings fresh eyes to this extraordinary tale of passion and rebellion. The story is told not by historians and curators but in the words of those who witnessed the dawn of Impressionism: the artists, press and people of Paris, 1874.",
            "popularity": 21.143,
            "poster_path": "/lSU85MrxOtlrvtiRlI9GTPBGiwK.jpg",
            "release_date": "2025-03-18",
            "title": "Dawn of Impressionism: Paris 1874",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": "/vnNLcHsXQ5N9dDLsNJW2Bm8UNmG.jpg",
            "genre_ids": [
                99
            ],
            "id": 1204967,
            "original_language": "en",
            "original_title": "USAH: Uncommon Stories of American Horror",
            "overview": "27 real-life stories of American horror are told by a mysterious narrator, who draws inspiration from some famous paintings of American art displayed in an ancient abbey.",
            "popularity": 21.088,
            "poster_path": "/FDGnXfWwRJETNa0TP4xq2Sjt5k.jpg",
            "release_date": "2025-03-18",
            "title": "USAH: Uncommon Stories of American Horror",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                53,
                27
            ],
            "id": 675776,
            "original_language": "en",
            "original_title": "Persona",
            "overview": "An Actress finds herself in a complex puzzle of Personas when someone unexpected arrives to take her place.",
            "popularity": 21.06,
            "poster_path": null,
            "release_date": "2025-03-18",
            "title": "Persona",
            "video": false,
            "vote_average": 0,
            "vote_count": 0
        },
        {
            "adult": false,
            "backdrop_path": "/2n7lYEeIbucsEQCswRcVB6ZYmMP.jpg",
            "genre_ids": [
                878,
                12,
                18
            ],
            "id": 777443,
            "original_language": "en",
            "original_title": "The Electric State",
            "overview": "An orphaned teen hits the road with a mysterious robot to find her long-lost brother, teaming up with a smuggler and his wisecracking sidekick.",
            "popularity": 20.545,
            "poster_path": "/jRdxyW5ZmhD3ycStlb7gwOewTuE.jpg",
            "release_date": "2025-03-07",
            "title": "The Electric State",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 420
        }
    ],
    "total_pages": 217,
    "total_results": 4324
};

export default NowPlaying;