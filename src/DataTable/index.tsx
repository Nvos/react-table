import React, { FC, ReactElement, ComponentProps } from "react";
import Column from "./Column";

interface Props {
  children: Array<ReactElement<ComponentProps<typeof Column>>>;
}

interface Extensions {
  Column: typeof Column;
}

interface Component extends FC<Props>, Extensions {}

const Grid: FC<Props> = ({ children }) => {
  return (
    <div>
      <div>
        {React.Children.map(
          children as any,
          (child: ReactElement<ComponentProps<typeof Column>>) => (
            <div>{child.props.header}</div>
          )
        )}
      </div>
      <div>
        {React.Children.map(
          children as any,
          (child: ReactElement<ComponentProps<typeof Column>>) => (
            <div style={{ display: "inline-block" }}>{child.props.field}</div>
          )
        )}
      </div>
    </div>
  );
};

(Grid as Component).Column = Column;

export default Grid as Component;
