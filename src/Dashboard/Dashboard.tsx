import React, { useEffect, useState } from "react";
import "../assets/fonts.css";
import { Props } from "./Dashboard.types";
import {
  Container,
  StateContainer,
  StateText,
  ImageContainer,
  CenteredContent,
  HomeButton,
} from "./Dashboard.styles";
import { FiX } from "react-icons/fi";

import WorldChampionsList from "./components/WorldChampionsList";
import CustomModal from "./components/Modal";
import Modal from "react-modal";
import { TailSpin } from "react-loader-spinner";
import formimage from "../assets/images/f1.png";
import slideimage from "../assets/images/slide.png";
// import Button from '../UI/Button'
const Dashboard = ({
  onGetWorldChampionsByRange,
  isLoading,
  worldChampions,
  onOpenModal,
  closeModal,
  isModalOpen,
}: Props) => {
  const [showModal, setShowModal] = useState(false);

  const handleViewChampionsClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    closeModal(); // Assuming you have a closeModal function to handle closing the modal
  };

  useEffect(() => {
    onGetWorldChampionsByRange();
  }, []);

  const renderContent = () => {
    return worldChampions.length ? (
      <WorldChampionsList
        worldChampions={worldChampions}
        onOpenModal={onOpenModal}
      />
    ) : (
      <StateContainer data-testid="no-data-container">
        <StateText>
          {isLoading ? (
            <TailSpin
              visible={true}
              height="80"
              width="80"
              color="#000000"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
            />
          ) : (
            "No data..."
          )}
        </StateText>
      </StateContainer>
    );
  };

  return (
    <>
      <Container data-testid="dashboard-container">
        <ImageContainer>
          {/* Add your image here */}
          <img src={formimage} alt="f1 logo" />
        </ImageContainer>
        <CenteredContent>
          <h2
            style={{
              fontSize: "5.9375rem",
              color: "#ffffff",
              boxShadow: " 0px 0px 4px 0px #00000026",
              fontFamily: "Nasalization, sans-serif",
            }}
          >
            F1 World <br />
            Champions
          </h2>
          <HomeButton onClick={handleViewChampionsClick}>
            View Champions
          </HomeButton>
        </CenteredContent>
        <div style={{ width: "100%" }}>
          <img style={{ width: "100%" }} src={slideimage} alt="f1 logos" />
        </div>

        {isModalOpen && <CustomModal closeModal={closeModal} />}
      </Container>
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel="View Champions Modal"
        style={{
          content: {
            top: "20px",
            bottom: "20px",
            left: "50%",
            right: "auto",
            marginRight: "-35%",
            transform: "translate(-50%, 0)",
            width: "70%",
            maxHeight: "calc(100vh - 40px)", // Adjust for the minimum distance from top and bottom
            overflowY: "auto", // Enable vertical scrolling
          },
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "14px",
          }}
        >
          <div
            style={{
              fontSize: "50px",
              fontWeight: "bold",
              color: "#000",
              fontFamily: "Nasalization, sans-serif",
            }}
          >
            Championship Winners
          </div>
          <FiX
            style={{ fontSize: "37px", color: "red", cursor: "pointer" }}
            onClick={handleCloseModal}
          />
        </div>
        {/* Two Lines */}
        <div
          style={{ borderBottom: "1px solid #ED2D26", marginBottom: "14px" }}
        ></div>
        <div
          style={{
            borderBottom: "1px solid #ED2D26",
            width: "70%",
            marginBottom: "28px",
          }}
        ></div>
        {/* Render the content you want to display in the modal */}
        {renderContent()}
      </Modal>
    </>
  );
};

export default Dashboard;
