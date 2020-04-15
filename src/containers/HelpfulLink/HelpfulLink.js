import React, { useState, useEffect } from 'react'
import axios from 'axios';

import HelpfulLinkCard from '../../components/HelpfulLinkCard/HelpfulLinkCard';



const HelpfulLink = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [newsItems, setNewsItems] = useState([]);

    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=8dd0aa4e6e754abaaaf0240f0821cb39&pageSize=10')
            .then(response => {
                setNewsItems(response.data.articles);
                setIsLoading(false);
            }).catch(error => {
                console.log(error.message)
            })
    }, [])

    return (
        <HelpfulLinkCard newsItems={newsItems}
            isLoading={isLoading} />
    )
}

export default HelpfulLink;