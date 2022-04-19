import axios from 'axios'

export default async ({ vueApp, $config: { APP_URL, EASY_NUXT_URL } }) => {
    const components = await axios.post(
            APP_URL + '/easy-nuxt/get-components',
            { data: { url: EASY_NUXT_URL + 'easy-nuxt/strapi/components/', override: '/Strapi/' } }
        )
        .then(res => res.data ? res.data.components : null)
        .catch(err => console.error('easy-nuxt: component api error, ' + err))

    // importing components
    if(components) {
        for await (const { name, url } of components) {
            const importedComponent = await import(`./components/${url}`)
            await vueApp.component(name, importedComponent.default)
        }
    } else console.error('easy-nuxt: components not registered correctly')
}