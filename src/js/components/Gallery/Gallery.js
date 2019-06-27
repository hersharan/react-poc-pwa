import React from 'react';
import PropTypes from 'prop-types';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import '../../../sass/components/gallery.scss';
import {TEMPLATE_DEFAULT} from '../../helpers/appConstants';
import {
  Card,
  CardTitle,
  CardLink,
  CardSubtitle
} from 'reactstrap';

const Gallery = (props) => {
  const handleOnDragStart = e => e.preventDefault();
  const items = props.items;
  const galleryItems = items.map((itm, index) => {
    return (
      <Card key={index} className='listing-block'>
        {/* <CardLink href={`${link}${item.nid ? item.nid : '#' || item.tid ? item.tid : '#'}`}>
          <img key={index} src={itm ? itm : TEMPLATE_DEFAULT} alt={props.alt} onDragStart={handleOnDragStart} className="item" />
        </CardLink>
        <CardTitle tag='h2'>
          <CardLink href={`${link}${item.nid ? item.nid : '#' || item.tid ? item.tid : '#'}`} dangerouslySetInnerHTML={this.createMarkup(item.displayTitle && item.displayTitle)} />
        </CardTitle>
        <CardSubtitle tag='h3' className="brand-title">{item.brandName && item.brandName}</CardSubtitle> */}
      </Card>
    )
  })

  const responsive = props.responsive ? {0:{items:1}, 575:{items:2}, 767:{items:3}, 992:{items:4}} : {0: {items:1}};

  return (
    <AliceCarousel
      items={galleryItems}
      buttonsDisabled={true}
      responsive={responsive}
      autoPlay={false}
      autoPlayInterval={3000}
      infinite={false}
    />
  )
}

Gallery.propTypes = {
  items: PropTypes.array,
}

export default Gallery;