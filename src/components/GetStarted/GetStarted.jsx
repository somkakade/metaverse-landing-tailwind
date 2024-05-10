import AppStore from "../../../src/assets/app_store.png";
import PlayStore from "../../../src/assets/play_store.png";
const GetStarted = () => {
  return (
   <>
    <section className='py-16'>
        <div className="container">
            <div className='w-full md:w-2/5 mx-auto text-center min-h-[200px]'>
                <div>
                    <h2 className='text-3xl sm:text-4xl text-center font-semibold text-black'>Get Started With Our APP</h2>
                </div>
                <div className='py-5'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nihil provident soluta perferendis, alias repellat?</p>
                </div>
                <div className="flex items-center justify-center">
                    <div>
                        <img src={AppStore} alt="" className="max-w-[200px] max-h-[150px]" />
                    </div>
                    <div>
                        <img src={PlayStore} alt="" className="max-w-[200px] max-h-[150px]" />
                    </div>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}

export default GetStarted