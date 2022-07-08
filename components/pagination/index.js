import { useState } from "react";
import styles from './pagination.module.css'

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
        <div>
          {/* show the pagiantion
              it consists of next and previous buttons
              along with page numbers, in our case, 5 page
              numbers at a time
          */}
          <div className={styles.pagination + ' my-5'}>
            {/* previous button */}
            <button
              onClick={goToPreviousPage}
              className={`${styles.prev} ${currentPage === 1 ? styles.prev.disabled : ''}`}
            >
              prev
            </button>
      
            {/* next button */}
            <button
              onClick={goToNextPage}
              className={`${styles.next}`}
            >
              next
            </button>
          </div>
        </div>
      );
  }