import { Box, Button } from "@chakra-ui/react";

  
  
export const Pagination = ({page, skip, changeSkip }) => {


  
    return (
    <Box>
        
        <Button onClick={() => changeSkip (page-1, skip-12)} bg="black" color={'white'}
        disabled={page === 1}>Prev</Button>
        <Button bg="black" color={'white'} >{page}</Button>
        <Button bg="black" color={'white'} onClick={() => changeSkip(page+1, skip+12)}>Next</Button>

          
    </Box>
   
    );
  }
  
  export default Pagination;
  