// this function removes 'attributes' and 'data' bloated fields from strapi responses
// no idea why but the /user/me endpoint returns without this data so this function also keeps all data consistent

export const _format = (data) => {
    if(data && typeof data === 'object') {
        for (const [key, value] of Object.entries(data)) {
            if(value && typeof value === 'object' && (key === 'attributes' || key === 'data')) {

                // console.log(value)

                for (const [nestedKey, nestedValue] of Object.entries(value)) {
                    data[nestedKey] = nestedValue
                }
                
                delete data[key]

                data = _format(data)
                break
            } else if(value && typeof value === 'object') {
                data[key] = _format(value)
            }
        }
    }
    return data
}