import { Image } from "../../api/images/types";

export type ListItemType = {
    image: Image;
    onPress?: () => void;
  };