import {Metadata} from 'next'
type props={
    params: {productId: string}
}
export async function generateMetadata({params}: props): Promise<Metadata>{
    const id = (await params).productId
    return {
        title: `Product ${id} details`,
        description: `This is the page for product ${id}`
    }
}
export default async function ProductDetails({params,}: {
params: Promise<{productId: string}>;
}){
    const productId = (await params).productId
    return <h1>details about product {productId}</h1>;
}
