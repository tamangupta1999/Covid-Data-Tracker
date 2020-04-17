import React from 'react';
import classes from './HelpfulLinkCard.module.css';

import Spinner from './../UI/Spinner/Spinner';
import NewsCard from './NewsCard/NewsCard';

const HelpfulLink = (props) => {
    const {newsItems, isLoading} = props;
    let newsCard = <Spinner />;
    if(!isLoading) {
        newsCard = (
            newsItems.map((newsItem,index) => {
                return <NewsCard 
                key={index}
                name={newsItem.source.name}
                title={newsItem.title}
                description={newsItem.description}
                url={newsItem.url}
                urlToImage={newsItem.urlToImage}
                publishedAt={newsItem.publishedAt}
                />
            })
        );
    }
    return (
        <div className={classes.HelpfulLinkCard}>
            <div className={classes.LinksCard}>
                <h2 className={classes.LinkHeading}>Important Links To Follow</h2>
                <p><a className={classes.Link} href="https://www.mygov.in/covid-19/" target="_blank" rel="noopener noreferrer">1. My Gov India</a></p>
                <p><a className={classes.Link} href="https://www.mygov.in/aarogya-setu-app/" target="_blank" rel="noopener noreferrer">2. Aarogya Setu App</a></p>
                <p><a className={classes.Link} href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target="_blank" rel="noopener noreferrer">3. World Health Organization</a></p>
                <p><a className={classes.Link} href="https://www.uptodate.com/contents/society-guideline-links-coronavirus-disease-2019-covid-19-international-and-government-guidelines-for-general-care" target="_blank" rel="noopener noreferrer">4. Up To Date</a></p>
                <p><a className={classes.Link} href="https://www.google.com/intl/en_in/covid19/" target="_blank" rel="noopener noreferrer">5. Current Feeds (Google)</a></p>
            </div>
            <h2 className={classes.NewsHeading}>Latest News Headlines</h2>
            <div className={classes.NewsCard}>
            <iframe width="748" height="421" title={"who"} src="https://www.youtube.com/embed/9Ay4u7OYOhA" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                {newsCard}
            </div>
        </div>
    )
}

export default React.memo(HelpfulLink);