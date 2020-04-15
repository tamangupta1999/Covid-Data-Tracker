import React from 'react';
import classes from './NewsCard.module.css';

const NewsCard = (props) => {
    const { name, title, description, url, urlToImage, publishedAt } = props;
    let published = publishedAt.replace("Z", "").split("T");
    let publishedDate = published[0].split("-");
    let monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let formattedDate = `${publishedDate[2]} ${monthName[publishedDate[1]-1]} ${publishedDate[0]}`;

    return (
        <div className={classes.NewsCard}>
            <h3 className={classes.Heading}>{name}</h3>
            <img className={classes.NewsPic} src={urlToImage} alt={name} />
            <div className={classes.Content}>
                <a className={classes.Title} href={url} target="_blank" rel="noopener noreferrer">{title}</a>
                <p>{description}</p>
                <p className={classes.TimeDate}>{formattedDate}</p>
            </div>
        </div>
    )
}

export default NewsCard;
