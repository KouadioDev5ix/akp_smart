import { RotatingLines } from "react-loader-spinner";

export default function LoaderComponent() {
  return (
    <>
      <RotatingLines
        visible={true}
        width="24"
        strokeColor="#fff"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </>
  );
}
