import { Product } from "../../app/models/product";

interface Props {
    products: Product[];
    addProduct: () => void;
}

//export default function Catalog(props: Props) {
export default function Catalog({ products, addProduct }: Props) {
    return (
        <>
            <ul>
                {/* {props.products.map(product => ( */}
                {products.map(product => (
                    <li key={product.id}>{product.name} - {product.price}</li>
                ))}
            </ul>
            <button onClick={addProduct}>Add Product</button>
        </>
    )
}