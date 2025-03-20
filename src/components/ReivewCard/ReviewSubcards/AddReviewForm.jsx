import { useState } from "react";
import StarRating from "../StarRating/StarRating";
import styles from './AddReviewForm.module.css';

/* 
*   Form to add a new review.
*/
function AddReviewForm({ movieID, onAddReview }) {
    const [username, setUsername] = useState('');
    const [reviewInput, setReviewInput] = useState('');
    const [rating, setRating] = useState(null);

    function updateUsername(e) {
        setUsername(e.target.value);
    }

    function handleReviewInput(e) {
        setReviewInput(e.target.value);
    }

    function handleSetRating(value) {
        // console.log(e.target.value);
        setRating(value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const newReview = {
            user: username,
            review: reviewInput,
            rating: rating,
        }

        setUsername('');
        setReviewInput('');
        setRating(null);

        onAddReview([movieID, newReview]);
    }

    return (
        <form className={styles.container} onSubmit={handleSubmit}>
            <fieldset className={styles.innerContainer}>
                <legend>Add a Review:</legend>
                <label htmlFor="username">User name:</label> <br />
                <input 
                    type="text"
                    name="username"
                    value={username}
                    onChange={updateUsername} /> <br />
                <label htmlFor="review-input">Review</label> <br />
                <textarea 
                    name="review-input"
                    value={reviewInput} 
                    onChange={handleReviewInput} /> <br />
                <span>Rating: </span> <br />
                <StarRating
                    rating={rating}
                    onSetRating={handleSetRating}/>  <br />
                <button>Submit</button>
            </fieldset>
        </form>
    );
}

export default AddReviewForm;