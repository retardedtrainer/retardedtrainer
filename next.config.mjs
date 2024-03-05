/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Ajoutez une règle pour gérer les fichiers MP3
    config.module.rules.push({
      test: /\.(mp3)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            publicPath: "/_next/static/sounds/", // Chemin public vers les fichiers générés
            outputPath: "static/sounds/", // Chemin local pour les fichiers générés
          },
        },
      ],
    });

    // D'autres configurations personnalisées ici si nécessaire

    return config;
  },
};

export default nextConfig;
