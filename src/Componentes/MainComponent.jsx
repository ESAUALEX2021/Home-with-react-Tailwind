import imageMobile from '../assets/images/image-web-3-mobile.jpg'
import imagedesktop from '../assets/images/image-web-3-desktop.jpg'

export const MainComponent = () => {
  return (
    <section className=' mb-7'>
   
        <picture>
            <source  media="(max-width:640px)" srcSet={imageMobile}/>
            <source  media="(min-width:641px)" srcSet={imagedesktop}/>
            <img src={imageMobile} alt='Principal'/>
        </picture>
        <div className=' sm:flex'>
            <div className=' flex-1 py-5'>
                <h2 className=' text-[40px] font-bold sm:text-[58px] leading-none'>The Bright Future of Web 3.0?</h2>
            </div>
            <div className=' flex-1 pt-7'>
                <p className=' text-[13px] mb-7 sm:text-[15px]'> We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
                    But is it really fulfilling its promise?</p>
                <button className=' bg-SoftRed w-[185px] h-[48px] uppercase text-OffWhite hover:bg-VeryDarkBlue'>Read more</button>
            </div>
        </div>
    </section>
  )
}
