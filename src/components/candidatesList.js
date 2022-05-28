import { Button } from '@material-ui/core'
import { Avatar } from '@material-ui/core'
import { Card } from '@material-ui/core'
import { Box } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import React from 'react'

function candidatesList(props) {
  return (
      <Card>
          <Box display="flex" justifyContent="Space-between">
              <Box m={2} display="flex">

                  <Avatar ></Avatar>
                  <Box ml={3} display="flex" flexDirection="column" justifyContent="space-between">
                      <Box display="flex">

                          <Typography variant="h5">{props.name} {props.fname}</Typography>
                          <Button>View Profile</Button>
                      </Box>
                      <Box>

                          <Typography style={{ fontSize: 12 }} variant="h6">{props.dept}</Typography>
                          <Typography style={{ fontSize: 12 }} variant="h6">{props.section}</Typography>
                      </Box>
                  </Box>
              </Box>
              
              <Box display="flex" flexDirection="column" m={5} justifyContent="center">
                  <Button style={{
                      borderRadius: 5,
                      color: "#00D05A"
                  }}>Vote</Button>
              </Box>
          </Box>
      </Card>
  )
}

export default candidatesList