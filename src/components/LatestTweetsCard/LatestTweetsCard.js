import React from 'react';
import classes from './LatestTweetsCard.module.css';
import TwitterIcon from '../../assets/Image/twitter.svg';

const LatestTweetsCard = (props) => {
    return (
        <div className={classes.LatestTweetsCard}>
            <p className={classes.TweetHeading}>Latest Tweets<img src={TwitterIcon} alt="twitter icon" /></p>
            <div>
                <blockquote className="twitter-tweet"><p lang="en" dir="ltr">LIVE: One world,
                 <a href="https://twitter.com/hashtag/TogetherAtHome?src=hash&amp; ref_src=twsrc%5Etfw">#TogetherAtHome</a>! <a href="https://twitter.com/hashtag/COVID19?src=hash&amp;ref_src=twsrc%5Etfw">#COVID19</a>
                    <a href="https://t.co/kHCdwCHKwf">https://t.co/kHCdwCHKwf</a></p>&mdash; World Health Organization (WHO) (@WHO)
                  <a href="https://twitter.com/WHO/status/1251571221998653440?ref_src=twsrc%5Etfw">April 18, 2020</a>
                </blockquote>
                <blockquote className="twitter-tweet"><p lang="en" dir="ltr">As the world battles COVID-19, India’s energetic and innovative youth can show the way in ensuring healthier and prosperous future. <br></br><br></br>
                Shared a few thoughts on <a href="https://twitter.com/LinkedIn?ref_src=twsrc%5Etfw">@LinkedIn</a>,
                which would interest youngsters and professionals. <a href="https://t.co/ZjjVSbMJ6b">https://t.co/ZjjVSbMJ6b</a>
                </p>&mdash; Narendra Modi (@narendramodi) <a href="https://twitter.com/narendramodi/status/1251835251300560896?ref_src=twsrc%5Etfw">April 19, 2020</a></blockquote>
                <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Great credit must be given to
                <a href="https://twitter.com/fema?ref_src=twsrc%5Etfw">@FEMA</a> and all of those that are helping our States make it big!
                <a href="https://t.co/MwWfmZjQIN">https://t.co/MwWfmZjQIN</a></p>&mdash; Donald J. Trump (@realDonaldTrump)
                <a href="https://twitter.com/realDonaldTrump/status/1251869990497763328?ref_src=twsrc%5Etfw">April 19, 2020</a>
                </blockquote>
            </div>
        </div>
    )
}

export default LatestTweetsCard;