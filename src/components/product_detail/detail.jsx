import { useParams } from "react-router-dom";
import { TopNavigationBar } from "../header/topNavigationBar/topNavigationBar";

export const Detail = () => {
  const { id } = useParams();

  return (
    <>
      <TopNavigationBar />
    </>
  );
};
