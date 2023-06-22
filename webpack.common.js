const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: {
    index: './src/index.js',
    page: './src/page.jsx',
    swipe: './src/javascript/swipe.js',
    search: './src/javascript/search.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs')
    // clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        resourceQuery: /raw/,
        type: 'asset/source'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),

    new CopyPlugin({
      patterns: [{ from: 'src/share', to: 'share' }]
    }),

    // Home page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/index.html',
      filename: './index.html',
      chunks: ['index', 'search']
    }),

    // Search page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/search.html',
      filename: './search.html',
      chunks: ['index', 'swipe', 'search']
    }),

    // 404 Error page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/404.html',
      filename: './404.html'
      // chunks: ['index']
    }),

    // Materials page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/materials.html',
      filename: './materials.html',
      chunks: ['index', 'swipe', 'search']
    }),

    // Articles
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/materials/articles.html',
      filename: './materials/articles.html',
      chunks: ['index', 'swipe', 'search']
    }),

    // Article — Kak-ya-pereezjala-iz-Norilska-v-Moskvu
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/materials/articles/Kak-ya-pereezjala-iz-Norilska-v-Moskvu.html',
      filename: './materials/articles/Kak-ya-pereezjala-iz-Norilska-v-Moskvu.html'
      // chunks: ['index']
    }),

    // Article — Pravila-zapolneniya-gramotnogo-rezyume
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/materials/articles/Pravila-zapolneniya-gramotnogo-rezyume.html',
      filename: './materials/articles/Pravila-zapolneniya-gramotnogo-rezyume.html'
      // chunks: ['index']
    }),

    // Article — Adaptatsiya-v-universitete-sovety-pervokursniku
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/materials/articles/Adaptatsiya-v-universitete-sovety-pervokursniku.html',
      filename: './materials/articles/Adaptatsiya-v-universitete-sovety-pervokursniku.html'
      // chunks: ['index']
    }),

    // Article — Aromatizatory-dlya-doma-chto-vybrat
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/materials/articles/Aromatizatory-dlya-doma-chto-vybrat.html',
      filename: './materials/articles/Aromatizatory-dlya-doma-chto-vybrat.html'
      // chunks: ['index']
    }),

    // Article — Pylesos-vs robot-pylesos-chto-vybrat
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/materials/articles/Pylesos-vs robot-pylesos-chto-vybrat.html',
      filename: './materials/articles/Pylesos-vs robot-pylesos-chto-vybrat.html'
      // chunks: ['index']
    }),

    // Article — Kak-sehat-ot-roditelej-moj-opyt
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/materials/articles/Kak-sehat-ot-roditelej-moj-opyt.html',
      filename: './materials/articles/Kak-sehat-ot-roditelej-moj-opyt.html'
      // chunks: ['index']
    }),

    // Videos
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/materials/videos.html',
      filename: './materials/videos.html',
      chunks: ['index', 'swipe']
    }),

    // Video — 10-bystryh-blyud-iz-tykvy
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/materials/videos/10-bystryh-blyud-iz-tykvy.html',
      filename: './materials/videos/10-bystryh-blyud-iz-tykvy.html'
      // chunks: ['index']
    }),

    // Video — Generalnaya-uborka
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/materials/videos/Generalnaya-uborka.html',
      filename: './materials/videos/Generalnaya-uborka.html'
      // chunks: ['index']
    }),

    // Video — Kak-vybirat-frukty
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/materials/videos/Kak-vybirat-frukty.html',
      filename: './materials/videos/Kak-vybirat-frukty.html'
      // chunks: ['index']
    }),

    // Video — Poklejka-oboev
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/materials/videos/Poklejka-oboev.html',
      filename: './materials/videos/Poklejka-oboev.html'
      // chunks: ['index']
    }),

    // Video — Sobiraem-chemodan
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/materials/videos/Sobiraem-chemodan.html',
      filename: './materials/videos/Sobiraem-chemodan.html'
      // chunks: ['index']
    }),

    // Video — Uhod-za-bolshimi-rasteniyami
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/materials/videos/Uhod-za-bolshimi-rasteniyami.html',
      filename: './materials/videos/Uhod-za-bolshimi-rasteniyami.html'
      // chunks: ['index']
    }),

    // Video — Kak-vybirat-frukty
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/materials/videos/Vybiraem-tsvety-na-prazdnik.html',
      filename: './materials/videos/Vybiraem-tsvety-na-prazdnik.html'
      // chunks: ['index']
    }),

    // Checklists
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/materials/checklists.html',
      filename: './materials/checklists.html',
      chunks: ['index', 'swipe']
    }),

    // Checklist — Chem-nakryt-stol-na-prazdnik
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/materials/checklists/Chem-nakryt-stol-na-prazdnik.html',
      filename: './materials/checklists/Chem-nakryt-stol-na-prazdnik.html'
      // chunks: ['index']
    }),

    // Checklist — Chto-polojit-v-aptechku
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/materials/checklists/Chto-polojit-v-aptechku.html',
      filename: './materials/checklists/Chto-polojit-v-aptechku.html'
      // chunks: ['index']
    }),

    // Checklist — Dokumenty-dlya-postupleniya
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/materials/checklists/Dokumenty-dlya-postupleniya.html',
      filename: './materials/checklists/Dokumenty-dlya-postupleniya.html'
      // chunks: ['index']
    }),

    // Checklist — Dokumenty-dlya-raboty
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/materials/checklists/Dokumenty-dlya-raboty.html',
      filename: './materials/checklists/Dokumenty-dlya-raboty.html'
      // chunks: ['index']
    }),

    // Checklist — Generalnaya-uborka-v-kvartire
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/materials/checklists/Generalnaya-uborka-v-kvartire.html',
      filename: './materials/checklists/Generalnaya-uborka-v-kvartire.html'
      // chunks: ['index']
    }),

    // Checklist — Kak-vybrat-produkty
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/materials/checklists/Kak-vybrat-produkty.html',
      filename: './materials/checklists/Kak-vybrat-produkty.html'
      // chunks: ['index']
    }),

    // Checklist — Veschi-dlya-bystrogo-pereezda
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/materials/checklists/Veschi-dlya-bystrogo-pereezda.html',
      filename: './materials/checklists/Veschi-dlya-bystrogo-pereezda.html'
      // chunks: ['index']
    }),

    // Checklist — Veschi-dlya-letnego-otpuska
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/materials/checklists/Veschi-dlya-letnego-otpuska.html',
      filename: './materials/checklists/Veschi-dlya-letnego-otpuska.html'
      // chunks: ['index']
    }),

    // Instruction — Podklyuchenie-interneta-vse-tonkosti-i-sekrety
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/instructions/Podklyuchenie-interneta-vse-tonkosti-i-sekrety.html',
      filename: './instructions/Podklyuchenie-interneta-vse-tonkosti-i-sekrety.html'
      // chunks: ['index']
    }),

    // Instruction — Kak-ochistit-noutbuk-ot-pyli
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/instructions/Kak-ochistit-noutbuk-ot-pyli.html',
      filename: './instructions/Kak-ochistit-noutbuk-ot-pyli.html'
      // chunks: ['index']
    }),

    // Instruction — Vybiraem-udobnyj-stul
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/instructions/Vybiraem-udobnyj-stul.html',
      filename: './instructions/Vybiraem-udobnyj-stul.html'
      // chunks: ['index']
    }),

    // Instruction — Kak-prishit-zaplatku
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/instructions/Kak-prishit-zaplatku.html',
      filename: './instructions/Kak-prishit-zaplatku.html'
      // chunks: ['index']
    }),

    // Instruction — Kak-oplatit-kommunalku
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/instructions/Kak-oplatit-kommunalku.html',
      filename: './instructions/Kak-oplatit-kommunalku.html'
      // chunks: ['index']
    }),

    // Instruction — Kak-otpravit-posylku
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/instructions/Kak-otpravit-posylku.html',
      filename: './instructions/Kak-otpravit-posylku.html'
      // chunks: ['index']
    }),

    // Instruction — Varim-yajtso-vsmyatku
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/instructions/Varim-yajtso-vsmyatku.html',
      filename: './instructions/Varim-yajtso-vsmyatku.html'
      // chunks: ['index']
    }),

    // Landing page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/old-landing.html',
      filename: './old-landing.html'
      // chunks: ['index']
    }),

    // Landing page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/landing.html',
      filename: './landing.html'
      // chunks: ['index']
    }),

    // Internal page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/page.html',
      filename: './pages/page.html'
      // chunks: ['page']
    }),

    // Stylegide page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/stylegide.html',
      filename: './pages/stylegide.html'
      // chunks: ['page']
    }),

    // Promo page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/pages/promo.html',
      filename: './pages/promo.html'
      // chunks: ['page']
    }),

    // About page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/about.html',
      filename: './about.html'
      // chunks: ['page']
    }),

    // Instructions page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/instructions.html',
      filename: './instructions.html'
      // chunks: ['page']
    }),

    // Instruction1 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/instructions/instr1.html',
      filename: './instructions/instr1.html'
      // chunks: ['page']
    }),

    // Instruction2 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/instructions/instr2.html',
      filename: './instructions/instr2.html'
      // chunks: ['page']
    }),

    // Instruction3 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/instructions/instr3.html',
      filename: './instructions/instr3.html'
      // chunks: ['page']
    }),

    // Instruction4 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/instructions/instr4.html',
      filename: './instructions/instr4.html'
      // chunks: ['page']
    }),

    // Instruction5 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/instructions/instr5.html',
      filename: './instructions/instr5.html'
      // chunks: ['page']
    }),

    // Instruction6 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/instructions/instr6.html',
      filename: './instructions/instr6.html'
      // chunks: ['page']
    }),

    // Instruction7 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/instructions/instr7.html',
      filename: './instructions/instr7.html'
      // chunks: ['page']
    }),

    // Article1 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/art1.html',
      filename: './articles/art1.html'
      // chunks: ['page']
    }),

    // Article2 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/art2.html',
      filename: './articles/art2.html'
      // chunks: ['page']
    }),

    // Article3 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/art3.html',
      filename: './articles/art3.html'
      // chunks: ['page']
    }),

    // Article4 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/art4.html',
      filename: './articles/art4.html'
      // chunks: ['page']
    }),

    // Article5 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/art5.html',
      filename: './articles/art5.html'
      // chunks: ['page']
    }),

    // Article6 page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/art6.html',
      filename: './articles/art6.html'
      // chunks: ['page']
    }),

    // Single mini video page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/vid1.html',
      filename: './articles/vid1.html'
      // chunks: ['page']
    }),

    // Single big video page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/vid2.html',
      filename: './articles/vid2.html'
      // chunks: ['page']
    }),

    // Single checklist page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/articles/check1.html',
      filename: './articles/check1.html'
      // chunks: ['page']
    }),

    // Questions page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/questions.html',
      filename: './questions.html'
      // chunks: ['page']
    }),

    // Single question page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/questions/quest1.html',
      filename: './questions/quest1.html'
      // chunks: ['page']
    }),

    // Tepmlates page
    new HtmlWebpackPlugin({
      hash: true,
      scriptLoading: 'blocking',
      template: './src/templates.html',
      filename: './templates.html'
      // chunks: ['page']
    }),

    // Partials
    new HtmlWebpackPartialsPlugin([
      {
        path: path.join(__dirname, './src/partials/analytics.html'),
        location: 'analytics',
        template_filename: '*',
        priority: 'replace'
      }
    ])
  ],
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
