import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Avatar } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonials.css'; // <-- Custom CSS file for dot styling

const testimonials = [
  {
    name: 'Ian',
    content:
      '“Bytagig is the third IT company we have used and are definitely the best. John and team are a great fit for us as a smaller company. The service and value are excellent.”',
    borderColor: '#2979ff',
    image: 'path_to_ian_image.jpg', // Add the image path for Ian
  },
  {
    name: 'Grant',
    content:
      '“John is one of the nicest people I have met. He took the time to sit down with me to address what was needed for my small business. The worry of internet security.”',
    borderColor: '#ff9800',
    image: 'path_to_grant_image.jpg', // Add the image path for Grant
  },
  {
    name: 'Sadie',
    content:
      '“I’ve never experienced such a dedicated & responsive IT company. John and his team are so quick to answer my questions and get my problems resolved.”',
    borderColor: '#ab47bc',
    image: 'path_to_sadie_image.jpg', // Add the image path for Sadie
  },
  {
    name: 'Sabrina',
    content:
      '“John with Bytagig is very knowledgeable and responsive. All of our IT needs have been met with professionalism and quality work. Thank you John.”',
    borderColor: '#66bb6a',
    image: 'path_to_sabrina_image.jpg', // Add the image path for Sabrina
  },
  {
    name: 'Melissa',
    content:
      '“Bytagig’s attention to detail and proactive approach make them a priority partner in our growth.”',
    borderColor: '#00bcd4',
    image: 'path_to_melissa_image.jpg', // Add the image path for Melissa
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: false,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  draggable: true,
  swipeToSlide: true,
  touchMove: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #0d0d2b, #1a1a40)',
        py: 8,
        px: 4,
        textAlign: 'center',
        color: '#fff',
      }}
    >
      <Box mb={6}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Recommendations From Past Customers
        </Typography>
        <Typography
          variant="body2"
          sx={{ maxWidth: 800, color: '#ccc', mx: 'auto' }}
        >
          Customer recommendations can be a powerful tool for businesses to
          establish trust and credibility with potential customers. Positive
          reviews and testimonials from satisfied customers can help to attract
          new business and encourage customer loyalty.
        </Typography>
      </Box>

      <Box sx={{ cursor: 'grab' }}>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              className="testimonial-card"
              sx={{
                position: 'relative',
                maxWidth: '85%',
                width: '260px',
                minHeight: '300px',
                borderRadius: '16px',
                px: 3,
                py: 3,
                pb: 6,
                boxShadow: '0 0 15px rgba(102, 102, 102, 0.5)',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                overflow: 'hidden',
                backgroundColor: '#111',
                margin: '50px',
                borderTop: `1px solid ${testimonial.borderColor}`,
                borderLeft: `0.1px solid ${testimonial.borderColor}`,
                borderRight: `0.1px solid ${testimonial.borderColor}`,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '50px',
                  height: '50px',
                  backgroundColor: testimonial.borderColor,
                  clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                  borderTopRightRadius: '16px',
                },
              }}
            >
              {/* Photo at the top */}
              <Avatar
                alt={testimonial.name}
                src={testimonial.image} // Using the image URL
                sx={{
                  width: 60,
                  height: 60,
                  margin: '0 auto 20px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                }}
              />
              
              <Typography
                variant="h6"
                fontWeight="bold"
                sx={{ mb: 2, color: '#fff', zIndex: 1, position: 'relative' }}
              >
                {testimonial.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#cfd8dc', zIndex: 1, position: 'relative' }}
              >
                {testimonial.content}
              </Typography>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Testimonials;
