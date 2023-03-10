import { Button } from "../../styles/buttons";
import Text from "../../styles/texts";
import Input from "../Input";
import ModalBox from "../Modal";
import { FormContainer, ModalBtns } from "./style";
import { useContext, useState } from "react";
import { ModalContext } from "../../providers/ModalContext";
import { useForm } from "react-hook-form";
import api, { config } from "../../services/api";
import { toast } from "react-toastify";
import ModalDelete from "../DeleteModal";
import { VehiclelContext } from "../../providers/VehicleContext";

const FormUpdateAd = () => {
  const [quantityImage, setQuantityImage] = useState([0]);
  const { vehicleIdClicked, openEditAd, handleOpenEditAd, handleCloseEditAd } = useContext(ModalContext);
  const {setOpenDelete, deleteVehicle, setResponse, response } = useContext(VehiclelContext)

  const onUpdate = (data: any) => {
    if (data.advertiseType === "true") {
      data.advertiseType = true;
    } else {
      data.advertiseType = false;
    }

    if (data.vehicleType === "true") {
      data.vehicleType = true;
    } else {
      data.vehicleType = false;
    }

    if (data.isActive === "true") {
      data.isActive = true;
    } else {
      data.isActive = false;
    }

    let arrFilteredImage: Array<string> = [];
    let objFinaly: any = {};

    for (let i in data) {
      if (i.includes("url")) {
        // @ts-ignore ou // @ts-expect-error
        arrFilteredImage.push(data[i]);
      } else {
        // @ts-ignore ou // @ts-expect-error
        objFinaly[i] = data[i];
      }
    }

    let listUrlTreated: any = [];

    arrFilteredImage.map((elem: string, index) =>
      listUrlTreated.push({ url: elem })
    );

    listUrlTreated.map(
      (elem: any, index: any) =>
        elem.url.length <= 0 && listUrlTreated.splice(index)
    );

    objFinaly.gallery = listUrlTreated;
    
    api
      .patch(`vehicles/${vehicleIdClicked}`, objFinaly, config())
      .then((res) => {
        toast.success("Anúncio atualizado!");
        handleCloseEditAd();
        setResponse(!response)
      })
      .catch((err) => {
        toast.error("Erro ao atualizar, verifique os dados!");
      });
    
    reset()
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <>
      <ModalBox recovery title="Atualizar Anúncio" title_button="Atualizar Anúncio" open={openEditAd} handleOpen={handleOpenEditAd} handleClose={handleCloseEditAd} >
        <FormContainer onSubmit={handleSubmit(onUpdate)}>
          <section>
            <Text className="body2" weight="500">
              Tipos de anuncio
            </Text>
            <div className="box--checkmark">
              <label className="form-control--radio">
                <input
                  type="radio"
                  value="true"
                  defaultChecked
                  {...register("advertiseType")}
                />
                <span className="checkmark">Venda</span>
              </label>

              <label className="form-control--radio">
                <input
                  type="radio"
                  value="false"
                  {...register("advertiseType")}
                />
                <span className="checkmark">Leilão</span>
              </label>
            </div>
            <Text className="body2" weight="500">
              Infomações do veículo
            </Text>
            <Input
              type="text"
              title="Título"
              placeholder="Digitar título"
              {...register("title")}
            />
            <div className="input--box">
              <Input
                type="text"
                title="Ano"
                placeholder="2018"
                {...register("year")}
              />
              <Input
                type="text"
                title="Quilometragem"
                placeholder="0"
                {...register("mileage")}
              />
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
                <input
                  type="radio"
                  value="true"
                  defaultChecked
                  {...register("vehicleType")}
                />
                <span className="checkmark">Carro</span>
              </label>

              <label className="form-control--radio">
                <input
                  type="radio"
                  value="false"
                  {...register("vehicleType")}
                />
                <span className="checkmark">Moto</span>
              </label>
            </div>
            <Text className="body2" weight="500">
              Publicado
            </Text>
            <div className="box--checkmark">
              <label className="form-control--radio">
                <input type="radio" value="true" {...register("isActive")} />
                <span className="checkmark">Sim</span>
              </label>

              <label className="form-control--radio">
                <input
                  type="radio"
                  value="false"
                  defaultChecked
                  {...register("isActive")}
                />
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
            {quantityImage.map((value: number, indice) => (
              <Input
                key={indice}
                type="text"
                title={`${indice + 2}° Imagem da galeria`}
                placeholder="https://image.com"
                {...register(`${indice + 2}url`)}
              />
            ))}
            <div className="input--box_button">
              <button
                className="button__add--img"
                type="button"
                onClick={() => {
                  setQuantityImage(() => [...quantityImage, 1]);
                }}
              >
                Adicionar campo para imagem da galeria
              </button>
            </div>
          </section>
          <div className="input--box input--box_button">
            <Button
              className="negative"
              onClick={() => {
                handleCloseEditAd();
                setOpenDelete(true);
              }}
            >
              Excluir anúncio
            </Button>
            <Button type="submit" className="brand">
              Salvar alterações
            </Button>
          </div>
        </FormContainer>
      </ModalBox>

      <ModalDelete title="Excluir anúncio">
        <h3>Tem certeza que deseja remover este anúncio?</h3>
        <p>
          Essa ação não pode ser desfeita. Isso excluirá permanentemente seu
          anúncio de nossos servidores.
        </p>
        <ModalBtns>
          <Button
            className="delete--btn__cancel"
            onClick={() => setOpenDelete(false)}
          >
            Cancelar
          </Button>
          <Button
            className="alert delete--btn__confirm"
            onClick={() => {
              deleteVehicle(vehicleIdClicked);
            }}
          >
            Sim, excluir anúncio
          </Button>
        </ModalBtns>
      </ModalDelete>
    </>
  );
};

export default FormUpdateAd;
