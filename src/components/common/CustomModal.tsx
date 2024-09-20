import React from "react";
import { Modal, Box, Typography } from "@mui/material";

interface CustomModalProps {
  open: boolean;
  handleClose: () => void;
  modalContent: string;
  modalTitle: string;
}

const CustomModal: React.FC<CustomModalProps> = ({ open, handleClose, modalContent, modalTitle }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 580,
          height: 800,
          overflow: "hidden",
          overflowY: "scroll",
          bgcolor: "background.paper",
          boxShadow: 2,
          borderRadius: 2,
          p: 5,
          "&::-webkit-scrollbar": {
            width: "0", // 스크롤 바의 너비를 0으로 설정
          },
        }}
      >
        <Typography sx={{ fontSize: 24, fontWeight: 700 }} variant="h6" component="h2">
          {modalTitle}
        </Typography>
        <Typography sx={{ mt: 2 }}>{modalContent}</Typography>
      </Box>
    </Modal>
  );
};

export default CustomModal;
