import Image from "next/image"
import { RiDoubleQuotesR } from "react-icons/ri"


const Testimonial = () => {
  return (
    <div>
      <div className="pt-12 pb-12 grid-cols-2 container">
        <h2 className="font-medium text-2xl pb-4">Testimonials</h2>
        <div className="grid lg:grid-cols-[300px,1fr] gap-4">
            <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
                <div className="flex flex-col text-center items-center gap-1">
                    <Image
                        src='/profile.png'
                        className="rounded-full inline-block"
                        alt=""
                        width={30}
                        height={30}
                    />
                    <h2 className="text-gray-500 font-black text-[20px]">John Mwangi</h2>
                    <p className="text-gray-500">CEO & Founder Blissfull</p>
                    <RiDoubleQuotesR className="text-accent text-3xl" />
                    <p className="max-w-[200px] text-gray-500">
                        Sit ipsum veniam duis officia culpa culpa pariatur sit excepteur ea laboris sint. Dolor amet irure duis magna do Lorem incididunt enim. Ea est mollit ad est ad. Ad ipsum consectetur exercitation voluptate laboris cupidatat. Enim do sunt incididunt eu. Reprehenderit aliquip nostrud ullamco magna proident minim id. Sunt nisi enim nostrud quis.
                    </p>
                </div>
            </div>
            <div className="bg-red-600 bg-[url(/banner1.jpg)] bg-cover rounded-2xl grid place-items-center">
                <div className="bg-[#ffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 px-2 grid place-items-center gap-4">
                    <button className="text-white bg-blackish p-2 rounded-md">25% Discount</button>
                    <h2 className="font-extralight text-2xl text-[#272727]">Summer Offers</h2>
                    <p className="text-gray-500 text-[20px]">
                        Call us to order your tub today
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
