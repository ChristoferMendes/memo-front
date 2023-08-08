import { Divider, IDividerProps } from 'native-base';

export const VerticalDivider = (props: IDividerProps) => {
  return (
    <Divider
      orientation="vertical"
      h="12"
      bgColor="#2B3945"
      w={(props.width || props.w) ?? '0.5'}
      {...props}
    />
  );
};
