import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";

interface PropType {
  side: string;
  slideIndex: number;
}

const sliderData = [
  {
    id: 1,
    img: "images/mhairb.jpg",
    desc: "CLASSY HAIR, FEEL CONFIDENT",
    link: "/hair",
    btn: "SHOP OYEKES HAIR",
  },
  {
    id: 2,
    img: "images/mfabrics1.jpg",
    desc: "QUALITY FABRICS, COZY TEXTURES",
    link: "/fabrics",
    btn: "SHOP OYEKES FABRICS",
  },
  {
    id: 3,
    img: "images/hairb4.jpg",
    desc: "CLASSY HAIR, FEEL CONFIDENT",
    link: "/hair",
    btn: "SHOP OYEKES HAIR",
  },
  {
    id: 4,
    img: "images/fabricsb.jpg",
    desc: "QUALITY FABRICS, COZY TEXTURES",
    link: "/fabrics",
    btn: "SHOP OYEKES FABRICS",
  },
  {
    id: 5,
    img: "images/mhairb1.webp",
    desc: "CLASSY HAIR, FEEL CONFIDENT",
    link: "/hair",
    btn: "SHOP OYEKES HAIR",
  },
];

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div<PropType>`
  width: 2rem;
  height: 2rem;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.side === "left" && "1rem"};
  right: ${(props) => props.side === "right" && "1rem"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 1;
`;

const Wrapper = styled.div<PropType>`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: all 1.5s ease;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 80%;
`;
const Title = styled.h1`
  font-size: clamp(2.5rem, 3.5rem, 5rem);
  color: #fff;
  font-family: "Zilla Slab Highlight", cursive;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.8rem;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  background-color: hotpink;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: #f3f3f3;
  }
`;

const MobileSlider = () => {
  const navigate = useNavigate();
  const timeoutRef = React.useRef<number | null>(null);

  const [slideIndex, setSlideindex] = useState<number | any>(0);
  const handleClick = (direction: string | any) => {
    if (direction === "left") {
      setSlideindex(slideIndex > 0 ? slideIndex - 1 : sliderData.length - 1);
    } else {
      setSlideindex(slideIndex < sliderData.length - 1 ? slideIndex + 1 : 0);
    }
  };

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setSlideindex((prevIndex: number) =>
          prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
        ),
      3000
    );

    return () => {
      resetTimeout();
    };
  }, [slideIndex]);

  return (
    <Container>
      <Arrow<null | any> side="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper<null | any> slideIndex={slideIndex}>
        {sliderData.map(
          (slide: {
            id: number;
            img: string;
            desc: string;
            link: string;
            btn: string;
          }) => (
            <Slide key={slide.id}>
              <Image src={slide.img} />
              <InfoContainer>
                <Title>{slide.desc}</Title>
                <Button
                  onClick={() => {
                    navigate(`${slide.link}`);
                  }}
                >
                  {slide.btn}
                </Button>
              </InfoContainer>
            </Slide>
          )
        )}
      </Wrapper>
      <Arrow<null | any> side="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default MobileSlider;
