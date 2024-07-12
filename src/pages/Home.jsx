import React, { useEffect, useState } from "react";
import BannerHome from "../components/BannerHome";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import axios from "axios";
import useFetch from "../hooks/useFetch";

const Home = () => {
    const TrendingData = useSelector((state) => state.movieData.bannerData);
    const [nowPlayingData, setNowPlayingData] = useState([]);
    const {data: nowplayingData} = useFetch("/movie/now_playing");
    const {data: topRatedData} = useFetch("/movie/top_rated");
    const {data: popularTVShowData} = useFetch("/movie/tv/popular");
    const { data: onTheAirShowData} = useFetch("/movie/tv/on_the_air");

    const fetchNowplayingData = async () => {
        try {
            const response = await axios.get();
            setNowPlayingData(response.data.results);
            console.log(response.data.results);
        } catch (error) {}
    };

 



    return (
        <div>
            <BannerHome />
            <HorizontalScrollCard
                data={TrendingData}
                heading={"Trending"}
                trending={true}
            />
            <HorizontalScrollCard
                data={nowPlayingData}
                heading={"Now playing"}
            />
            <HorizontalScrollCard
                data={topRatedData}
                heading={"Top Rated Movies"}
            />
            <HorizontalScrollCard
                data={popularTVShowData}
                heading={"Popular TV Shows"}
            />
            <HorizontalScrollCard
                data={onTheAirShowData}
                heading={"On The Air"}
            />
        </div>
    );
};

export default Home;
