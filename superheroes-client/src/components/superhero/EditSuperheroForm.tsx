import React, { useEffect, useState } from "react";
import {
  Column,
  LeftColumn,
  RightColumn,
  Image,
  Title,
  Block,
  NavigateRow,
  CarouselContainer,
} from "./Superhero.styled";
import {
  Form,
  FormButton,
  Input,
  Textarea,
  ModalBlock,
  ImagesUpload,
} from "./SuperheroForm.styled";
import { useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import useUpload from "../../hooks/useUpload";
import { ButtonLink } from "../ui/ButtonLink.styled";
import { superheroAPI } from "../../services/SuperheroService";
import useAppSelector from "../../hooks/useAppSelector";
import { ISuperhero } from "../../models/ISuperhero";
import { SERVER_HOST } from "../../store/variables";
import Spinner from "../ui/Spinner";

const EditSuperhero: React.FC<{ initialData: ISuperhero }> = ({
  initialData,
}) => {
  const navigate = useNavigate();
  const [isDeleted, setIsDeleted] = useState(false);
  const [isUpdated, setIsUpdate] = useState(false);

  const images = useUpload("");
  const nickname = useInput(initialData.nickname);
  const name = useInput(initialData.real_name);
  const description = useInput(initialData.origin_description);
  const power = useInput(initialData.superpowers);
  const phrase = useInput(initialData.catch_phrase);

  const [updateSuperhero] = superheroAPI.useUptadeSuperheroMutation();

  const [deleteSuperhero, { isLoading }] =
    superheroAPI.useDeleteSuperheroMutation();

  const { page } = useAppSelector((state) => state.pageReduser);

  useEffect(() => {
    if (isUpdated) navigate(`/superhero/${initialData._id}`);
    if (isDeleted) navigate(`/superheroes/${page}`);
  }, [isUpdated, isDeleted, navigate, initialData._id, page]);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      nickname.value &&
      name.value &&
      description.value &&
      power.value &&
      phrase.value &&
      (images.files || initialData.Images)
    ) {
      const superheroData = new FormData();
      superheroData.append("_id", initialData._id);
      superheroData.append("nickname", nickname.value);
      superheroData.append("real_name", name.value);
      superheroData.append("origin_description", description.value);
      superheroData.append("superpowers", power.value);
      superheroData.append("catch_phrase", phrase.value);

      Array.from(images.files).forEach((file: any) => {
        superheroData.append("Images", file);
      });

      updateSuperhero(superheroData);
      setIsUpdate(true);
    } else {
      setIsOpenModal(true);
    }
  };

  const deleteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    deleteSuperhero(initialData._id);
    setIsDeleted(true);
  };

  const [preview, setPreview] = useState<string[]>([]);
  const [previewName, setPreviewName] = useState<string[]>([]);

  useEffect(() => {
    if (!images.files[0]) {
      setPreview([]);
      setPreviewName([]);
      return;
    }

    Array.from(images.files).forEach((file: any) => {
      setPreview((prev) => [...prev, URL.createObjectURL(file)]);
      setPreviewName((prev) => [...prev, file.name]);
    });

    return () => {
      setPreview([]);
      setPreviewName([]);
    };
  }, [images.files]);

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <React.Fragment>
      <Form onSubmit={submitForm} encType="multipart/form-data" action="">
        <LeftColumn>
          <CarouselContainer showThumbs={false}>
            {initialData.Images &&
              initialData.Images.map((image) => {
                return <Image key={image} src={`${SERVER_HOST}/${image}`} />;
              })}
            {images.files &&
              previewName.map((name: string, index: number) => {
                return <Image key={name} src={preview[index]} />;
              })}
          </CarouselContainer>

          <ImagesUpload type="file" {...images} multiple />
          <Column>
            <Title light>Nickname</Title>
            <Block>
              <Input placeholder="Nickname..." {...nickname} />
            </Block>

            <Title light>Real name</Title>
            <Block>
              <Input placeholder="Real name..." {...name} />
            </Block>
          </Column>
        </LeftColumn>
        <RightColumn>
          <Column>
            <Title>Description</Title>
            <Block light>
              <Textarea placeholder="Description..." {...description} />
            </Block>

            <Title>Super power</Title>
            <Block light>
              <Textarea placeholder="Super power..." {...power} />
            </Block>

            <Title>Catch phrase</Title>
            <Block light>
              <Textarea placeholder="Catch phrase..." {...phrase} />
            </Block>
          </Column>
          <NavigateRow>
            <ButtonLink to={`/superheroes/${page}`}>Back</ButtonLink>

            <FormButton onClick={deleteHandler}>Delete</FormButton>
            {isLoading && <Spinner />}

            <FormButton type="submit">Save</FormButton>
            <ModalBlock
              isOpen={isOpenModal}
              onRequestClose={closeModal}
              ariaHideApp={false}
            >
              <Title>Write down all the fields of the form!!!</Title>
              <FormButton onClick={closeModal}>close</FormButton>
            </ModalBlock>
          </NavigateRow>
        </RightColumn>
      </Form>
    </React.Fragment>
  );
};

export default EditSuperhero;
