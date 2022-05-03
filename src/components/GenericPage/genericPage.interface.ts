import { LinkButtonsProps } from "../LinkButtons/linkButtons.interface";
import { TextListProps } from "../TextList/textList.interface";

export interface GenericPageProps {
  logo: string;
  title: string;
  description: TextListProps;
  link: LinkButtonsProps;
  background: string;
}
