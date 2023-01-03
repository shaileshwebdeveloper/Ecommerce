import { Button } from '@chakra-ui/react'
import React from 'react'

export const Pagination = ({page}) => {


  return (
    <div>

        <Button disabled={page===1}>Prev</Button>
                 {page}
        <Button>Next</Button>


    </div>
  )
}
