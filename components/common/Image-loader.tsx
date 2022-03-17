import Image from "next/image";
import dynamic from "next/dynamic";

const ErrorBoundary = dynamic(() => import("./Error-boundary"));

const Img = (props: any) => {
  const imgLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };
  
  return (
    <ErrorBoundary>
      <Image
        loader={imgLoader}
        className={props.className}
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        quality={props.quality}
        layout={props.layout}
        {...props}
      />
    </ErrorBoundary>
  );
};

export default Img;
