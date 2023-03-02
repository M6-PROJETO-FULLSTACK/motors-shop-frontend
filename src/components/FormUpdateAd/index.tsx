import { Button } from "../../styles/buttons"
import Text from "../../styles/texts"
import Input from "../Input"
import ModalBox from "../Modal"
import { FormContainer } from "./style"
import { useContext, useState } from "react";
import { ModalContext } from "../../providers/ModalContext"
import { useForm } from "react-hook-form"

const FormUpdateAd = () => {
    const [ quantityImage, setQuantityImage ] = useState([0])
    const {handleClose } = useContext(ModalContext)

    const onUpdate = (data: any) => {
      
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
      
      if(data.isActive === "true") {
        data.isActive = true
      } else {
        data.isActive = false
      }
      
      
      let arrFilteredImage: Array<string> = []
      let objFinaly: any = {}

      for(let i in data ){
        if(  i.includes( "url" ) ){
          // @ts-ignore ou // @ts-expect-error
          arrFilteredImage.push( data[i]  )
        }else{
          // @ts-ignore ou // @ts-expect-error
          objFinaly[i] = data[i]
        }
      }

      let listUrlTreated: Array<object> = []

      arrFilteredImage.map((elem: string, index) => listUrlTreated.push({url: elem}))

      objFinaly.gallery = listUrlTreated

      console.log(objFinaly);
    }

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();


    return (
        <ModalBox title="Criar Anúncio" title_button="Criar Anúncio">
              <FormContainer onSubmit={handleSubmit(onUpdate)}>
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
                        <input type="radio" value="true" defaultChecked  {...register("vehicleType")}/>
                        <span className="checkmark">Carro</span>
                    </label>
                  
                    <label className="form-control--radio">
                        <input type="radio" value="false" {...register("vehicleType")}/>
                        <span className="checkmark">Moto</span>
                    </label>
                  </div>
                  <Text className="body2" weight="500">
                    Publicado
                  </Text>
                  <div className="box--checkmark">
                    <label className="form-control--radio">
                        <input type="radio" value="true" {...register("isActive")}/>
                        <span className="checkmark">Sim</span>
                    </label>
                  
                    <label className="form-control--radio">
                        <input type="radio" value="false" defaultChecked {...register("isActive")}/>
                        <span className="checkmark">Não</span>
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
                    <Button type="submit" className="brandDisable">Atualizar Anúncio</Button>
                </div>
              </FormContainer>
        </ModalBox>
    )
}

export default FormUpdateAd