const settings = {
    infinite: true,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,

    responsive: [
        {
            breakpoint : 450,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        },
        {
            breakpoint : 300,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
    ]
}

export default settings;