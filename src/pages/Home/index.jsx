import {
    Avatar,
    Box,
    Button,
    Container,
    Stack,
    styled,
    Typography,
} from "@mui/material";
import { useState } from "react";
import Slider from "react-slick/lib/slider";
import { v4 as uuidv4 } from "uuid";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import MenuIcon from "@mui/icons-material/Menu";
const HomePage = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const splitStr = (str, mdex, animation = false) => {
        console.log(str);
        return str.split("").map((charactor, index) => {
            let className = index % 2 === 0 ? "even" : "odd";
            const check = Math.random() > 0.5;
            const ok = animation && mdex === slideIndex && check;

            return (
                <Box
                    className={ok ? "fadeCharactor-" + className : ""}
                    sx={{ display: "inline-block", whiteSpace: "pre" }}
                    key={uuidv4()}
                    variant="div"
                >
                    {charactor}
                </Box>
            );
        });
    };
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        // autoplay: true,
        // autoplaySpeed: 4000,
        beforeChange: (current, next) => setSlideIndex(next),
    };

    const generateItems = ({ bg, img, sub, title1, title2 }, index) => {
        const show = index === slideIndex;
        return (
            <BoxCustom
                className="boxCustom"
                key={uuidv4()}
                sx={{
                    backgroundImage: `url("${bg}")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        left: "16.67%",
                        top: "21.86%",
                        display: "flex",
                        gap: 10,
                        alignItems: "center",
                    }}
                >
                    <Box
                        // ref={boxItem}
                        className={index === slideIndex ? "fadeUp" : "boxItem"}
                        sx={{
                            zIndex: 6,
                            color: "rgb(255, 255, 255)",
                            width: "302px",
                            height: "460px",
                            minHeight: "0px",
                            minWidth: "0px",
                            maxHeight: "none",
                            maxWidth: "none",
                            overflow: "hidden",
                            borderTopRightRadius: "443px",
                            borderTopLeftRadius: "443px",
                            backdropFilter: "none",
                            filter: "none",
                            transformOrigin: "bottom",
                            opacity: 1,
                            transform: "translate(0px, 0px)",
                            visibility: "visible",
                        }}
                    >
                        <Avatar
                            src={img}
                            sx={{
                                width: "100%",
                                height: "100%",
                            }}
                            alt=""
                            variant="square"
                        />
                    </Box>

                    <Box sx={{ zIndex: 10 }}>
                        <Typography
                            className={show ? "fadeBox" : "fadeUpOut"}
                            sx={{
                                zIndex: 8,
                                fontFamily: "Quentin",
                                height: "auto",
                                width: "auto",
                                color: "rgb(239, 216, 101)",
                                textDecoration: "none",
                                whiteSpace: "normal",
                                minHeight: "0px",
                                minWidth: "0px",
                                maxHeight: "none",
                                maxWidth: "none",
                                verticalAlign: "top",
                                textAlign: "left",
                                lineHeight: "55px",
                                letterSpacing: "0px",
                                fontWeight: 400,
                                fontSize: "50px",
                                paddingBottom: "22px",
                                backdropFilter: "none",
                                filter: "none",
                                transformOrigin: "50% 50%",
                                opacity: 1,
                                transform: "translate(0px, 0px)",
                                visibility: "visible",
                            }}
                        >
                            {sub}
                        </Typography>
                        <Stack
                            gap={"18px"}
                            direction={"column"}
                            sx={{
                                fontFamily: '"Gilda Display", serif',

                                fontStyle: "normal",
                                color: "white",
                                zIndex: 7,
                                backgroundColor: "rgba(255, 58, 45, 0)",

                                textTransform: "uppercase",
                                height: "auto",
                                width: "auto",

                                textDecoration: "none",
                                whiteSpace: "normal",
                                minHeight: "0px",
                                minWidth: "0px",
                                maxHeight: "none",
                                maxWidth: "none",
                                verticalAlign: "top",
                                textAlign: "left",
                                lineHeight: "70px",
                                letterSpacing: "0px",
                                fontWeight: 400,
                                fontSize: "80px",
                                paddingBottom: "46px",
                                backdropFilter: "none",
                                filter: "none",
                                transformOrigin: "50% 50%",
                                opacity: 1,
                                transform: "translate(0px, 0px)",
                                visibility: "visible",
                                overflow: "hidden",
                            }}
                        >
                            <Box className={show ? "fadeCharactor-title" : ""}>
                                <Box sx={{ display: "inline-block" }}>
                                    {splitStr(title1, index)}
                                </Box>
                            </Box>
                            <Box className={show ? "fadeCharactor-title" : ""}>
                                {splitStr(title2, index, true)}
                            </Box>
                        </Stack>
                        <Box>
                            <Button
                                className={show ? "fadeBtn" : ""}
                                variant="outlined"
                                size="large"
                                endIcon={<OpenInNewIcon color="white" />}
                                sx={{
                                    color: "white",
                                    textTransform: "capitalize",
                                    cursor: "pointer",
                                    borderColor: "white",
                                }}
                            >
                                Đăng Kí Ngay
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </BoxCustom>
        );
    };

    return (
        <>
            <Box
                component={"header"}
                sx={{
                    position: "absolute",
                    top: 30,
                    left: 0,
                    right: 0,
                    zIndex: 10,
                }}
            >
                <Container maxWidth="xl">
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box>
                            <Avatar
                                variant="square"
                                src={
                                    "https://myritual.qodeinteractive.com/wp-content/uploads/2023/07/logo-home-6.png"
                                }
                                alt=""
                                sx={{ width: "100%", hieght: "auto" }}
                            />
                        </Box>
                        <Box>
                            <MenuIcon
                                size="large"
                                color="white"
                                sx={{ fontSize: "32px", color: "white" }}
                            />
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box
                sx={{
                    overflow: "hidden",
                    "& .slick-list": { height: "100vh" },
                    "& .slick-active.slick-current": {
                        // "& .boxItem": {
                        //     transform: "translateY(0)",
                        //     opacity: 1,
                        // },
                    },
                }}
                className="slider-container"
                // ref={boxContainerRef}
            >
                <Slider {...settings}>
                    {images.map((item, index) => generateItems(item, index))}
                </Slider>
            </Box>
        </>
    );
};

export default HomePage;

const images = [
    {
        sub: "Hidration",
        title1: "Clay Body",
        title2: "Lotion",
        bg: "https://assets.teenvogue.com/photos/6184454b087dc3c0e7cb3d94/16:9/w_1920,c_limit/GettyImages-1301487903.jpg",
        img: "https://myritual.qodeinteractive.com/wp-content/uploads/2023/07/home-6-img-1.jpg",
    },
    {
        sub: "Antioxidant",
        title1: "OLIVE BODY",
        title2: "WASH",
        bg: "https://www.rockymountainsoap.com/cdn/shop/articles/Header-1800x800-SummerSkincareRoutine_1600x.jpg?v=1622063486",
        img: "https://myritual.qodeinteractive.com/wp-content/uploads/2023/07/home-6-img-2.jpg",
    },
    {
        sub: "Organic",
        title1: "Lavender Oil",
        title2: "Serum Gold",
        bg: "https://cdn.tatlerasia.com/asiatatler/i/hk/2019/09/26171341-gettyimages-1136547674_cover_2000x1019.jpg",
        img: "https://myritual.qodeinteractive.com/wp-content/uploads/2023/07/home-6-img-4.jpg",
    },
    {
        sub: "Nourishing",
        title1: " COLLAGEN",
        title2: "FACE OIL",
        bg: "https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-start-a-skincare-line-glow-oasis.jpg?v=1666895341",
        img: "https://myritual.qodeinteractive.com/wp-content/uploads/2023/07/home-6-img-5.jpg",
    },
    {
        sub: "Moisturizen",
        title1: "Aloe Vera",
        title2: "SOPA BAR",
        bg: "https://ttol.vietnamnetjsc.vn/images/2020/04/29/13/32/skincare-2.gif",
        img: "https://myritual.qodeinteractive.com/wp-content/uploads/2023/07/home-6-img-6.jpg",
    },
];

const BoxCustom = styled(Box)(() => ({
    backgroundColor: "green",
    height: "100vh",
    position: "relative",
    "&::before": {
        content: '""',
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundImage: "inherit",
        backgroundSize: "inherit",
        backgroundPosition: "inherit",
        filter: "blur(1px)",
        background: `rgba(0, 0, 0, 0.2)`,
        zIndex: 4,
    },
}));
