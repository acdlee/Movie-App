import ReviewCard from "../ReivewCard/ReviewCard";
import { STORE } from "../../data";
import { useState } from "react";
import styles from './Review.module.css';

/* 
*   Container for movie review cards.
*/
function Content({}) {
    const [moviesData, setMoviesData] = useState(STORE);

    function addReview([id, review]) {
        // Add the review
        setMoviesData(prevData => (
            // Store is an array of movie objects (with a reviews array property)
            prevData.map((m) => (
                m.id == id ? {...m, reviews: m.reviews.concat(review)} : m
            ))
        ));
    }

    return (
        <section className={styles.section}>
            <h2>Movie Reviews</h2>
            {moviesData.map((movie) => (
                <ReviewCard 
                    key={movie.id} 
                    movieData={movie} 
                    onAddReview={addReview} />
            ))
            }
        </section>
    );
}

export default Content;