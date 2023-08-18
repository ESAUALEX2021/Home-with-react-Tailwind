

export const Cards = ({img, number, title, text}) => {
  return (
    <article className="flex h-[175px] md:w-[343px] md:flex-grow">
        <div className="w-[110px] flex-none ">
            <img src={img} alt="imagen" />
        </div>
        <div className="pl-6">
            <p className="text-GrayishBlue text-3xl mb-[18px] font-bold" >{number}</p>
            <h2 className="font-bold mb-[18px] hover:text-SoftOrange cursor-pointer ">{title}</h2>
            <p className=" text-GrayishBlue text-[18px] ">{text}</p>
        </div>
    </article>
  )
}

/* 01
Reviving Retro PCs
What happens when old PCs are given modern upgrades?

02
Top 10 Laptops of 2022
Our best picks for various needs and budgets.

03
The Growth of Gaming
How the pandemic has sparked fresh opportunities. */