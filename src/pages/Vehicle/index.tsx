import AdCoverImage from "../../components/coverAd";
import BoxDescription from "../../components/descriptionBox";
import GalleryBox from "../../components/GalleryBox";
import ProductInfo from "../../components/ProductInfo";
import { ContainerPage, ContainerMain, ContainerCards} from "./style";
import UserCard from "../../components/UserCard";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Comments from "../../components/comments";
import ModalImgVehicle from "../../components/ModalImgVehicle";

const VehiclePage = () => {
  return (
    <>
      <Navbar />
      <ContainerPage>
        <div className="blue"></div>
          <ContainerMain>
            <AdCoverImage />
            <ProductInfo
              name="Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200"
              price="00.000,00"
              year="2013"
              km="0"
              phone={11984228022}
            />
            <BoxDescription />
            <Comments/>
          </ContainerMain>
          <ContainerCards>
            <GalleryBox />
            <ModalImgVehicle />
            <UserCard />
          </ContainerCards>
      </ContainerPage>
      <Footer/>
    </>
  );
};

export default VehiclePage;
