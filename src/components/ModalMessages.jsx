import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export default function ModalMessages(props) {
    const {title, description} = props;
    const [open, setOpen] = React.useState(true);
    const handleClose = (event, reason) => {
        if (reason === 'backdropClick') {
            return;
        }
        setOpen(false);
    };

    return (
        <div>
            <Modal
                disableEscapeKeyDown={true}
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box
                    sx={{
                        ...style,
                        width: 400,
                        color: '#d74141',
                        fontFamily: 'sans-serif',
                        fontWeight: '300',
                        border: '1px solid #7c1d1d',
                        borderRadius: '4px',
                    }}
                >
                    <h2 id="parent-modal-title">{title}</h2>
                    <p id="parent-modal-description">
                        {description}
                    </p>
                    <Button
                        onClick={handleClose}>Close</Button>
                </Box>
            </Modal>
        </div>
    );
}
