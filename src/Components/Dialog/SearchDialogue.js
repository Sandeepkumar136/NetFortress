import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion
import { useSearchDialog } from '../Contexts/DialogOneContext';
import images from '../Assets/ImageExporter';
import { useNavigate } from 'react-router-dom';

const SearchDialogue = ({setSearchQuery}) => {
    const { isOpen, closeDialog } = useSearchDialog();
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');

    const handleOutsideClick = (e) => {
        if (e.target.id === 'dialog-search-overlay') {
            closeDialog();
        }
    }

    // Define motion variants for animation
    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } }
    };

    const dialogVariants = {
        hidden: { y: '100%', opacity: 0 }, // Start from bottom
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    const handleInputChange = (e)=>{
        setInputValue(e.target.value);
    }

    const handleFromSubmit = (e) =>{
        e.preventDefault();
        setSearchQuery(inputValue.toLowerCase());
        closeDialog();
        navigate('/search');
    }
    return (
        isOpen && (
            <motion.div 
                id="dialog-search-overlay" 
                onClick={handleOutsideClick}
                variants={overlayVariants} 
                initial="hidden" 
                animate="visible"
                exit="hidden"
            >
                <motion.div 
                    id="dialog-box" 
                    variants={dialogVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <div id="dialog-content">
                        <form className="search-form" onSubmit={handleFromSubmit}>
                            <input
                                type="text"
                                placeholder="Search..."
                            />
                            <button onClick={handleInputChange} type="submit"><i className='bx bx-search'></i></button>
                        </form>
                        <div id="dialog-header">
                            <img src={images.search_image} alt="searchbar-img" />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        )
    )
}

export default SearchDialogue;
