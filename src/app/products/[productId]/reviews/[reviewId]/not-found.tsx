"use client";
import { usePathname } from 'next/navigation';
export default function NotFound() {
    const pathname = usePathname(); 
    const productId = pathname.split('/')[2];
    const reviewId = pathname.split('/')[4];
    return <>
    <h1>404 -review {reviewId} for product {productId} Page Not Found</h1>;
    <p>Could not find the page you are looking for.</p>
    </>

}