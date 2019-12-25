const BASE_URL = 'cdn/stories/';

export const getPost = async (context) => {
    const posts = await context.app.$storyapi.get(
        `${BASE_URL}${context.route.path}`,
        { version: "draft", resolve_links: 1 }
    );

    return posts.data;
}
export const getPosts = async (context) => {
    const posts = await context.app.$storyapi.get(
        `${BASE_URL}`, {
        filter_query: {
            component: {
                in: "collection"
            }
        },
        cv: context.store.state.cacheVersio
    });
    return posts.data
}
export const getProduct = async (context) => {
    const product = await context.app.$storyapi.get(
        `${BASE_URL}${context.route.path}`,
        { version: "draft", resolve_links: 1 }
    );

    return product.data;
}
export const getProducts = async (context) => {
    const products = await context.app.$storyapi.get(BASE_URL, {
        starts_with: "products/" + context.route.path.split(/[\\/]/).pop(),
        version: "draft",
        resolve_links: 1
    });

    return products.data;
}
