import React  from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { QueryClientProvider } from 'react-query'
import {ReactQueryDevtools} from "react-query/devtools";
import {  Story } from "@storybook/react";
import {queryClient} from "@queries/client";

export const StorybookApp = (
    StoryComp: Story,
) => {

  return (
    <div style={{width: '100%', height:'100%'}}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
          <StoryComp />
      </QueryClientProvider>
    </div>
  )
}
