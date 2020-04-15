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
            <h1 className={classes.NewsHeading}>News Headlines</h1>
            <div className={classes.NewsCard}>
            <iframe width="748" height="421" title={"who"} src="https://www.youtube.com/embed/9Ay4u7OYOhA" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                {newsCard}
            </div>
        </div>
    )
}

export default React.memo(HelpfulLink);