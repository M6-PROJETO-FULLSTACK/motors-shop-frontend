import { Button } from "../../styles/buttons"
import Text from "../../styles/texts"
import Input from "../Input"
import ModalBox from "../Modal"
import { FormContainer } from "./style"
import { useContext, useState } from "react";
import { ModalContext } from "../../providers/ModalContext"
import { useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"

const FormCreateAd = () => {
    const [ quantityImage, setQuantityImage ] = useState([0])
    
    const {handleClose } = useContext(ModalContext)

    // const shemaRegisterVehicle = yup.object().shape({
    //   advertiseType: yup.string().required("Tipo de anuncio é obrigatório"),
    //   title: yup.string().required("Título é obrigatório"),
    //   year: yup.string().required("Ano do veículo é obrigatório"),
    //   mileage: yup.string().required("Quilometragem é obrigatório"),
    //   price: yup.string().required("Preço é obrigatório"),
    //   description: yup.string().required("Descrição é obrigatório"),
    //   vehicleType: yup.string().required("Tipo do veículo é obrigatório"),
    //   cover: yup.string().required("Imagem da capa é obrigatória"),
    //   gallery: yup.array().required("Gallery da capa é obrigatória")
    // });

    const onCreate = (data: any) => {
      
      if(data.advertiseType === "true") {
        data.advertiseType = true
      } else {
        data.advertiseType = false
      }

      if(data.vehicleType === "true") {
        data.vehicleType = true
      } else {
        data.vehicleType = false
      }

      data.gallery = []


      
      console.log(data);
    }

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    
    
    return (
        <ModalBox title="Criar Anúncio" title_button="Criar Anúncio">
              <FormContainer onSubmit={handleSubmit(onCreate)}>
                <section>
                  <Text className="body2" weight="500">
                    Tipos de anuncio
                  </Text>
                  <div className="box--checkmark">
                    <label className="form-control--radio">
                        <input type="radio" value="true" defaultChecked {...register("advertiseType")}/>
                        <span className="checkmark">Venda</span>
                    </label>
                  
                    <label className="form-control--radio">
                        <input type="radio" value="false" {...register("advertiseType")}/>
                        <span className="checkmark">Leilão</span>
                    </label>
                  </div>
                  <Text className="body2" weight="500">
                    Infomações do veículo
                  </Text>
                  <Input type="text" title="Título" placeholder="Digitar título" {...register("title")}/>
                  <div className="input--box">
                    <Input
                      type="text"
                      title="Ano"
                      placeholder="2018"
                      {...register("year")}
                    />
                    <Input type="text" title="Quilometragem" placeholder="0" {...register("mileage")}/>
                  </div>
                  <Input
                    type="text"
                    title="Preço"
                    placeholder="50.000,00"
                    {...register("price")}
                  />
                  <Input
                    type="text"
                    title="Descrição"
                    placeholder="Digitar descrição"
                    large
                    {...register("description")}
                  />
                  <Text className="body2" weight="500">
                    Tipos do veículo
                  </Text>
                  <div className="box--checkmark">
                    <label className="form-control--radio">
                        <input type="radio" value="true" {...register("vehicleType")} defaultChecked/>
                        <span className="checkmark">Carro</span>
                    </label>
                  
                    <label className="form-control--radio">
                        <input type="radio" value="false" {...register("vehicleType")}/>
                        <span className="checkmark">Moto</span>
                    </label>
                  </div>
                  <Input
                    type="text"
                    title="Imagem da capa"
                    placeholder="https://image.com"
                    {...register("cover")}
                  />
                  <Input
                    type="text"
                    title="1° Imagem da galeria"
                    placeholder="https://image.com"
                    {...register("url")}
                  />
                  {
                    quantityImage.map( ( value:number, indice )=> 
                    <Input
                    key={indice}
                    type="text"
                    title={`${indice+2}° Imagem da galeria`}
                    placeholder="https://image.com"
                    {...register(`${indice+2}url`)}
                  />
                      )
                  }
                  <div className="input--box_button">
                    <button className='button__add--img' type='button' onClick={()=>{  setQuantityImage(()=>[...quantityImage, 1]) }}>Adicionar campo para imagem da galeria</button>
                  </div>
                </section>
                <div className="input--box input--box_button">
                    <Button className="negative" onClick={handleClose}>Cancelar</Button>
                    <Button type="submit" className="brandDisable">Criar Anúncio</Button>
                </div>
              </FormContainer>
        </ModalBox>
    )
}

export default FormCreateAd