// Import necessary components and styles
import ProductCard from "../components/ProductCard"


// Define the Home component
const Home = () => {
    return (
        <div className="">
            {/* Hero section with a large promotional image */}
            <div className="home_container">
                <img
                    style={{
                        maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
                    }}
                    className="w-[100%]  -z-1 mb-[-160px] mask"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
            </div>
            {/* First row of product cards */}
            <div className="flex z-1 m-[5px]">
                {/* ProductCard component with details */}
                <ProductCard
                    id="123213441"
                    title="Brother Genuine Cartridge TN760 High Yield Black Toner,1 Pack "
                    price={11.96}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71n5vk4vB-L._AC_UL480_FMwebp_QL65_.jpg"
                />
                <ProductCard
                    id="1321341"
                    title="Ailun Glass Screen Protector Compatible for iPhone 11/iPhone XR, 6.1 Inch 3 Pack Tempered Glass "
                    price={567}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71qC4GbNQJL._AC_SL1500_.jpg"
                />
            </div>
            {/* Second row of product cards */}
            <div className="flex z-1 mx-[5px]">
                {/* ProductCard component with details */}
                <ProductCard
                    id="1221341"
                    title="Nintendo Switch – OLED Model w/ White Joy-Con"
                    price={56}
                    rating={1}
                    image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/se-case-unselect-gallery-1-202309?wid=5120&hei=3280&fmt=p-jpg&qlt=80&.v=1692943841023"
                />
                {/* ProductCard component with details */}
                <ProductCard
                    id="1232134"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440 "
                    price={566.7}
                    rating={2}
                    image="https://unitheme.net/images/ab__webp/detailed/12/1600347947_1594550_jpg.webp"
                />
                {/* ProductCard component with details */}
                <ProductCard
                    id="1232341"
                    title="The Lean Startup: How Constant Innovation Creates "
                    price={5600}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                />
            </div>
            {/* Third row of product cards */}
            <div className="flex z-1 mx-[5px]">
                {/* ProductCard component with details */}
                <ProductCard
                    id="1232136"
                    title="The Lean Startup: How Constant Innovation Creates "
                    price={226}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/71sRzEgyiAS._AC_SL1500_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
