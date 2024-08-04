import Link from "next/link"
import TubCard from "./TubCard"

const newProducts = [
    {
        img: '/claw.jpeg',
        title: 'Claw Foot Tub',
        description: 'Sint ea Lorem labore mollit.',
        rating: 4,
        price: '234',
        href: '',
    },
    {
        img: '/claw1.jpeg',
        title: '',
        description: 'Non sit velit irure sint culpa mollit in minim.',
        rating: 3,
        price: '',
        href: '',
    },
    {
        img: '/claw2.jpeg',
        title: '',
        description: 'Elit commodo cillum irure excepteur.',
        rating: 5,
        price: '',
        href: '',
    },
    {
        img: '/claw3.jpeg',
        title: '',
        description: 'In exercitation minim do esse adipisicing.',
        rating: 4,
        price: '',
        href: '',
    },
]

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">
            New Products
        </h2>
        <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-x-5 xl:gap-y-5">
            {newProducts.map((product, index) => (
                <Link key={index} href={product.href}>
                    <TubCard
                        img = {product.img}
                        title = {product.title}
                        description = {product.description}
                        rating = {product.rating}
                        price = { product.price }
                    />
                </Link>
            ))}
        </div>
      </div>
    </div>
  )
}

export default NewProducts
