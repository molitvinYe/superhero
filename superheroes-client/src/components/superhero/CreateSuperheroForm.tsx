import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAppSelector from "../../hooks/useAppSelector";
import useInput from "../../hooks/useInput";
import useUpload from "../../hooks/useUpload";
import { superheroAPI } from "../../services/SuperheroService";

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
  ImagesContainer,
  ImagesUpload,
  ModalBlock,
} from "./SuperheroForm.styled";

import { ButtonLink } from "../ui/ButtonLink.styled";

const CreateSuperheroForm = () => {
  const images = useUpload("");
  const nickname = useInput("");
  const name = useInput("");
  const description = useInput("");
  const power = useInput("");
  const phrase = useInput("");
  const navigate = useNavigate();

  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [previewImagesNames, setPreviewImagesNames] = useState<string[]>([]);

  useEffect(() => {
    if (!images.files) return;
    setPreviewFiles(images.files);
  }, [images.files]);

  const setPreviewFiles = (images: FileList) => {
    Array.from(images).forEach((file: any) => {
      setPreviewImages((prev) => [...prev, URL.createObjectURL(file)]);
      setPreviewImagesNames((prev) => [...prev, file.name]);
    });
  };

  const { page, lastPage } = useAppSelector((state) => state.pageReduser);

  const [postSuperhero, { isSuccess: isPostSuccess }] =
    superheroAPI.useCreateSuperheroMutation();
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    if (isPostSuccess) navigate(`/superheroes/${lastPage}`);
  }, [isPostSuccess, navigate, lastPage]);

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      nickname.value &&
      name.value &&
      description.value &&
      power.value &&
      phrase.value &&
      images.files
    ) {
      const superheroData = new FormData();
      superheroData.append("nickname", nickname.value);
      superheroData.append("real_name", name.value);
      superheroData.append("origin_description", description.value);
      superheroData.append("superpowers", power.value);
      superheroData.append("catch_phrase", phrase.value);
      Array.from(images.files).forEach((file: any) => {
        superheroData.append("Images", file);
      });

      await postSuperhero(superheroData);
    } else {
      setIsOpenModal(true);
    }
  };

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <Form onSubmit={submitForm} encType="multipart/form-data" action="">
      <LeftColumn>
        {images.files ? (
          <CarouselContainer showThumbs={false}>
            {previewImagesNames.map((name: string, index: number) => {
              return <Image key={name} src={previewImages[index]} />;
            })}
          </CarouselContainer>
        ) : (
          <ImagesContainer />
        )}
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
          <ModalBlock
            isOpen={isOpenModal}
            onRequestClose={closeModal}
            ariaHideApp={false}
          >
            <Title>Write down all the fields of the form!!!</Title>
            <FormButton onClick={closeModal}>close</FormButton>
          </ModalBlock>
          <FormButton type="submit">Save</FormButton>
        </NavigateRow>
      </RightColumn>
    </Form>
  );
};

export default CreateSuperheroForm;
