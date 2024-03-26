import React from 'react';

type PropsType = {
  header: string;
  milliliters: string;
  children: React.ReactNode;
};

export const BlockSmall = React.memo((props: PropsType) => {
  return (
    <div className="block block_small">
      <div className="default_header">
        <h4>
          <span>{props.header}</span>
          <span className='mili'>{props.milliliters}</span>
        </h4>
        <div className="big"></div>
      </div>
      <div className="position_wrapper">{props.children}</div>
    </div>
  );
});
