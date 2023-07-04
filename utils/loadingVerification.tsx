import { Spinner } from 'native-base';

export const loadingVerification = (isLoading: boolean, component: string | JSX.Element) => {
  return isLoading ? <Spinner /> : component;
};
