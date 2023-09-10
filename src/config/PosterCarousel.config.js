const settings = {
    infinite: true,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive : [
        {
            breakpoint : 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        },
        {
            breakpoint : 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint : 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}

export default settings;