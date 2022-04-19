export async function loginWrapper(params, ctx) {
    const data = await params.callback(params.args)
    if(!data) ctx.$router.push('/account/login')
    else return data
}