import React, { FC } from 'react';
import { chunk } from 'lodash'

const websafeColors = (): string[] => {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
  const radix = 16;
  const colors = []

  for (let red = 0; red < 16; red += 3) {
    for (let green = 0; green < 16; green += 3) {
      for (let blue = 0; blue < 16; blue += 3) {
        colors.push(`#${red.toString(radix)}${green.toString(radix)}${blue.toString(radix)}`);
      }
    }
  }

  return colors
}

interface Props {
  onClick: (color: string) => void;
}

export const ColorPicker: FC<Props> = ({ onClick }) => {
  const colorsPerRow = 6;

  return (
    <div>
      {chunk(websafeColors(), colorsPerRow).map(chunkOfColors => {
        return (
          // chunkOfColors[0] will be unique for each row.
          <div key={chunkOfColors[0]} style={{ display: 'flex' }}>
            {chunkOfColors.map(color => {
              return (
                <div
                  key={color}
                  onClick={() => onClick(color)}
                  style={{ height: '10px', width: '10px', background: color }}
                />
              )
            })}
          </div>
        )
      })}
    </div>
  );
};