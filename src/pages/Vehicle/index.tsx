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
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";

interface IVehicleProps {
  id: string;
  advertiseType: boolean;
  cover: string;
  title: string;
  year: string;
  mileage: string;
  price: number;
  description: string;
  vehicleType: boolean;
  userName: string;
  userId: string;
  isActive: boolean;
}

const VehiclePage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<IVehicleProps[]>([])
  
  useEffect(() => {
    api.get(`/vehicles/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.log(err))
  }, [])
  

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
