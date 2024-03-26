import React from 'react';

type PropsType = {
  header: string;
  children: React.ReactNode;
};

export const Block = React.memo((props: PropsType) => {
  return (
    <div className="block">
      <div className="default_header">
        <h3>{props.header}</h3>
        <div className="big"></div>
      </div>
      <div className="position_wrapper">
        {props.children}
      </div>
    </div>
  );
});
