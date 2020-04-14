import React from 'react';
import classes from './TweetCard.module.css';

const TweetCard = (props) => {
    const { tweetIcon, tweetName, tweetId, tweetData, likeIcon,shareIcon ,likes,share } = props;
    let trimmedTweetData = function (input, cutlength = 70, appendData = "......") {
        if (input.length <= cutlength)
            return input;
        return input.substr(0, cutlength) + appendData;
    }
    return (
        <div className={classes.TweetCard}>
            <div className={classes.TweetHeading} >
                <img src={tweetIcon} alt={tweetName} className={classes.TweetImage} />
                <div>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className={classes.UserHeading}><strong>{tweetName}</strong></a><br></br>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className={classes.UserId}>{tweetId}</a>
                </div>
            </div>
            <p className={classes.TweetData}>{trimmedTweetData(tweetData)}</p>
            <div>
                <img src={likeIcon} alt="likeIcon" /><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className={classes.Likes}>{likes}</a>
                <img src={shareIcon} alt="shareIcon" /><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className={classes.Likes}>{share}</a>

            </div>
        </div>
    )
}

export default React.memo(TweetCard);