import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import EditServiceForm from "./EditServiceForm";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 12,
  p: 4,
};

interface EditServiceProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  service: {
    service_id: number;
    service_name: string;
    description: string;
    price: number;
    status: string;
  };
  update: () => void;
}

export default function EditService({
  open,
  setOpen,
  service,
  update,
}: EditServiceProps) {
  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{ "& .MuiBackdrop-root": { backgroundColor: "#00000009" } }}
      >
        <Box sx={style}>
          <EditServiceForm service={service} update={update} />
        </Box>
      </Modal>
    </>
  );
}
