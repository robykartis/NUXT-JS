
export default defineNuxtConfig({

    app: {
        head: {
          title:'crud nuxt 3 application',
          meta:[
            {charset: 'utf-8'},
            {name:'',content:'idth=device-width, initial-scale=1'},
            {hid:'description',name:'description',content:'crud nuxt 3 application meta data description'},
            {name:'formate-description',content:'telphone-no'}
          ],
          link:[
            {
              rel: 'preconnect',
              href: 'https://fonts.googleapis.com'
            },
            {
              rel:'icon',
              type:'image/x-icon',
              href:'/faveicon.ico'
            },
            {
              rel:'stylesheet',
              href:"https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
            }
          ],
          script:[
              {
                src:'https://code.jquery.com/jquery-3.7.0.min.js',
                type:'text/javascript'
              },
              {
                src:'https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js',
                type:'text/javascript'
              }
          ],
        },

      },
      // modules:[
      //   '@nuxtjs/auth-next',
      //   '@nuxtjs/toast',
      // ]
     
})
