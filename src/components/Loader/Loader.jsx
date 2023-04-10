import { BallTriangle } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectContactsStatus } from 'redux/selectors';

export function Loader() {
  const isloading = useSelector(selectContactsStatus) === 'pending';
  return (
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="black"
      ariaLabel="ball-triangle-loading"
      wrapperClass="loader-wrapper"
      visible={isloading}
    />
  );
}
