import { Selectors as selector } from '../config/scrapper.config';

import { Scrapper } from './Scrapper';

let scrapper = new Scrapper()

const setData = (info : string) =>{
    return scrapper.setData(info)
}

const getRecommend = async() =>{
    return await scrapper.getInfoCard(selector.recommend)
}

const getLastAdded = async() =>{
    return await scrapper.getInfoCard(selector.lastAdded)
}

const getLastEpisodes =async () => {
    return await scrapper.getInfoPoster(selector.lastEpisodes)
}

const getComic = async () => {
    return await scrapper.getInfoComic()
}

const getEpisode =async () => {
    return await scrapper.getInfoEpisode()
}

const getLibrary =async () => {
    return await scrapper.getInfoLibrary()
}

const getGender =async () => {
    return await scrapper.getInfoGender()
}

const getSearch =async () => {
    return await scrapper.getInfoSearch()
}

const getGenderList =async () => {
    return await scrapper.getInfoListGender()
}



export const module  = {
    setData,
    getRecommend, 
    getLastAdded,
    getLastEpisodes,
    getComic,
    getEpisode,
    getLibrary,
    getGender,
    getSearch,
    getGenderList
}
