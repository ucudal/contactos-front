import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.primerAngular.app',
  appName: 'primerAngular',
  webDir: 'dist/primer-angular',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    GoogleAuth: {
      "androidClientId": "647092089096-sk0avc1d85vf4l4554j8g2nbas3nu21h.apps.googleusercontent.com",
      "clientId": "647092089096-sk0avc1d85vf4l4554j8g2nbas3nu21h.apps.googleusercontent.com",
      "serverClientId": "647092089096-sk0avc1d85vf4l4554j8g2nbas3nu21h.apps.googleusercontent.com",
      "scopes": [
        "profile",
        "email"
      ],
    },
  },
};

export default config;
