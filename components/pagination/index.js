import { useState } from "react";
import styles from './pagination.module.css'
import PropTypes from "prop-types";
import Button from "Components/button";

export default function Pagination({ fetchPage, curPage }) {
    const [currentPage, setCurrentPage] = useState(curPage);
  
    function goToNextPage() {
        setCurrentPage((page) => page + 1);
        fetchPage(currentPage + 1);
      }
  
      function goToPreviousPage() {
        if(currentPage > 1){
            setCurrentPage((page) => page - 1);
            fetchPage(currentPage - 1);
        }
      }
  
      return (
        <>
            {/* previous button */}
            <Button
              onClick={goToPreviousPage}
              active={currentPage === 1 ? false : true}
              margin="5px"
            >
              prev
            </Button>
      
            {/* next button */}
            <Button
              onClick={goToNextPage}
              active
            >
              next
            </Button>
        </>
      );
  }

  Pagination.propTypes = {
    fetchPage: PropTypes.func.isRequired,
    curPage: PropTypes.number,
  };

  Pagination.defaultProps = {
    fetchPage: () => false,
    curPage: 1,
  };