export const main = "https://leermanga.net/"

export const URLs = {
    library : main + "biblioteca?page=",
    manga   : main + "manga/",
    episode : main + "capitulo/",
    gender  : main + "genero/",
}

export const Selectors = {
    recommend : "div.item__wrap",
    lastAdded : ".col-xl-4 .page-item-detail",
    lastEpisodes  : ".col-xl-3.col-lg-3",    
    library : ".col-xl-3.col-lg-3" , 
    card : {
        id      : '.c-image-hover a',
        title   : '.post-title.font-title',
        episode : '.chapter a',
        comic   : '.manga-title-recommend',
        image   : '.img-responsive',
    },
    poster : {
        id      : '.episode_thumb a',
        title   : '.manga-title-updated',
        episode : '.manga-episode-title',
        image   : '.img-responsive',
    },
    comic: {
        title   : '.post-title h1',
        year    : 'div:nth-child(2) > div.summary-content',
        type    : '.manga-title-info',
        generes : '.tags_manga',
        synopsis: '.summary__content p',
        episodes: '.wp-manga-chapter a'
    },
    episode: {
        images : ".img-fluid"
    },
    posterLibrary:{
        id    : ".manga-title-updated a",
        title : ".manga-title-updated a",
        type  : ".manga-title-recommend",
        image : ".img-responsive",
        page  : ".page-item.active",
        last_page: ".pagination a"
    },
    listGenders : ".content-ellipsis a",
}