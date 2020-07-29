import React from 'react';
import { VideoCardGroupContainer, Title, ExtraLink, Wrapper } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';
function Carousel({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Wrapper>
            <Title style={{ borderColor: categoryColor || 'red' }}>
              {categoryTitle}
            </Title>
            {categoryExtraLink && 
              <ExtraLink>
                {categoryExtraLink.text}  
              </ExtraLink>
            }
          </Wrapper>
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          );
        })}
      </Slider>
    </VideoCardGroupContainer>
  );
}

export default Carousel;
