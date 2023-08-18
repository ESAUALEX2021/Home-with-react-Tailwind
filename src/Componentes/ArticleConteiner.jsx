import { Article } from "./Article"

export const ArticleConteiner = () => {
  return (
    <aside className=" bg-VeryDarkBlue text-OffWhite py-[20px] px-[17px]">
        <h1 className="text-SoftOrange text-[30px] font-bold">New</h1>
        <Article title='Hydrogen VS Electric Cars'  despcrition='Will hydrogen-fueled cars ever catch up to EVs?'/>
        <Article title='The Downsides of AI Artistry'  despcrition='What are the possible adverse effects of on-demand AI image generation?'/>
        <Article title='Is VC Funding Drying Up?'  despcrition='Private funding by VC firms is down 50% YOY. We take a look at what that means.'  />
    </aside>
  )
}
