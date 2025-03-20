import AddReviewForm from "./ReviewSubcards/AddReviewForm";
import ReviewList from "./ReviewSubcards/ReviewList";
import styles from "./ReviewCard.module.css";

/* 
*   Movie review card.
*/
function ReviewCard({ movieData, onAddReview }) {
    // Calculate the review score of the movie
    function calculateReview() {
        const totalReviews = movieData.reviews.length;
        const totalScore = movieData.reviews.reduce((accumulator, currReview) => {  // Accumulating total score
            return accumulator + parseFloat(currReview.rating);
        }, 0);
        
        // Return the average review score
        return (totalScore / totalReviews).toFixed(2);
    }

    return (
        <article className={styles.container}>
            <div className={styles.fullWidth}>
                <h3 className={styles.h3}>{ movieData.title } - { movieData.year }</h3>
                <img
                    className={styles.img}
                    src={ movieData.imgSrc } 
                    alt={ `Poster for ${movieData.title}` } />
                <p className={styles.p}>{ movieData.synopsis }</p>
                <p className={styles.p}><span>Rating: {calculateReview()}</span></p>
                <p className={styles.p}><span>Categories: </span>{ movieData.categories.join(' ') }</p>
            </div>
            <ReviewList 
                reviews={movieData.reviews} />
            <AddReviewForm movieID={movieData.id} onAddReview={onAddReview} />
        </article>
    );
}

export default ReviewCard;