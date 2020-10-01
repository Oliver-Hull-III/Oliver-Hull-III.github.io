import React from 'react';
import Masonry from "react-responsive-masonry";
import GalleryImage from "./Components/GalleryImage";


const paintYourPup = { 
    title: "Paint Your Pup",
    description: "I will paint the shit out of your dog bro. Like its gonna be sick yo",
};

const images = [
    {src: "/images/songs4bffs/87543809_640185316736275_7737556821083213465_n.jpg", caption: "(2019) Never Gonna Give You Up By Rick Astley", category: "2"},
    {src: "/images/songs4bffs/91208182_1300397516813107_2177830153830886784_n.jpg", caption: "(2018) Some Song", category: "2"},
    {src: "/images/songs4bffs/92817645_848521268990117_7253032131559583278_n.jpg", caption: "(2020) The Kaleigh & Oliver Song", category: "2"},
    {src: "/images/songs4bffs/91625459_2876729105755094_9151182858475523924_n.jpg", caption: "(1900) Poo Poo", category: "2"},
    {src: "/images/songs4bffs/87543809_640185316736275_7737556821083213465_n.jpg", caption: "(2019) Never Gonna Give You Up By Rick Astley", category: "2"},
    {src: "/images/songs4bffs/91208182_1300397516813107_2177830153830886784_n.jpg", caption: "(2018) Macaloo", category: "2"},
    {src: "/images/songs4bffs/92817645_848521268990117_7253032131559583278_n.jpg", caption: "(2020) My Home Dawg Dan Knappe", category: "2"},
    {src: "/images/songs4bffs/91625459_2876729105755094_9151182858475523924_n.jpg", caption: "(1900) An Old Dog", category: "2"},    
    {src: "/images/songs4bffs/87543809_640185316736275_7737556821083213465_n.jpg", caption: "(2019) Never Gonna Give You Up By Rick Astley", category: "2"},
    {src: "/images/songs4bffs/91208182_1300397516813107_2177830153830886784_n.jpg", caption: "(2018) Macaloo", category: "2"},
    {src: "/images/songs4bffs/92817645_848521268990117_7253032131559583278_n.jpg", caption: "(2020) My Home Dawg Dan Knappe", category: "2"},
    {src: "/images/songs4bffs/91625459_2876729105755094_9151182858475523924_n.jpg", caption: "(1900) An Old Dog", category: "2"},
    {src: "/images/paintyourpup/20200123_131218.jpg", caption: "(2019) Blondie And Dexter", category: "1"},
    {src: "/images/paintyourpup/DSC_0401.jpg", caption: "(2018) Macaloo", category: "1"},
    {src: "/images/paintyourpup/media0.jpg", caption: "(2020) My Home Dawg Dan Knappe", category: "1"},
    {src: "/images/paintyourpup/media0(1).jpg", caption: "(1900) An Old Dog", category: "1"},
    {src: "/images/paintyourpup/media0(2).jpg", caption: "(2018) Another Caption", category: "1"},
    {src: "/images/paintyourpup/media0(3).jpg", caption: "(2016) Another Caption", category: "1"},
    {src: "/images/paintyourpup/media0(4).jpg", caption: "(2015) Another Caption", category: "1"},
    {src: "/images/paintyourpup/media0(5).jpg", caption: "(2014) Another Caption", category: "1"},
    {src: "/images/paintyourpup/media0(6).jpg", caption: "(2013) Another Caption", category: "1"},
    {src: "/images/paintyourpup/media0(7).jpg", caption: "(2012) Another Caption", category: "1"},
    {src: "/images/paintyourpup/media0(8).jpg", caption: "(2011) Another Caption", category: "1"},
    {src: "/images/paintyourpup/media0(9).jpg", caption: "(2010) Another Caption", category: "1"},
    {src: "/images/paintyourpup/media0(10).jpg", caption: "(2009) Another Another Caption", category: "1"},
    {src: "/images/paintyourpup/media0(11).jpg", caption: "(2010) Another Cap", category: "1"},
    {src: "/images/paintyourpup/media0(12).jpg", caption: "(2010) Another Captioooon", category: "1"}
]


const songs4bffs = { 
    title: "Songs 4 BFF's",
    description: "Give Me a song to paint fam and I'll do it... No lie",
};



const Gallery = () => (
    <div>
        <div>
            <h1>{songs4bffs.title}</h1>
            <p>{songs4bffs.description}</p>
        </div>
        <Masonry columnsCount={3} gutter="10px">
            {images.filter(img => img.category == "2").map((image, i) => (
                <GalleryImage key={i} src={image.src} caption={image.caption}/>
            ))}
        </Masonry>
    </div>
)

export default Gallery;