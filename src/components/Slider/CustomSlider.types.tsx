import { Dispatch, SetStateAction } from "react";

export type SliderType = {
  title: string,
  minimumValue: number,
  maximumValue: number,
  value: number,
  onValueChange: (value: number) => void,
  };