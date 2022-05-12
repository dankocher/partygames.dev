import { ImageSizes } from "./image.interface";

const Image: React.FC<
  { images: ImageSizes } & React.ImgHTMLAttributes<HTMLImageElement>
> = ({ images, src, srcSet: _, ...props }) => {
  const srcSet = `${images.x1} 1x, ${images.x2} 2x, ${images.x3} 3x`;
  return <img src={images.x1} srcSet={srcSet} {...props} />;
};

export default Image;
