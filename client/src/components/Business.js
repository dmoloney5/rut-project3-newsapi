import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NewsItem } from '.'
require('dotenv').config({ path: '../../.env' })

const BusinessList = () => {
    const [data, setArticles] = useState([])

    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get(`https://inshorts.deta.dev/news?category=Business`)
            setArticles(response.data.data)
            console.log(response)
        }

        getArticles()
    }, [])
    return (
        <div className= 'Business'>
            {data.map(data => {
                return (
                    <NewsItem
                        title={data.title}
                        description={data.content}
                        url={data.url}
                        imageUrl={data.imageUrl}
                    />
                )
            })}
        </div>
    )
}

export default BusinessList
