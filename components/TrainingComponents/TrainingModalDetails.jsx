import * as React from 'react';
import Button from '@mui/joy/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import styles from '../../styles/Home.module.css'
import Image from 'next/image';
import trainingImage from '../../public/Training Info.png'
import TrainingForm from './trainingcontent/TrainingForm'
import IconButton from '@mui/joy/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Link from '@mui/material/Link';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

const TrainingModalDetails = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <div>
            <Button component={Link} onClick={handleClickOpen('body')} color="danger" size="sm"
                variant="plain" xs={{ color: 'red' }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                    View Details
                    <ChevronRightOutlinedIcon />
                </div>
            </Button>
            <Dialog
                fullWidth
                maxWidth='md'
                open={open}
                onClose={handleClose}
                scroll={'body'}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title" sx={{
                    fontStyle: 'normal',
                    fontWeight: '600',
                    fontSize: '32px',
                    lineHeight: '40px',
                    color: '#BE0000',
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            Become UX Designer Nano Degree Program
                        </div>

                        <IconButton onClick={handleClose} color='transparent'><CloseOutlinedIcon /></IconButton>
                    </div>

                </DialogTitle>
                <DialogContent dividers={'paper'}>
                    <div className={styles.modalcontainer}>

                        <div className='topcontainer' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                            <div className='blackcontainer' style={{
                                background: '#333333',
                                boxShadow: '0px 0px 10px 3px rgba(0, 0, 0, 0.25)',
                                borderRadius: '5px',
                                width: '576px',
                                height: '97px',
                            }}>
                                <diV className='blackboxcontainer' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '15px', padding: '20px' }}>
                                    <div>
                                        <div style={{
                                            color: '#F5C8C8', fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '16px',
                                            lineHeight: '24px'
                                        }}>GSL Lead</div>
                                        <div style={{
                                            color: '#FFFFFF', fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: '20px',
                                            lineHeight: '28px'
                                        }}>Tamer Kandil</div>
                                    </div>

                                    <div>
                                        <div style={{
                                            color: '#F5C8C8', fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '16px',
                                            lineHeight: '24px'
                                        }}>Proposed Training Days</div>
                                        <div style={{
                                            color: '#FFFFFF', fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: '20px',
                                            lineHeight: '28px'
                                        }}>60</div>
                                    </div>

                                    <div>
                                        <div style={{
                                            color: '#F5C8C8', fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '16px',
                                            lineHeight: '24px'
                                        }}>Priority</div>
                                        <div style={{
                                            color: '#FFFFFF', fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: '20px',
                                            lineHeight: '28px'
                                        }}>P2</div>
                                    </div>
                                </diV>

                            </div>
                            <div className='imagecontainer' style={{ paddingLeft: '20px', }}>
                                <Image src={trainingImage} width='100px' height='50px' style={{}} />

                            </div>
                        </div>
                        <DialogContentText
                            id="scroll-dialog-description"
                            ref={descriptionElementRef}
                            tabIndex={-1}
                        >
                            <div className='maincontent' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <div className='1stpartion' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '20px', padding: '45px', width: '100%' }}>
                                    <div >
                                        <div style={{
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                            color: '#4A4D4E',
                                        }}>Manger Name</div>
                                        <div style={{
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: '20px',
                                            lineHeight: '28px',
                                            color: '#222222',
                                        }}>Kareem Abdelsadek</div>
                                    </div>
                                    <div>
                                        <div style={{
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                            color: '#4A4D4E',
                                        }}>Number of participantes</div>
                                        <div style={{
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: '20px',
                                            lineHeight: '28px',
                                            color: '#222222',
                                        }}>7</div>
                                    </div>
                                    <div>
                                        <div style={{
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                            color: '#4A4D4E',
                                        }}>Traning content outline</div>
                                        <div style={{
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: '20px',
                                            lineHeight: '28px',
                                            color: '#222222',
                                        }}>link</div>
                                    </div>
                                </div>

                                <div className='divider' style={{ width: '456px', border: '1px solid #D1D1D1' }}></div>

                                <div className='2stpartion' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '60px', width: '100%', padding: '45px' }}>
                                    <div >
                                        <div style={{
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                            color: '#4A4D4E',
                                        }}>Skills Categories</div>
                                        <div style={{
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: '20px',
                                            lineHeight: '28px',
                                            color: '#222222',
                                        }}>UI & UX</div>
                                    </div>
                                    <div>
                                        <div style={{
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                            color: '#4A4D4E',
                                        }}>Training Type</div>
                                        <div style={{
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: '20px',
                                            lineHeight: '28px',
                                            color: '#222222',
                                        }}>Upskilling - Developing additional skills to enhance performance /Knowledge in the current role.</div>
                                    </div>
                                </div>

                                <div className='divider' style={{ width: '456px', border: '1px solid #D1D1D1' }}></div>

                                <div className='3stpartion' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', gap: '20px', padding: '45px' }}>
                                    <div>
                                        <div style={{
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                            color: '#4A4D4E',
                                        }}>Business justification</div>
                                        <div style={{
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: '20px',
                                            lineHeight: '28px',
                                            color: '#222222',
                                        }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</div>
                                    </div>
                                </div>

                                <div className='divider' style={{ width: '456px', border: '1px solid #D1D1D1' }}></div>

                                <div className='4stpartion' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '20px', padding: '45px', width: '100%' }}>
                                    <div >
                                        <div style={{
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                            color: '#4A4D4E',
                                        }}>Proppsed Delivery Type</div>
                                        <div style={{
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: '20px',
                                            lineHeight: '28px',
                                            color: '#222222',
                                        }}>External</div>
                                    </div>
                                    <div>
                                        <div style={{
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                            color: '#4A4D4E',
                                        }}>Proposed External Delivery</div>
                                        <div style={{
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: '20px',
                                            lineHeight: '28px',
                                            color: '#222222',
                                        }}>Udacity Platform License </div>
                                    </div>
                                </div>

                                <div className='divider' style={{ width: '456px', border: '1px solid #D1D1D1' }}></div>

                                <div className='5stpartion' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '20px', padding: '45px', width: '100%' }}>
                                    <div >
                                        <div style={{
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                            color: '#4A4D4E',
                                        }}>Proficiency Level</div>
                                        <div style={{
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: '20px',
                                            lineHeight: '28px',
                                            color: '#222222',
                                        }}>Level 1 </div>
                                    </div>
                                    <div>
                                        <div style={{
                                            fontStyle: 'normal',
                                            fontWeight: '600',
                                            fontSize: '16px',
                                            lineHeight: '24px',
                                            color: '#4A4D4E',
                                        }}>Preferred Quarter</div>
                                        <div style={{
                                            fontStyle: 'normal',
                                            fontWeight: '400',
                                            fontSize: '20px',
                                            lineHeight: '28px',
                                            color: '#222222',
                                        }}>Q1 (April 23 to June 23)</div>
                                    </div>
                                </div>

                                <div className='divider' style={{ width: '456px', border: '1px solid #D1D1D1' }}></div>
                                <div>
                                    <TrainingForm />
                                </div>
                                <div className='divider' style={{ width: '456px', border: '1px solid #D1D1D1' }}></div>
                            </div>
                        </DialogContentText>

                    </div>
                </DialogContent>


                <DialogActions>
                    <Button onClick={handleClose} color='danger' size='md' style={{ padding: '20px' }}>Save</Button>
                </DialogActions>

            </Dialog>
        </div >
    )
}

export default TrainingModalDetails

