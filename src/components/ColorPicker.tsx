import React, { FC } from 'react';

const roygbiv = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

interface Props {
  onClick: (color: string) => void;
}

export const ColorPicker: FC<Props> = ({ onClick }) => {
  return (
    <>
      {roygbiv.map(color => {
        return (
          <div
            key={color}
            onClick={() => onClick(color)}
            style={{ height: '10px', width: '10px', background: color }}
          />
        )
      })}
    </>
  );
};