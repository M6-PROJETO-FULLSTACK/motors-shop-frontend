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
import { useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { IUserResponse } from "../../providers/AuthContext";
import { VehiclelContext } from "../../providers/VehicleContext";

interface IImageProps{
  id: string
  url:string
  vehicle_id:string
}
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
  galleryImages:IImageProps;
}

const VehiclePage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({} as IVehicleProps)
  const [userId, setUserId] = useState('')
  const [user, setUser] = useState({} as IUserResponse)
  const [gallery, setGallery] = useState<IImageProps[]>([])

  const { setResponse, response } = useContext(VehiclelContext)
  
  useEffect(() => {
  const getVehicle = async () => {
      
    try {
      const { data } = await api.get(`/vehicles/${id}`);
      setProduct(data.vehicle)
      setUserId(data.userId)
      setGallery(data.vehicle.galleryImages)
      setResponse(!response)
      } catch (error) {
      console.error(error);
      }
    };
    getVehicle();

  const getUser = async () => {
      
    try {
      const { data } = await api.get(`/users/${userId}`);
      setUser(data[0])
      } catch (error) {
      console.error(error);
      }
    };
    getUser();
    }, [])

  const phone = user.phone
  let newPhone = parseInt(phone)

  return (
    <>
      <Navbar />
      <ContainerPage>
        <div className="blue"></div>
          <ContainerMain>
            <AdCoverImage
            name={product.title}
            img={product.cover}
            />
              <ProductInfo
                name={product.title}
                price={`${product.price}`}
                year={product.year}
                km={product.mileage}
                phone={newPhone}
              />
            <BoxDescription description={product.description} />
            <Comments/>
          </ContainerMain>
          <ContainerCards>
            <GalleryBox 
            gallery={gallery}
            name={product.title}
            />
            <ModalImgVehicle />
            <UserCard userOwnerId={userId}/>
          </ContainerCards>
      </ContainerPage>
      <Footer/>
    </>
  );
};

export default VehiclePage;
