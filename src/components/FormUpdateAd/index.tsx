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
                  <div className="box--checkmark">
                    <label className="form-control--radio">
                        <input type="radio" name="venda_ou_leilao" checked/>
                        <span className="checkmark">Venda</span>
                    </label>
                  
                    <label className="form-control--radio">
                        <input type="radio" name="venda_ou_leilao" />
                        <span className="checkmark">Leilão</span>
                    </label>
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
                  <div className="box--checkmark">
                    <label className="form-control--radio">
                        <input type="radio" name="carro_ou_moto" checked/>
                        <span className="checkmark">Carro</span>
                    </label>
                  
                    <label className="form-control--radio">
                        <input type="radio" name="carro_ou_moto" />
                        <span className="checkmark">Moto</span>
                    </label>
                  </div>
                  <Text className="body2" weight="500">
                    Publicado
                  </Text>
                  <div className="box--checkmark">
                    <label className="form-control--radio">
                        <input type="radio" name="publicado" />
                        <span className="checkmark">Sim</span>
                    </label>
                  
                    <label className="form-control--radio">
                        <input type="radio" name="publicado" checked/>
                        <span className="checkmark">Não</span>
                    </label>
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