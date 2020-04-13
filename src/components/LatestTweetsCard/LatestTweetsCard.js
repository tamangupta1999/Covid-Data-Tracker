import React from 'react';
import classes from './LatestTweetsCard.module.css';
import TwitterIcon from '../../assets/Image/twitter.svg';
import TweetCard from './TweetCard/TweetCard';

import WhoIcon from './../../assets/Image/who.png';
import ModiIcon from './../../assets/Image/modi.png';
import TrumpIcon from './../../assets/Image/trump.png';
import LikeIcon from '../../assets/Image/like.svg';
import ShareIcon from './../../assets/Image/share.svg';



const LatestTweetsCard = (props) => {
    let tweetDataArray= [
        {
            icon : WhoIcon,
            tweetName : "World Health Organization",
            tweetId: "@who",
            tweetData : `I bow to those martyrs who were 
                killed mercilessly in Jallianwala Bagh on this day. 
                We will never forget their courage and sacrifice.
                 Their valour will inspire Indians for the years to come.`,
                 likeIcon: LikeIcon,
                 shareIcon: ShareIcon,
                 likes: "80.4k",
                 share :"8k"
        },
        {
            icon : ModiIcon,
            tweetName : "Narendra Modi",
            tweetId: "@narendramodi",
            tweetData : `I bow to those martyrs who were 
                killed mercilessly in Jallianwala Bagh on this day. 
                We will never forget their courage and sacrifice.
                 Their valour will inspire Indians for the years to come.`,
                 likeIcon: LikeIcon,
                 shareIcon: ShareIcon,
                 likes: "100.2k",
                 share :"27k"
        },
        {
            icon : TrumpIcon,
            tweetName : "Donald J. Trump",
            tweetId: "@who",
            tweetData : `Working from home with your children around?
            Your kids are bored and want to play outside but they can't?
            
            NOT EASY for any of us!`,
                 likeIcon: LikeIcon,
                 shareIcon: ShareIcon,
                 likes: "74.9k",
                 share :"16.2k"
        }
    ];
    let tweetResult = (
        tweetDataArray.map(tweet => {
            return <TweetCard 
            tweetIcon={tweet.icon}
            tweetName={tweet.tweetName}
            tweetId={tweet.tweetId}
            tweetData={tweet.tweetData}
            likeIcon={tweet.likeIcon}
            shareIcon={tweet.shareIcon}
            likes={tweet.likes}
            share={tweet.share}
            key={tweet.tweetName}/>
        })
    )
    return (
        <div className={classes.LatestTweetsCard}>
            <p className={classes.TweetHeading}>Latest Tweets<img src={TwitterIcon} alt="twitter icon" /></p>
            {tweetResult}
        </div>
    )
}

export default LatestTweetsCard;