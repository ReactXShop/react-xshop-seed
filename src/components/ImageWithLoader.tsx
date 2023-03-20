import { useEffect, useState } from "react";
import SpinnerSVG from "../assets/spinner.svg";

export const ImageWithLoader = (props: any) => {
  const { originurl } = props;

  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const handleImgLoaded = () => {
    setLoading(false);
    setUrl(originurl);
  };
  useEffect(() => {
    if (originurl !== url) {
      setLoading(true);
    }
  }, [url]);

  return (
    <div className="flex justify-center overflow-hidden rounded-3xl bg-gray-100 lg:flex-1">
      {loading && <img src={SpinnerSVG} className="h-full w-full" />}
      {<img src={originurl} onLoad={handleImgLoaded} className={`${loading ? "hidden" : ""} `} />}
    </div>
  );
};
