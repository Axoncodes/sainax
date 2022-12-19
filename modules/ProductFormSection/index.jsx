import ProductionForm from "../ProductForm";
import SectionHead from "../SectionHead";

export default function ProductFormSection({products}) {
    return (
        <section className="container vertical padding_l0">
            <section className="subcontainer horizontal righty padding_l3 horizontalTabletBreak">
            <SectionHead
                title={'ثبت سفارش محصول'}
                textcolor={'var(--primaryColor)'}
            />
            </section>
            <ProductionForm visible={true} products={products} />
        </section>
    )
}