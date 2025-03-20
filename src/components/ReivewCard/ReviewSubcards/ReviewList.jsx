import { v4 as uuidv4 } from 'uuid';
import StarRating from '../StarRating/StarRating';
import styles from './ReviewList.module.css';

/* 
*   Lists all the reviews with their user, review, and rating.
*/
function ReviewList({ reviews }) {
    return (
        <form className={styles.container}>
            <fieldset className={styles.innerContainer}>
                <legend>Reviews:</legend>
                {reviews.map((review) => (
                    <p key={uuidv4()}>
                        <span>{review.user}</span> <br />
                        {review.review} <br />
                        <StarRating rating={review.rating} />
                    </p>
                ))
                }
            </fieldset>
        </form>
    )
}

export default ReviewList;