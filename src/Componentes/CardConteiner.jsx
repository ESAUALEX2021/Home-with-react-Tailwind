import { Cards } from "./Cards"
import img01 from '../assets/images/image-retro-pcs.jpg'
import img02 from '../assets/images/image-gaming-growth.jpg'
import img03 from '../assets/images/image-top-laptops.jpg'

export const CardConteiner = () => {
  return (
    <div className=" md:flex mt-8 md:flex-wrap md:gap-10">
        <Cards img={img01}  number='01' title='Reviving Retro PCs' text='What happens when old PCs are given modern upgrades?' />
        <Cards img={img02} number='02' title='Top 10 Laptops of 2022' text='Our best picks for various needs and budgets.'/>
        <Cards img={img03} number='03' title='The Growth of Gaming' text='How the pandemic has sparked fresh opportunities.'/>
    </div>
  )
}
