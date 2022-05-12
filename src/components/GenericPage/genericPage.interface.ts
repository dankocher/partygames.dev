import { LinkButtonsProps } from "../LinkButtons/linkButtons.interface";
import { TextListProps } from "../TextList/textList.interface";
import { ImageSizes } from "../Image/image.interface";

export interface GenericPageProps {
  logo: ImageSizes;
  title: string;
  description: TextListProps;
  link: LinkButtonsProps;
  background: string;
}
