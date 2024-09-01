import * as S from "./styles";
import Image from "../../../assets/img/screen-login.png";
import ImageHydra from "../../../assets/img/hydra.png";
import Learnovation from "../../../assets/img/learnovatio.png";
import ImageInventory from "../../../assets/img/stock.png";
import ImageMovies from "../../../assets/img/movies.png";
import ImageRegularShow from "../../../assets/img/"
import { FaReact } from "react-icons/fa6";
import ImageTodo from "../../../assets/img/todo.png";
import { BsGithub } from "react-icons/bs";
import { GrDeploy } from "react-icons/gr";
import { SiStyledcomponents, SiVite, SiTypescript, SiChakraui, SiSass    } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";


import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Container,
  // ModalBody,
  // Button,
  // Lorem,
  // ModalFooter
} from "@chakra-ui/react";

export function Projects() {
  const {
    isOpen: isOpenLogin,
    onOpen: onOpenLogin,
    onClose: onCloseLogin,
  } = useDisclosure();
  const {
    isOpen: isOpenHydra,
    onOpen: onOpenHydra,
    onClose: onCloseHydra,
  } = useDisclosure();
  const {
    isOpen: isOpenTodo,
    onOpen: onOpenTodo,
    onClose: onCloseTodo,
  } = useDisclosure();
  const {
    isOpen: isOpenLearnovation,
    onOpen: onOpenLearnovation,
    onClose: onCloseLearnovation,
  } = useDisclosure();
  const {
    isOpen: isOpenMovies,
    onOpen: onOpenMovies,
    onClose: onCloseMovies,
  } = useDisclosure();
  const {
    isOpen: isOpenInventory,
    onOpen: onOpenInventory,
    onClose: onCloseInventory,
  } = useDisclosure();

  return (
    <S.ContainerGeral id="projects">
      <S.ContainerText>
        <S.Title>Projetos_</S.Title>
        <S.Desc>*Alguns dos meus projetos realizados</S.Desc>
      </S.ContainerText>

      <S.ContainerProjects>
        <S.Caixa>
          <S.NameProject>Marketplace NFT</S.NameProject>
          <S.ImgProject src={Image} onClick={onOpenLogin} />
          <Modal isOpen={isOpenLogin} onClose={onCloseLogin} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader fontWeight="bold" color="#fff">
                Marketplace NFT
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                 <img src={Image} alt="" width="100%" /> 

                <Text textAlign={'center'} marginTop="4" color="gray">
                 Projeto em andamento
                 <Container display={'flex'} justifyContent={'center'} gap={'0.5rem'} mt={'1rem'}>
                  <TbBrandNextjs size={25} color="#a2d2ff" />
                  <FaReact size={25} color="#a2d2ff" />
                  <SiTypescript size={25} color="#a2d2ff"  />
                 </Container>
                </Text>
              </ModalBody>
            </ModalContent>
          </Modal>
          <S.ContainerLinks>
            <S.LinkProject backgroundColor="black">
              <BsGithub size={26} />
              code
            </S.LinkProject>
            <S.LinkProject backgroundColor="#657bca">
              <GrDeploy size={26} />
              deploy
            </S.LinkProject>
          </S.ContainerLinks>
        </S.Caixa>

        <S.Caixa>
          <S.NameProject>ToDo List</S.NameProject>
          <S.ImgProject src={ImageTodo} onClick={onOpenTodo} />
          <Modal isOpen={isOpenTodo} onClose={onCloseTodo} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader fontWeight="bold" color="#fff">
                ToDo List
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <img src="../../../assets/img/todo.png" alt="" width="100%" />
                <Text marginTop="4" color="gray">
                  O ToDo List é um projeto que tem como finalidade adicionar
                  tarefas a serem feitas. Nele, utilizei o React + Typescript
                  para construir a aplicação. E na estilização, usei o Styled
                  Components.
                </Text>
                <S.ContainerIconsModal>
                  <SiVite size={25} color="#a2d2ff" />
                  <FaReact size={25} color="#a2d2ff" />
                  <SiTypescript size={25} color="#a2d2ff"  />
                  <SiStyledcomponents size={30} color="#a2d2ff" />
                </S.ContainerIconsModal>
              </ModalBody>
            </ModalContent>
          </Modal>

          <S.ContainerLinks>
            <a target="blank" href="https://github.com/jeffszo/todo">
              <S.LinkProject backgroundColor="black">
                <BsGithub size={26} />
                code
              </S.LinkProject>
            </a>
            <a target="blank" href="https://todo-murex-seven-99.vercel.app/">
              <S.LinkProject backgroundColor="#657bca">
                <GrDeploy size={26} />
                deploy
              </S.LinkProject>
            </a>
          </S.ContainerLinks>
        </S.Caixa>

        <S.Caixa>
          <S.NameProject>Hydra</S.NameProject>
          <S.ImgProject src={ImageHydra} onClick={onOpenHydra} />
          <Modal isOpen={isOpenHydra} onClose={onCloseHydra} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader fontWeight="bold" color="#fff">
                Hydra
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <img
                  src="../../../assets/img/hydra.png"
                  alt=""
                  width="100%"
                />
                <Text marginTop="4" color="gray">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugiat odio iusto nisi incidunt? Saepe dignissimos hic quis
                  amet recusandae nobis quibusdam ipsam dolores non blanditiis,
                  magnam sunt, quaerat cum fuga.{" "}
                </Text>
              </ModalBody>
            </ModalContent>
          </Modal>
          <S.ContainerLinks>
            <a target="blank" href="https://github.com/jeffszo/Hydra">
              <S.LinkProject backgroundColor="black">
                <BsGithub size={26} />
                code
              </S.LinkProject>
            </a>
            <a target="blank" href="https://Hydra-wheat.vercel.app/">
              <S.LinkProject backgroundColor="#657bca">
                <GrDeploy size={26} />
                deploy
              </S.LinkProject>
            </a>
          </S.ContainerLinks>
        </S.Caixa>
      </S.ContainerProjects>

      <S.ContainerProjects>
        <S.Caixa>
          <S.NameProject>Plataforma de cursos</S.NameProject>
          <S.ImgProject src={Learnovation} onClick={onOpenLearnovation} />
          <Modal
            isOpen={isOpenLearnovation}
            onClose={onCloseLearnovation}
            isCentered
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader fontWeight="bold" color="#fff">
                Learnovation
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <img src={Learnovation} alt="" width="100%" />
                <Text marginTop="4" color="gray">
                 Learnovation é uma plataforma destinada a ofertar cursos e workshops para entusiastas da 
                 tecnologia. Para a criação, utilizei React, Vite e Styled-Components. {" "}
                 <S.ContainerIconsModal>
                  <SiVite size={25} color="#a2d2ff" />
                  <FaReact size={25} color="#a2d2ff" />
                  <SiStyledcomponents size={30} color="#a2d2ff" />
                </S.ContainerIconsModal>
                </Text>
              </ModalBody>
            </ModalContent>
          </Modal>
          <S.ContainerLinks>
            <a target="blank" href="https://github.com/jeffszo/learnovation">
              <S.LinkProject backgroundColor="black">
                <BsGithub size={26} />
                code
              </S.LinkProject>
            </a>
            <a target="blank" href="https://learnovation.vercel.app/">
              <S.LinkProject backgroundColor="#657bca">
                <GrDeploy size={26} />
                deploy
              </S.LinkProject>
            </a>
          </S.ContainerLinks>
        </S.Caixa>

        <S.Caixa>
          <S.NameProject>MoviesList</S.NameProject>
          <S.ImgProject src={ImageMovies} onClick={onOpenMovies} />
          <Modal isOpen={isOpenMovies} onClose={onCloseMovies} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader fontWeight="bold" color="#fff">
                MoviesList
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <img src={ImageMovies} alt="" width="100%" />
                <Text marginTop="4" color="gray">
                  Listagem dos principais filmes que foram lançados em 2024. Utilizei a API do TMDB para realizar a consulta e foi desenvolvida com React + Typescript e Sass.{" "}
                </Text>
                <S.ContainerIconsModal>
                <SiVite size={25} color="#a2d2ff" />
                  <FaReact size={25} color="#a2d2ff" />
                  <SiTypescript size={25} color="#a2d2ff"  />
                  <SiSass  size={25} color="#a2d2ff" />
                </S.ContainerIconsModal>
              </ModalBody>
            </ModalContent>
          </Modal>
          <S.ContainerLinks>
            <a target="blank" href="https://github.com/jeffszo/movies-app">
              <S.LinkProject backgroundColor="black">
                <BsGithub size={26} />
                code
              </S.LinkProject>
            </a>
            <a target="blank" href="https://movies-apitmdb.vercel.app/">
              <S.LinkProject backgroundColor="#657bca">
                <GrDeploy size={26} />
                deploy
              </S.LinkProject>
            </a>
          </S.ContainerLinks>
        </S.Caixa>

        <S.Caixa>
          <S.NameProject>Stock</S.NameProject>
          <S.ImgProject src={ImageInventory} onClick={onOpenInventory} />
          <S.ContainerLinks>
            <Modal
              isOpen={isOpenInventory}
              onClose={onCloseInventory}
              isCentered
            >
              <ModalOverlay />
              <ModalContent>
                <ModalHeader fontWeight="bold" color="#fff">
                 Stock
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <img src={ImageInventory} alt="" width="100%" />
                  <Text marginTop="4" color="gray">
                    Stock é um projeto desenvolvido para adicionar produtos e realizar a consulta atráves da listagem. 
                    Utilizei React + Typescript e Chakra UI para criar o contexto, tipagem e a interface visual.
                    {" "}
                  </Text>
                  <S.ContainerIconsModal>
                  <SiVite size={25} color="#a2d2ff" />
                  <FaReact size={25} color="#a2d2ff" />
                  <SiTypescript size={25} color="#a2d2ff"  />
                  <SiChakraui  size={25} color="#a2d2ff" />
                </S.ContainerIconsModal>
                </ModalBody>
              </ModalContent>
            </Modal>
            <a target="blank" href="https://github.com/jeffszo/regularshow">
              <S.LinkProject backgroundColor="black">
                <BsGithub size={26} />
                code
              </S.LinkProject>
            </a>
            <a target="blank" href="https://regularshow.vercel.app/">
              <S.LinkProject backgroundColor="#657bca">
                <GrDeploy size={26} />
                deploy
              </S.LinkProject>
            </a>
          </S.ContainerLinks>
        </S.Caixa>
      </S.ContainerProjects>
    </S.ContainerGeral>
  );
}
