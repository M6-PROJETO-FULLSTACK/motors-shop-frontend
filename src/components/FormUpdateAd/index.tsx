import { Button } from "../../styles/buttons"
import Text from "../../styles/texts"
import Input from "../Input"
import ModalBox from "../Modal"
import { FormContainer } from "./style"
import { useContext, useState } from "react";
import { ModalContext } from "../../providers/ModalContext"

const FormUpdateAd = () => {
    const [ quantityImage, setQuantityImage ] = useState([0])
    const {handleClose } = useContext(ModalContext)

    return (
        <ModalBox title="Criar Anúncio" title_button="Criar Anúncio">
              <FormContainer>
                <section>
                  <Text className="body2" weight="500">
                    Tipos de anuncio
                  </Text>
                  <div className="input--box input--box_button">
                    <Button className="brand" type="button">Venda</Button>
                    <Button className="outline" type="button">Leilão</Button>
                  </div>
                  <Text className="body2" weight="500">
                    Infomações do veículo
                  </Text>
                  <Input type="text" title="Título" placeholder="Digitar título" />
                  <div className="input--box">
                    <Input
                      type="text"
                      title="Ano"
                      placeholder="2018"
                    />
                    <Input type="text" title="Quilometragem" placeholder="0" />
                  </div>
                  <Input
                    type="text"
                    title="Preço"
                    placeholder="50.000,00"
                  />
                  <Input
                    type="text"
                    title="Descrição"
                    placeholder="Digitar descrição"
                    large
                  />
                  <Text className="body2" weight="500">
                    Tipos do veículo
                  </Text>
                  <div className="input--box input--box_button">
                    <Button className="brand" type="button">Carro</Button>
                    <Button className="outline" type="button">Moto</Button>
                  </div>
                  <Text className="body2" weight="500">
                    Publicado
                  </Text>
                  <div className="input--box input--box_button">
                    <Button className="outline" type="button">Sim</Button>
                    <Button className="brand" type="button">Não</Button>
                  </div>
                  <Input
                    type="text"
                    title="Imagem da capa"
                    placeholder="https://image.com"
                  />
                  <Input
                    type="text"
                    title="1° Imagem da galeria"
                    placeholder="https://image.com"
                  />
                  {
                    quantityImage.map( ( value:number, indice )=> 
                    <Input
                    key={indice}
                    type="text"
                    title={`${indice+2}° Imagem da capa`}
                    placeholder="https://image.com"
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