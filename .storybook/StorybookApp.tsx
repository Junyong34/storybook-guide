import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Story, StoryContext } from '@storybook/react';
import { queryClient } from '@queries/client';
import { MemoryRouter, Route, Routes } from 'react-router';

export const StorybookApp = (StoryComp: Story) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <StoryComp />
      </QueryClientProvider>
    </div>
  );
};

export const StorybookApp2 = (StoryComp: Story, { parameters: { paramLink } }: StoryContext) => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        {!paramLink ? (
          <MemoryRouter>
            <StoryComp />
          </MemoryRouter>
        ) : (
          <MemoryRouter initialEntries={[paramLink.route]}>
            <Routes>
              <Route path={paramLink.path} element={<StoryComp />}></Route>
            </Routes>
          </MemoryRouter>
        )}
      </QueryClientProvider>
    </div>
  );
};
