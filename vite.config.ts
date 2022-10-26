import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [react(), tsconfigPaths(),  svgr()],
    server: {
      // hmr: {
      //   overlay: false,
      // },
      host: true,
    },
  }
})
