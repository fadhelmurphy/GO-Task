import {DEFAULT_COLOR, DEFAULT_COLORS} from "Consts/data"
import { parseColor } from "Helpers/utils";
import { useMemo } from "react";

export const ColorPicker = ({ color, colors, onChange, variant }) => {

    const parsedColor = useMemo(() => parseColor(color), [color]);
}

ColorPicker.defaultProps = {
    color: DEFAULT_COLOR,
    colors: DEFAULT_COLORS,
    onChange: () => {},
    variant: "predefined"
  };
  