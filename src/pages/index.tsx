import React from 'react'
import { GetStaticProps } from 'next'

import Navbar from 'components/Navbar'
import Carousel from 'components/Carousel'
import Container from 'components/Layout/Container'
import Recommended from 'containers/LandingPageContainer/Recommended'
import Trending from 'containers/LandingPageContainer/Trending'
import About from 'containers/LandingPageContainer/About'
import api from 'api'

const LandingPage = ({ recommendedItems, trendingItems }) => {
    return (
        <>
            <Navbar />
            
            <Carousel />
            
            <br/><br/>
            
            <Container>
                <Recommended items={recommendedItems} />

                <Trending items={trendingItems} />

                <About />
            </Container>
        </>
    )
}

export default LandingPage;

export const getStaticProps:GetStaticProps = async () => {
    let recommendedItems = []
    let trendingItems = []

    await api.get(`/products?isRecommended=true`)
    .then(res => {
        recommendedItems = res.data
    })
    .catch(err => {
        console.log(err.response);
    })

    await api.get(`/products?isTrending=true`)
    .then(res => {
        trendingItems = res.data
    })
    .catch(err => {
        console.log(err.response);
    })

    return {
        props: {
            recommendedItems,
            trendingItems
        }
    }
}
