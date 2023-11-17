import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'primerAngular.app',
  appName: 'primerAngular',
  webDir: 'dist/primer-angular',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    GoogleAuth: {
      scopes: ["profile", "email"],
      serverClientId: "647092089096-sk0avc1d85vf4l4554j8g2nbas3nu21h.apps.googleusercontent.com",
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
