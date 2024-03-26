import React from 'react';

type PropsType = {
  name: string;
  cost: string;
  description: string;
};

export const Position = React.memo((props: PropsType) => {
  return (
    <div className="position">
      <div>
        <span className="">{props.name}</span>
        <span className="">{props.cost}</span>
      </div>
      <p>{props.description}</p>
    </div>
  );
});
